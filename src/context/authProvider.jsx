import { createContext, useContext } from "react";
import useAuthService from "../services/authservice/authservice";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const auth = useAuthService(); // ✅ Only one instance of useAuthService

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
