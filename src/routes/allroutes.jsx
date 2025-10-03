// src/routes/allroutes.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import DataContext from "../datacontext/datacontext.jsx";
import ProgressContext from "../components/progresscontext/progresscontext.jsx";
import { Progress } from "../components/ui/progress.js";

import Dashboard from "../pages/dashboard/dashboard.jsx";
import Login from "../pages/auth/login/login.jsx";
import NotFoundError from "../pages/error/notfounderror.jsx";
import SidebarLayout from "../components/sidebar/sidebarlayout.jsx";
import Coaches from "../pages/coach/coaches.jsx";
import CoachDetails from "../pages/coach/coachdetails.jsx";
import AllActivities from "../pages/allacitivies/allacitivies.jsx";

const AllRoutes = () => {
  const { data } = useContext(DataContext);
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

  return (
    <>
      {isActive && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Progress value={progress} className="h-1 bg-transparent" />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
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
        </Route>
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
