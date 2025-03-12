import React from "react";

const DashbordProfileBoard =  () => {
  return (
    <div className="flex justify-end lg:justify-between items-center">
      <h1
        style={{ color: "#093B3B" }}
        className="text-xl font-bold hidden lg:block"
      >
        Welcome Back, {"session?.user?.name"}
      </h1>
      <button
        style={{ backgroundColor: "#136E61", color: "#E8F6F3" }}
        className="px-4 py-2 rounded font-medium hover:opacity-90 transition-opacity ml-12 lg:ml-0"
      >
        Profile
      </button>
    </div>
  );
};

export default DashbordProfileBoard;
