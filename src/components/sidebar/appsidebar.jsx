import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authProvider.jsx";
import SidebarData from "../../assets/data/sidebardata.jsx";

import {
  Sidebar,
  useSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "../ui/sidebar.js";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../ui/collapsible.js";

import { ChevronDown } from "lucide-react";

export function AppSidebar() {
  const { logoutUser } = useAuth(); // ✅ now works
  useSidebar();

  return (
    <Sidebar
      className="h-full w-64 border-r border-white/20 bg-white/10 backdrop-blur-md shadow-lg"
      side="left"
      variant="sidebar"
      collapsible="icon"
    >
      <div className="flex items-center justify-between p-2 text-center">
        <SidebarTrigger className="p-2 rounded-md bg-white/20 text-black hover:bg-white/30 transition" />
      </div>

      <SidebarContent>
        {SidebarData.map((section, secIndex) => (
          <SidebarGroup
            key={`section-${secIndex}-${section.section || secIndex}`}
          >
            <SidebarGroupLabel className="uppercase tracking-wide text-xs text-black">
              {section.section}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="font-semibold">
                {section.links.map((link, linkIndex) => (
                  <SidebarMenuItem
                    key={`link-${secIndex}-${linkIndex}-${link.name}`}
                  >
                    {link.name === "Logout" ? (
                      <SidebarMenuButton asChild isActive>
                        <button onClick={logoutUser}>
                          <link.icon size={18} />
                          <span>{link.name}</span>
                        </button>
                      </SidebarMenuButton>
                    ) : link.children ? (
                      <Collapsible
                        defaultOpen={false}
                        className="group/collapsible w-full"
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="flex items-center gap-2 rounded-md p-2 hover:bg-white/20 transition">
                            <link.icon size={18} />
                            <span>{link.name}</span>
                            <ChevronDown className="ml-auto" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {link.children.map((child, childIndex) => (
                              <SidebarMenuSubItem
                                key={`child-${secIndex}-${linkIndex}-${childIndex}-${child.name}`}
                              >
                                <NavLink
                                  to={child.path}
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 pl-6 py-2 rounded-md ${
                                      isActive
                                        ? "bg-white/30 font-semibold text-black"
                                        : "hover:bg-white-50"
                                    }`
                                  }
                                >
                                  {child.name}
                                </NavLink>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `flex items-center gap-2 rounded-md p-2 ${
                              isActive
                                ? "bg-white/30 font-semibold text-black"
                                : "hover:bg-white/20"
                            }`
                          }
                        >
                          <link.icon size={18} />
                          <span>{link.name}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
