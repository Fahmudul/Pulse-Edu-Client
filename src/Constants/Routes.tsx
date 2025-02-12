import {
  BarChart,
  Briefcase,
  Code,
  Github,
  MessageSquare,
  Newspaper,
  Settings,
  User2,
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