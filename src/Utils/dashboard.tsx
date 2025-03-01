import React from "react";

const dashboard = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#e5f1f1", position: "relative" }}
        className="flex h-screen text-accent relative"
      >
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-4 left-4 z-[48px]"
          style={{ color: "#093B3B" }}
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
          style={{ backgroundColor: "#093B3B" }}
          className={`fixed top-0 left-0 lg:static w-64 h-full z-[45px] transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <div className="mb-8 pt-4 lg:pt-0">
                <h2
                  style={{ color: "#ffffff" }}
                  className="text-xl font-bold mb-4 pb-2 text-center"
                >
                  Dashboard
                </h2>
              </div>
              <nav>
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.path}
                        style={{ color: "#ffffff" }}
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
              <button style={{ color: "#ffffff" }}>
                <Link href="/" className="flex items-center gap-2">
                  <Home /> Home
                </Link>
              </button>
              <button
                style={{ color: "#ffffff" }}
                className="flex items-center gap-2"
                onClick={() => signOut()}
              >
                <LogOut /> Logout
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div style={{ backgroundColor: "#1a292c" }} className="p-4 shadow">
            <div className="flex justify-end lg:justify-between items-center">
              <h1
                style={{ color: "#ffffff" }}
                className="text-xl font-bold hidden lg:block"
              >
                Welcome Back, {session?.user?.name}
              </h1>
              <button
                style={{ backgroundColor: "#ffffff", color: "#093B3B" }}
                className="px-4 py-2 rounded font-medium hover:opacity-90 transition-opacity ml-12 lg:ml-0"
              >
                Profile
              </button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default dashboard;
