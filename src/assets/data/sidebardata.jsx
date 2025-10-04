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
  Package,
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
        { name: "Settings", path: "/settings", icon: Settings },
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
          { name: "All Topics", path: "/alltopics/awareness" },
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
          { name: "Guide", path: "/guide/reflections" },
          { name: "Audio", path: "/audio/reflections" },
          { name: "Guidelines", path: "/reflections/guidelines" },
        ],
      },
         {
        name: "Sessions",
        icon: Calendar,
        children: [
          { name: "All Sessions", path: "/sessions/all" },
          { name: "Guidelines", path: "/sessions/guidelines" },
        ],
      },
      {
        name: "Events",
        icon: ClipboardList,
        children: [
          { name: "All Events", path: "/events/all" },
          { name: "Guidelines", path: "/events/guidelines" },
        ],
      },
      {
        name: "Products",
        icon: Package,
        children: [
          { name: "All Products", path: "/products/all" },
          { name: "Guidelines", path: "/prodducts/guidelines" },
        ],
      },
      {
        name: "Chat",
        icon: MessageSquare,
        children: [
          { name: "Client", path: "/chat/clients" },
          { name: "Coach", path: "/chat/coaches" },
          { name: "Event Organizer", path: "/chat/event-organizers" },
          { name: "Product Company", path: "/chat/product-companies" },
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
          { name: "Client", path: "/terms/client" },
          { name: "Coach", path: "/terms/coach" },
          { name: "Event Organizer", path: "/terms/event-organizer" },
          { name: "Product Company", path: "/terms/product-company" },
        ],
      },
    ],
  },
  // {
  //   section: "System",
  //   links: [
  //     { name: "Countries", path: "/system/countries", icon: Globe },
  //     { name: "Languages", path: "/system/languages", icon: Globe },
  //   ],
  // },
  {
    links: [{ name: "Logout", path: "/logout", icon: LogOut }],
  },
];

export default SidebarData;
