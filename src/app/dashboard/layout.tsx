"use client";
import React, { useState } from "react";
import { Menu, X, LogOut, Home } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { adminMenuItems, userMenuItems } from "@/Constants/Routes";

export default function AdminDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let menuItems: { icon: React.ReactNode; label: string; path: string }[] = [];
  const { data: session } = useSession();
  if (session?.user?.role === "admin") {
    menuItems = adminMenuItems;
  } else if (session?.user?.role === "user") {
    menuItems = userMenuItems;
  }

  return <div></div>;
}
