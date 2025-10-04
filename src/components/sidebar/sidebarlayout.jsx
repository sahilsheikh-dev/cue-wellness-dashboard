// src/components/common/Sidebar/SidebarLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider } from ".././ui/sidebar";
import { AppSidebar } from "./appsidebar";

export default function SidebarLayout() {
  const location = useLocation();

  // Hide sidebar on login or any other auth pages
  const noSidebarRoutes = ["/login"];
  const hideSidebar = noSidebarRoutes.includes(location.pathname);

  if (hideSidebar) {
    return <Outlet />; // just render children without sidebar
  }

  return (
    <SidebarProvider className="h-screen w-screen">
      <div className="flex h-screen w-screen">
        <AppSidebar />
        <main className="flex flex-1 h-full overflow-y-auto p-4 rounded-tl-2xl">
          <Outlet /> {/* nested routes render here */}
        </main>
      </div>
    </SidebarProvider>
  );
}
