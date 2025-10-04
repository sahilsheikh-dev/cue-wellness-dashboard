import {
  Home,
  UserCircle,
  Users,
  Calendar,
  BookOpen,
  MessageSquare,
  CreditCard,
  Settings,
  FileText,
  Globe,
  LogOut,
  Building,
  GraduationCap,
  Store,
  ClipboardList,
} from "lucide-react";

const SidebarData = [
  // {
  //   section: "CUE-WELLNESS",
  //   links: [{ isTrigger: true }]
  // },
  {
    section: "ADMIN",
    links: [
      { name: "Dashboard Statistics", path: "/dashboard", icon: Home },
      { name: "App", path: "/app", icon: Calendar },
      { name: "My Profile", path: "/profile", icon: UserCircle },
    ],
  },
  {
    section: "User Management",
    links: [
      { name: "Clients", path: "/clients", icon: Users },
      { name: "Coaches", path: "/coaches", icon: GraduationCap },
      {
        name: "Event Organizers",
        path: "/event-organizers",
        icon: ClipboardList,
      },
      { name: "Product Companies", path: "/product-companies", icon: Store },
      { name: "Admins", path: "/admins", icon: Building },
    ],
  },
  {
    section: "Engagement",
    links: [
      {
        name: "Awareness",
        icon: FileText,
        children: [
          { name: "Questionnaire", path: "/questionnaire/awareness" },
          { name: "Meaning", path: "/meaning/awareness" },
          {
            name: "Guidelines",
            path: "/questionnaire/guidelines",
          },
        ],
      },
      {
        name: "Connections",
        icon: Users,
        children: [
          { name: "All Activies", path: "/activies/all" },
          { name: "Guidelines", path: "/connections/guidelines" },
        ],
      },
      {
        name: "Reflection",
        icon: BookOpen,
        children: [
          { name: "Meditation", path: "/meditation" },
          { name: "Guidelines", path: "/reflections/guidelines" },
        ],
      },
      {
        name: "Events",
        icon: Calendar,
        children: [
          { name: "All Events", path: "/events/all" },
          { name: "Guidelines", path: "/events/guidelines" },
        ],
      },
      {
        name: "Chat",
        icon: MessageSquare,
        children: [
          { name: "Client Chats", path: "/chat/clients" },
          { name: "Coach Chats", path: "/chat/coaches" },
          { name: "Event Organizer Chats", path: "/chat/event-organizers" },
          { name: "Product Company Chats", path: "/chat/product-companies" },
        ],
      },
    ],
  },
  {
    section: "Monetization",
    links: [{ name: "Transactions", path: "/transactions", icon: CreditCard }],
  },
  {
    section: "Policies",
    links: [
      { name: "Privacy Policy", path: "/privacy-policy", icon: FileText },
      {
        name: "Terms and Conditions",
        icon: FileText,
        children: [
          { name: "T&Cs - Client", path: "/terms/client" },
          { name: "T&Cs - Coach", path: "/terms/coach" },
          { name: "T&Cs - Event Organizer", path: "/terms/event-organizer" },
          { name: "T&Cs - Product Company", path: "/terms/product-company" },
        ],
      },
    ],
  },
  {
    section: "System",
    links: [
      { name: "Countries", path: "/system/countries", icon: Globe },
      { name: "Languages", path: "/system/languages", icon: Globe },
      { name: "Settings", path: "/settings", icon: Settings },
    ],
  },
  {
    links: [{ name: "Logout", path: "/logout", icon: LogOut }],
  },
];

export default SidebarData;
