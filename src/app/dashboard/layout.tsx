"use client";
import React, { useState } from "react";
import { Menu, X, LogOut, Home, Download } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  adminMenuItems,
  teacherMenuItems,
  userMenuItems,
} from "@/Constants/Routes";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import hat from "../../app/hat.svg";
export default function AdminDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const location = usePathname();
  console.log("location", location);
  const menuItems: { icon: React.ReactNode; label: string; path: string }[] =
    teacherMenuItems;
  const { data: session } = useSession();
  console.log("sesion", session);
  // if (session?.user?.role === "admin") {
  //   menuItems = adminMenuItems;
  // } else if (session?.user?.role === "user") {
  //   menuItems = userMenuItems;
  // }

  return (
    <div
      style={{ backgroundColor: "#E8F6F3", position: "relative" }}
      className="flex  text-[#093B3B] relative"
    >
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-[48px]"
        style={{ color: "#fee5b5" }}
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6 text-[#36a292]" />
        )}
      </button>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        style={{ backgroundColor: "#234e52", position: "sticky" }}
        className={` z-40 top-0 left-0 bottom-0 w-64 h-full transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 flex flex-col justify-between h-screen ">
          <div>
            <div className="mb-8 pt-4 lg:pt-0 flex items-center gap-3">
              <Image
                src={hat}
                alt="logo"
                width={40}
                height={40}
                className=" -rotate-12 "
              />
              <h2
                style={{ color: "#E8F6F3" }}
                className="text-xl font-bold  text-center "
              >
                Pulse Edu
              </h2>
            </div>
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      style={{ color: "#E8F6F3" }}
                      className={`${
                        location === item.path ? "bg-[#36a292]" : ""
                      } flex items-center space-x-3 px-3 py-2 rounded hover:opacity-80 transition-colors`}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="space-y-5">
            <button style={{ color: "#E8F6F3" }}>
              <Link href="/" className="flex items-center gap-2">
                <Home /> Home
              </Link>
            </button>
            <button
              style={{ color: "#E8F6F3" }}
              className="flex items-center gap-2"
              onClick={() => signOut()}
            >
              <LogOut /> Logout
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* Profile Banner */}
        <Card className="bg-[#234e52] text-white ">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <Avatar className="h-16 w-16 mr-4">
                  <Image
                    src={session?.user?.image!}
                    alt="Profile"
                    width={100}
                    height={100}
                  />
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold">{session?.user?.name}</h2>
                  <p className="text-gray-400 text-sm">
                    {session?.user?.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="mr-4">
                  <p className="text-xs text-gray-400 mb-1">1/4 Steps</p>
                  <Progress value={25} className="h-1.5 w-52 bg-primaryPro" />
                  <p className="text-xs text-gray-400 mt-1">25% Completed</p>
                </div>

                <Button variant="outline" className=" border">
                  Edit Biography
                </Button>

                <Button
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        {children}
      </div>
    </div>
  );
}
