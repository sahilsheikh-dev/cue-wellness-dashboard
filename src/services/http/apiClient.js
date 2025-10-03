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

/** Public registration so the auth hook can wire callbacks */
export function registerAuthHandlers({ handleLogout, handleTokenUpdate }) {
  if (typeof handleLogout === "function") onLogout = handleLogout;
  if (typeof handleTokenUpdate === "function")
    onTokenUpdate = handleTokenUpdate;
}

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // needed for RefreshToken cookie
  headers: { "Content-Type": "application/json" },
});

// Attach Authorization header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 -> try refresh -> retry once
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    // If request already retried or not 401, fail fast
    if (!error.response || error.response.status !== 401 || original._retry) {
      return Promise.reject(error);
    }

    // Queue retries while a refresh is in-flight
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        subscribeTokenRefresh((newToken) => {
          if (!newToken) {
            reject(error);
            return;
          }
          original.headers.Authorization = `Bearer ${newToken}`;
          original._retry = true;
          resolve(api(original));
        });
      });
    }

    // Start refresh flow
    original._retry = true;
    isRefreshing = true;

    try {
      const refreshRes = await axios.post(`${API_URL}/admin/refresh`, null, {
        withCredentials: true,
      });

      const newToken = refreshRes?.data?.data?.accessToken;
      if (!newToken) throw new Error("No accessToken from refresh");

      // Save + broadcast
      localStorage.setItem(TOKEN_KEY, newToken);
      onTokenUpdate(newToken);
      onRefreshed(newToken);

      // Retry the original request with new token
      original.headers.Authorization = `Bearer ${newToken}`;
      return api(original);
    } catch (e) {
      // Hard logout on refresh failure
      onRefreshed(null);
      onLogout(); // clears storage + redirects
      return Promise.reject(e);
    } finally {
      isRefreshing = false;
    }
  }
);
