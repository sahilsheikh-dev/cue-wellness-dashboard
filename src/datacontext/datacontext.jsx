import { createContext } from "react";
import useAuthService from "../services/authservice/authservice";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const { data, loginUser, logoutUser, logout, loading } = useAuthService();

    // Show loader until auth/session check completes
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <DataContext.Provider
            value={{
                data,        // { auth, authToken }
                loginUser,   // API login
                logoutUser,  // API logout
                logout,      // local logout
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
