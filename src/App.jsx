import { useState, useEffect } from "react";
import DataContext from "./datacontext/datacontext.jsx";
import AllRoutes from "./routes/allroutes.jsx";
import useAuthService from "./services/authservice/authservice.jsx";

function App() {
  const { data, loginUser, logoutUser, logout, loading } = useAuthService();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (loading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          const inc = Math.random() * 1.5;
          return Math.min(prev + inc, 90);
        });
      }, 100);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => setProgress(0), 500);
      return () => clearTimeout(timeout);
    }
    return () => clearInterval(interval);
  }, [loading]);

  if (loading) {
    return (
      <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="mt-4 text-xl font-semibold text-gray-700">
          LOADING...
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-75"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></span>
        </div>
      </div>
    );
  }

  return (
    <DataContext.Provider
      value={{ login: loginUser, logoutUser, logout, data }}
    >
      <AllRoutes />
    </DataContext.Provider>
  );
}

export default App;
