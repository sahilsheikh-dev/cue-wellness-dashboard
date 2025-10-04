import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const TOKEN_KEY = import.meta.env.VITE_STORAGE_TOKEN_KEY;

let isRefreshing = false;
let refreshSubscribers = [];
let onLogout = () => {};
let onTokenUpdate = () => {};

function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}
function onRefreshed(token) {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
}

export function registerAuthHandlers({ handleLogout, handleTokenUpdate }) {
  if (typeof handleLogout === "function") onLogout = handleLogout;
  if (typeof handleTokenUpdate === "function")
    onTokenUpdate = handleTokenUpdate;
}

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ---- Centralized 401 Handling ----
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (!error.response || error.response.status !== 401 || original._retry)
      return Promise.reject(error);

    // Never refresh if we're already refreshing or hitting refresh endpoint
    if (original.url.includes("/admin/refresh")) {
      onLogout();
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        subscribeTokenRefresh((newToken) => {
          if (!newToken) return reject(error);
          original.headers.Authorization = `Bearer ${newToken}`;
          original._retry = true;
          resolve(api(original));
        });
      });
    }

    isRefreshing = true;
    original._retry = true;

    try {
      const res = await axios.post(`${API_URL}/admin/refresh`, null, {
        withCredentials: true,
      });

      const newToken = res?.data?.data?.accessToken;
      if (!newToken) throw new Error("Missing access token");

      localStorage.setItem(TOKEN_KEY, newToken);
      onTokenUpdate(newToken);
      onRefreshed(newToken);

      original.headers.Authorization = `Bearer ${newToken}`;
      return api(original);
    } catch (err) {
      onRefreshed(null);
      onLogout();
      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  }
);
