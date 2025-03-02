import { Briefcase, FileText, Mail, Star, Users } from "lucide-react";
import React from "react";

const Analytics = () => {
  return (
    <div>
      <main className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div
            style={{ backgroundColor: "#FFFFFF" }}
            className="p-6 rounded-lg border border-[#D0D7D7]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p style={{ color: "#093B3B" }} className="text-sm">
                  Total Views
                </p>
                <h3
                  style={{ color: "#093B3B" }}
                  className="text-2xl font-bold mt-1"
                >
                  1,234
                </h3>
              </div>
              <Users style={{ color: "#093B3B" }} className="w-8 h-8" />
            </div>
          </div>
          <div
            style={{ backgroundColor: "#FFFFFF" }}
            className="p-6 rounded-lg border border-[#D0D7D7]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p style={{ color: "#093B3B" }} className="text-sm">
                  Projects
                </p>
                <h3
                  style={{ color: "#093B3B" }}
                  className="text-2xl font-bold mt-1"
                >
                  12
                </h3>
              </div>
              <Briefcase style={{ color: "#093B3B" }} className="w-8 h-8" />
            </div>
          </div>
          <div
            style={{ backgroundColor: "#FFFFFF" }}
            className="p-6 rounded-lg border border-[#D0D7D7]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p style={{ color: "#093B3B" }} className="text-sm">
                  Messages
                </p>
                <h3
                  style={{ color: "#093B3B" }}
                  className="text-2xl font-bold mt-1"
                >
                  25
                </h3>
              </div>
              <Mail style={{ color: "#fee5b5" }} className="w-8 h-8" />
            </div>
          </div>
          <div
            style={{ backgroundColor: "#FFFFFF" }}
            className="p-6 rounded-lg border border-[#D0D7D7]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p style={{ color: "#093B3B" }} className="text-sm">
                  Github Stars
                </p>
                <h3
                  style={{ color: "#093B3B" }}
                  className="text-2xl font-bold mt-1"
                >
                  48
                </h3>
              </div>
              <Star style={{ color: "#093B3B" }} className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div style={{ backgroundColor: "#E8F6F3" }} className="rounded-lg p-6">
          <h2 style={{ color: "#093B3B" }} className="text-xl font-bold mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{ backgroundColor: "#F2F7F0" }}
                className="flex items-center justify-between p-4 rounded"
              >
                <div className="flex items-center space-x-4">
                  <FileText style={{ color: "#093B3B" }} className="w-6 h-6" />
                  <div>
                    <p style={{ color: "#2A3B39" }} className="font-medium">
                      Project Updated
                    </p>
                    <p
                      style={{ color: "#5A7876" }}
                      className="text-sm opacity-70"
                    >
                      2 hours ago
                    </p>
                  </div>
                </div>
                <button
                  style={{ color: "#093B3B" }}
                  className="hover:underline"
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
