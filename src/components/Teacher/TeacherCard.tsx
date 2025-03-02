import Image from "next/image";
import React from "react";

const TeacherCard = () => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Background Image */}
      <div
        className="h-40 bg-gray-200 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ugc.futurelearn.com/uploads/images/3f/ac/header_3fac7bfa-1913-4889-9180-e63b52b45ff0.jpg')",
        }}
      ></div>

      {/* Card Content */}
      <div className="relative px-4 pt-8 pb-4">
        {/* Profile Picture */}
        <div className="absolute -top-6 left-4">
          <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
            <Image
              src="https://ugc.futurelearn.com/uploads/images/3f/ac/header_3fac7bfa-1913-4889-9180-e63b52b45ff0.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* Name and Title */}
        <h3 className="mt-6 text-lg font-bold text-gray-800">Jane Smith</h3>
        <p className="text-sm font-medium" style={{ color: "#093B3B" }}>
          UX/UI Designer
        </p>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center">
          <span className="text-lg font-bold" style={{ color: "#093B3B" }}>
            4.9
          </span>
          <div className="flex ml-2">
            <svg
              className="w-4 h-4 fill-current"
              style={{ color: "#093B3B" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <span className="ml-2 text-xs text-gray-500">(38k reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
