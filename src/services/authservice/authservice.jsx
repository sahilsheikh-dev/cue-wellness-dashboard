import { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProgressContext from "../../components/progresscontext/progresscontext";
import { api, registerAuthHandlers } from "../http/apiClient";

const API_URL = import.meta.env.VITE_API_URL;
const TOKEN_KEY = import.meta.env.VITE_STORAGE_TOKEN_KEY;
const LOGIN_TIME_KEY = import.meta.env.VITE_STORAGE_LOGIN_TIME_KEY;

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
  return payload?.exp ? payload.exp * 1000 : null;
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

  const logout = useCallback(() => {
    setData({ auth: false, authToken: null, admin: null });
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(LOGIN_TIME_KEY);
    localStorage.setItem("LOGOUT_EVENT", Date.now().toString());
    navigate("/login", { replace: true });
  }, [navigate]);

  useEffect(() => {
    registerAuthHandlers({
      handleLogout: logout,
      handleTokenUpdate: (newToken) => {
        setData((s) => ({ ...s, auth: true, authToken: newToken }));
        localStorage.setItem(TOKEN_KEY, newToken);
      },
    });
  }, [logout]);

  const finishLogin = useCallback(
    (accessToken, adminInfo) => {
      setData({ auth: true, authToken: accessToken, admin: adminInfo || null });
      localStorage.setItem(TOKEN_KEY, accessToken);
      localStorage.setItem(LOGIN_TIME_KEY, Date.now().toString());
      navigate("/dashboard", { replace: true });
    },
    [navigate]
  );

  const loginUser = async (mobile, password) => {
    const interval = startProgress();
    try {
      const res = await axios.post(
        `${API_URL}/admin/login`,
        { mobile, password },
        { withCredentials: true }
      );
      const accessToken = res?.data?.data?.accessToken;
      const adminInfo = res?.data?.data?.admin || null;
      if (!accessToken) throw new Error("No access token received");
      finishLogin(accessToken, adminInfo);
      completeProgress(interval);
      return true;
    } catch (err) {
      completeProgress(interval);
      throw err;
    }
  };

  const logoutUser = useCallback(async () => {
    const interval = startProgress();
    try {
      await axios.post(`${API_URL}/admin/logout`, null, {
        withCredentials: true,
      });
    } catch {
      // ignore
    } finally {
      completeProgress(interval);
      logout();
    }
  }, [API_URL, logout, startProgress, completeProgress]);

  useEffect(() => {
    const bootstrap = async () => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        setLoading(false);
        return;
      }

      const expMs = getExpMs(token);
      if (!expMs || Date.now() < expMs) {
        setData({ auth: true, authToken: token, admin: null });
        setLoading(false);
        return;
      }

      try {
        const res = await axios.post(`${API_URL}/admin/refresh`, null, {
          withCredentials: true,
        });
        const newToken = res?.data?.data?.accessToken;
        if (newToken) {
          localStorage.setItem(TOKEN_KEY, newToken);
          setData({ auth: true, authToken: newToken, admin: null });
        } else {
          logout();
        }
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    bootstrap();

    const syncLogout = (e) => {
      if (e.key === "LOGOUT_EVENT") logout();
    };

    window.addEventListener("storage", syncLogout);
    return () => window.removeEventListener("storage", syncLogout);
  }, [API_URL, logout]);

  return { data, loginUser, logoutUser, logout, loading };
}
