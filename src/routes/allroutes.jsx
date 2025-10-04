import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useAuth } from "../context/authProvider";
import ProgressContext from "../components/progresscontext/progresscontext";
import { Progress } from "../components/ui/progress";
import bgImage from "../assets/images/background.png";

import Dashboard from "../pages/dashboard/dashboard";
import Login from "../pages/auth/login/login";
import NotFoundError from "../pages/error/notfounderror";
import SidebarLayout from "../components/sidebar/sidebarlayout";
import Coaches from "../pages/coach/coaches";
import CoachDetails from "../pages/coach/coachdetails";
import AllActivities from "../pages/allacitivies/allacitivies";

const AllRoutes = () => {
  const { data, loading } = useAuth();
  const { progress, isActive, startProgress, completeProgress } =
    useContext(ProgressContext);
  const location = useLocation();

  useEffect(() => {
    const interval = startProgress();
    const t = setTimeout(() => completeProgress(interval), 600);
    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <Progress value={progress} className="h-1 w-1/2" />
        <p>Checking session...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bgImage}), linear-gradient(135deg, #1e3c72, #2a5298)`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {isActive && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Progress value={progress} className="h-1 bg-transparent" />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={data.auth ? "/dashboard" : "/login"} replace />
          }
        />
        <Route
          path="/login"
          element={data.auth ? <Navigate to="/dashboard" replace /> : <Login />}
        />
        <Route
          element={
            data.auth ? <SidebarLayout /> : <Navigate to="/login" replace />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/coaches/:id" element={<CoachDetails />} />
          <Route path="/activies/all" element={<AllActivities />} />
          <Route path="*" element={<NotFoundError />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
