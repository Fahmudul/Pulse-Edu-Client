import Stack from "@/components/Stack";
import {
  BarChart,
  Briefcase,
  CalendarDays,
  Code,
  CreditCard,
  Github,
  MessageSquare,
  MessageSquareCode,
  Newspaper,
  PlusCircle,
  Settings,
  User2,
  UserPlus,
} from "lucide-react";

export const adminMenuItems = [
  {
    icon: <BarChart className="w-5 h-5" />,
    label: "Analytics",
    path: "/dashboard/admin/analytics",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "Projects",
    path: "/dashboard/admin/add-projects",
  },
  {
    icon: <Code className="w-5 h-5" />,
    label: "Skills",
    path: "/dashboard/admin/add-skills",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Messages",
    path: "/dashboard/admin/messages",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "Github Stats",
    path: "/dashboard/admin/github",
  },
  {
    icon: <Newspaper className="w-5 h-5" />,
    label: "Blogs",
    path: "/dashboard/admin/add-blog",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    label: "Settings",
    path: "/dashboard/admin/settings",
  },
];
export const userMenuItems = [
  {
    icon: <User2 className="w-5 h-5" />,
    label: "Profile",
    path: "/dashboard/user/profile",
  },

  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Messages",
    path: "/dashboard/user/messages",
  },
  {
    icon: <Newspaper className="w-5 h-5" />,
    label: "Add Blog",
    path: "/dashboard/user/add-blog",
  },

  {
    icon: <Settings className="w-5 h-5" />,
    label: "Settings",
    path: "/dashboard/user/settings",
  },
];

export const teacherMenuItems = [
  {
    icon: <BarChart className="w-5 h-5" />,
    label: "Dashboard",
    path: "/dashboard/teacher/profile",
  },
  {
    icon: <PlusCircle className="w-5 h-5" />,
    label: "Create Subject",
    path: "/dashboard/teacher/create-subject",
  },
  {
    icon: <Stack width="24" height="24" />,
    label: "My Subjects",
    path: "/dashboard/teacher/subjects",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    label: "Earning",
    path: "/dashboard/teacher/earning",
  },
  {
    icon: <MessageSquareCode className="w-5 h-5" />,
    label: "Messages",
    path: "/dashboard/teacher/messages",
  },
  {
    icon: <CalendarDays className="w-5 h-5" />,
    label: "Availability",
    path: "/dashboard/teacher/availability",
  },
  {
    icon: <UserPlus className="w-5 h-5" />,
    label: "Bookings",
    path: "/dashboard/teacher/bookings",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    label: "Settings",
    path: "/dashboard/teacher/settings",
  },
];

export const techStackOptions = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "TypeScript",
  "TailwindCSS",
  "Material-UI",
  "Redux",
  "GraphQL",
  "React Native",
  "Docker",
  "AWS",
  "Python",
  "Django",
  "Flask",
  "Vue.js",
  "Angular",
];

export const projectTypeOptions = [
  "Full Stack Application",
  "Frontend Application",
  "Backend API",
  "Mobile Application",
  "Desktop Application",
  "Chrome Extension",
  "UI/UX Design",
  "DevOps Solution",
];
