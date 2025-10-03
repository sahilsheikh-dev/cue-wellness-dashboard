import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from ".././ui/sidebar";
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
    <SidebarProvider className="h-screen w-screen  " >
      <div className="flex h-screen w-screen ">
        <AppSidebar />
        <main className="flex  flex-row space-x-3 flex-1 h-full overflow-y-auto p-2 rounded-tl-2xl">
          <SidebarTrigger className="mb-4 p-3 rounded-md bg-white/20 backdrop-blur-md text-gray-200 hover:bg-white/30 hover:text-white shadow-md transition-all duration-300" />

          <div className="flex-1">
            <Outlet/> {/* nested routes render here */}
          </div>
        </main>

      </div>
    </SidebarProvider>
  );


}