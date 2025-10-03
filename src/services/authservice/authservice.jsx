import { useState, useEffect, useCallback, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProgressContext from "../../components/progresscontext/progresscontext";
import { api, registerAuthHandlers } from "../http/apiClient";

const API_URL = import.meta.env.VITE_API_URL;
const TOKEN_KEY = import.meta.env.VITE_STORAGE_TOKEN_KEY; // e.g. "CW_DASH_AT"
const LOGIN_TIME_KEY = import.meta.env.VITE_STORAGE_LOGIN_TIME_KEY; // keep for your flow

// Parse base64url (no padding) JWT payload safely
function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

function getExpMs(token) {
  const payload = parseJwt(token);
  if (!payload?.exp) return null;
  return payload.exp * 1000;
}

export default function useAuthService() {
  const navigate = useNavigate();
  const { startProgress, completeProgress } = useContext(ProgressContext);

  const [data, setData] = useState({
    auth: false,
    authToken: null,
    admin: null,
  });
  const [loading, setLoading] = useState(true);

  // timer to pre-emptively refresh/logout
  const refreshTimerRef = useRef(null);

  const clearRefreshTimer = () => {
    if (refreshTimerRef.current) {
      clearTimeout(refreshTimerRef.current);
      refreshTimerRef.current = null;
    }
  };

  // Hard logout (local + route + broadcast)
  const logout = useCallback(() => {
    clearRefreshTimer();
    setData({ auth: false, authToken: null, admin: null });
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(LOGIN_TIME_KEY);
    localStorage.setItem("LOGOUT_EVENT", Date.now().toString()); // cross-tab
    navigate("/login", { replace: true });
  }, [navigate]);

  // Register Axios callbacks exactly once
  useEffect(() => {
    registerAuthHandlers({
      handleLogout: logout,
      handleTokenUpdate: (newToken) => {
        // update state + reschedule refresh
        setData((s) => ({ ...s, auth: true, authToken: newToken }));
        localStorage.setItem(TOKEN_KEY, newToken);
        scheduleExpiryCheck(newToken);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pre-empt token expiry: schedule a check ~60s before exp
  const scheduleExpiryCheck = useCallback(
    (token) => {
      clearRefreshTimer();
      const expMs = getExpMs(token);
      if (!expMs) return;

      const now = Date.now();
      const lead = 60 * 1000; // 60s earlier
      const delay = Math.max(0, expMs - now - lead);

      refreshTimerRef.current = setTimeout(async () => {
        try {
          // try refreshing silently
          const res = await axios.post(`${API_URL}/admin/refresh`, null, {
            withCredentials: true,
          });
          const newToken = res?.data?.data?.accessToken;
          if (newToken) {
            localStorage.setItem(TOKEN_KEY, newToken);
            setData((s) => ({ ...s, auth: true, authToken: newToken }));
            scheduleExpiryCheck(newToken);
            return;
          }
        } catch {
          // ignore, will fall back to 401 on next API call
        }
        // If refresh didn't happen, force logout at exp time
        const msToExp = Math.max(0, expMs - Date.now());
        refreshTimerRef.current = setTimeout(() => logout(), msToExp + 250);
      }, delay);
    },
    [logout]
  );

  // Login helper
  const finishLogin = useCallback(
    (accessToken, adminInfo) => {
      setData({ auth: true, authToken: accessToken, admin: adminInfo || null });
      localStorage.setItem(TOKEN_KEY, accessToken);
      localStorage.setItem(LOGIN_TIME_KEY, Date.now().toString()); // keep your flow
      scheduleExpiryCheck(accessToken);
      navigate("/dashboard", { replace: true });
    },
    [navigate, scheduleExpiryCheck]
  );

  // Public: Login
  const loginUser = async (mobile, password) => {
    const interval = startProgress();
    try {
      // backend expects mobile/password, sets RefreshToken cookie, returns accessToken + admin
      const res = await axios.post(
        `${API_URL}/admin/login`,
        { mobile, password },
        { withCredentials: true }
      );
      const accessToken = res?.data?.data?.accessToken;
      const adminInfo = res?.data?.data?.admin || null;
      if (!accessToken) throw new Error("No access token");
      finishLogin(accessToken, adminInfo);
      completeProgress(interval);
      return true;
    } catch (err) {
      completeProgress(interval);
      throw err;
    }
  };

  // Public: Logout (server + local)
  const logoutUser = useCallback(async () => {
    const interval = startProgress();
    try {
      // server invalidates refresh cookie/token; access token is stateless (JWT)
      await axios.post(`${API_URL}/admin/logout`, null, {
        withCredentials: true,
      });
    } catch {
      // ignore errors – we still clear locally
    } finally {
      completeProgress(interval);
      logout();
    }
  }, [API_URL, logout, startProgress, completeProgress]);

  // Initial session bootstrap
  useEffect(() => {
    const bootstrap = async () => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        setLoading(false);
        return;
      }

      // If token is expired, try refresh once; else trust it
      const expMs = getExpMs(token);
      if (expMs && Date.now() >= expMs) {
        try {
          const res = await axios.post(`${API_URL}/admin/refresh`, null, {
            withCredentials: true,
          });
          const newToken = res?.data?.data?.accessToken;
          if (newToken) {
            localStorage.setItem(TOKEN_KEY, newToken);
            setData({ auth: true, authToken: newToken, admin: null });
            scheduleExpiryCheck(newToken);
            setLoading(false);
            return;
          }
          logout();
        } catch {
          logout();
        }
      } else {
        setData({ auth: true, authToken: token, admin: null });
        scheduleExpiryCheck(token);
        setLoading(false);
      }
    };

    bootstrap();

    // Visibility refresh (keeps your flow)
    const onVisible = async () => {
      if (document.hidden) return;
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) return;
      const expMs = getExpMs(token);
      if (expMs && Date.now() > expMs - 45_000) {
        // if about to expire in <45s, attempt refresh
        try {
          const res = await axios.post(`${API_URL}/admin/refresh`, null, {
            withCredentials: true,
          });
          const newToken = res?.data?.data?.accessToken;
          if (newToken) {
            localStorage.setItem(TOKEN_KEY, newToken);
            setData((s) => ({ ...s, auth: true, authToken: newToken }));
            scheduleExpiryCheck(newToken);
          }
        } catch {
          // ignored; next call will 401 and trigger logout
        }
      }
    };

    // Cross-tab logout
    const syncLogout = (e) => {
      if (e.key === "LOGOUT_EVENT") logout();
    };

    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("storage", syncLogout);

    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("storage", syncLogout);
      clearRefreshTimer();
    };
  }, [API_URL, logout, scheduleExpiryCheck]);

  return { data, loginUser, logoutUser, logout, loading };
}
