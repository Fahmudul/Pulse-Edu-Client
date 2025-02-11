"use client";
import React, { useState } from "react";
import {
  BarChart,
  Users,
  FileText,
  Mail,
  Settings,
  Briefcase,
  Star,
  Menu,
  X,
  LogOut,
  Home,
} from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { icon: <BarChart className="w-5 h-5" />, label: "Analytics" },
  
    { icon: <Settings className="w-5 h-5" />, label: "Settings" },
  ];

  return (
    <div
      style={{ backgroundColor: "#131f22" }}
      className="flex h-screen text-accent relative"
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
          <Menu className="w-6 h-6" />
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
        style={{ backgroundColor: "#1a292c" }}
        className={`fixed lg:static w-64 h-full z-[45px] transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <div className="mb-8 pt-4 lg:pt-0">
              <h2
                style={{ color: "#fee5b5" }}
                className="text-xl font-bold mb-4"
              >
                Dashboard
              </h2>
            </div>
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.label.toLowerCase().replace(" ", "-")}
                      style={{ color: "#fee5b5" }}
                      className="flex items-center space-x-3 p-2 rounded hover:opacity-80 transition-colors"
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
            <button style={{ color: "#fee5b5" }}>
              <Link href="/" className="flex items-center gap-2">
                <Home /> Home
              </Link>
            </button>
            <button
              style={{ color: "#fee5b5" }}
              className="flex items-center gap-2"
              onClick={() => signOut()}
            >
              <LogOut /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto w-full lg:w-auto">
        {/* Header */}
        <div style={{ backgroundColor: "#1a292c" }} className="p-4 shadow">
          <div className="flex justify-end lg:justify-between items-center">
            <h1
              style={{ color: "#fee5b5" }}
              className="text-xl font-bold hidden lg:block"
            >
              Welcome Back, Admin
            </h1>
            <button
              style={{ backgroundColor: "#fee5b5", color: "#131f22" }}
              className="px-4 py-2 rounded font-medium hover:opacity-90 transition-opacity ml-12 lg:ml-0"
            >
              Profile
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <main className="p-4 lg:p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
            {[
              { label: "Total Views", value: "1,234", icon: <Users /> },
              { label: "Projects", value: "12", icon: <Briefcase /> },
              { label: "Messages", value: "25", icon: <Mail /> },
              { label: "Github Stars", value: "48", icon: <Star /> },
            ].map((stat, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#1a292c" }}
                className="p-4 lg:p-6 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p style={{ color: "#fee5b5" }} className="text-sm">
                      {stat.label}
                    </p>
                    <h3
                      style={{ color: "#fee5b5" }}
                      className="text-xl lg:text-2xl font-bold mt-1"
                    >
                      {stat.value}
                    </h3>
                  </div>
                  <div style={{ color: "#fee5b5" }} className="w-8 h-8">
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity Section */}
          <div
            style={{ backgroundColor: "#1a292c" }}
            className="rounded-lg p-4 lg:p-6"
          >
            <h2
              style={{ color: "#fee5b5" }}
              className="text-lg lg:text-xl font-bold mb-4"
            >
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  style={{ backgroundColor: "#131f22" }}
                  className="flex items-center justify-between p-3 lg:p-4 rounded"
                >
                  <div className="flex items-center space-x-3 lg:space-x-4">
                    <FileText
                      style={{ color: "#fee5b5" }}
                      className="w-5 h-5 lg:w-6 lg:h-6"
                    />
                    <div>
                      <p
                        style={{ color: "#fee5b5" }}
                        className="font-medium text-sm lg:text-base"
                      >
                        Project Updated
                      </p>
                      <p
                        style={{ color: "#fee5b5" }}
                        className="text-xs lg:text-sm opacity-70"
                      >
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <button
                    style={{ color: "#fee5b5" }}
                    className="text-sm lg:text-base hover:underline"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
