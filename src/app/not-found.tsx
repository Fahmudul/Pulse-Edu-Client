import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
export default function NotFound() {
  return (
    <div
      style={{ backgroundColor: "#e8f6f3" }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="text-center max-w-xl">
        {/* 404 SVG Animation */}
        <div className="mb-8">
          <svg viewBox="0 0 400 150" className="w-full max-w-md mx-auto">
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              style={{
                fill: "#093b3b",
                fontSize: "120px",
                fontWeight: "bold",
              }}
              className="animate-pulse"
            >
              404
            </text>
          </svg>
        </div>

        {/* Error Message */}
        <h1
          style={{ color: "#093b3b" }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Page Not Found
        </h1>

        <p
          style={{ color: "#093b3b" }}
          className="text-lg opacity-80 mb-8 px-4"
        >
          Oops! Looks like you{"'"}ve ventured into the void. The page you{"'"}
          re looking for has gone on a cosmic journey.
        </p>

        {/* Search Bar */}
        <div
          style={{ backgroundColor: "#1a292c" }}
          className="flex items-center rounded-lg p-2 mb-8 max-w-md mx-auto"
        >
          <Search style={{ color: "#093b3b" }} className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search for content..."
            style={{
              backgroundColor: "#1a292c",
              color: "#fee5b5",
            }}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            style={{ backgroundColor: "#136E61", color: "#131f22" }}
            href={"/"}
            className="px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <button
            style={{
              backgroundColor: "#093B3B",
              color: "#e8f6f3",
              borderColor: "#fee5b5",
            }}
            className="px-6 py-3 rounded-lg font-medium border hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Previous Page
          </button>
        </div>
      </div>
    </div>
  );
}
