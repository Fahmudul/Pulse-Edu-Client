import { User } from "lucide-react";
import React from "react";

const TeacherSubjectCard = () => {
  return (
    <div
      className={`w-full max-w-sm bg-[#F9FAFB] rounded-lg shadow-lg overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="h-[300px] bg-gray-200 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ugc.futurelearn.com/uploads/images/3f/ac/header_3fac7bfa-1913-4889-9180-e63b52b45ff0.jpg')",
        }}
      ></div>

      {/* Card Content */}
      <div className=" ">
        {/* Name and Title */}
        <div className="px-3 mt-5   ">
          <span className=" text-xs font-semibold bg-[#EBEBFF] px-2 py-1 rounded-md text-[#342F98]">
            DEVELOPMENTS
          </span>
        </div>
        <div className="px-3 mt-3  flex flex-col justify-center ">
          <h3 className=" text-lg font-semibold text-gray-800">
            Machine Learning A-Z™: Hands-On Python & R In Data Science
          </h3>
        </div>
        {/* Description */}
        <div className="px-4">
          {/* Rating */}
          <div className="my-4 flex justify-between items-center">
            <div className="flex flex-row-reverse  gap-1 items-center">
              <span className="text-lg font-bold" style={{ color: "#093B3B" }}>
                4.9
              </span>
              <div className="">
                <svg
                  className="w-6 h-6 fill-current"
                  style={{ color: "#FD8E1F" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
            <span className="ml-2 text-md text-gray-500 flex items-center gap-1">
              <User className="w-6 h-6" />
              <span className="text-primary font-semibold">3123</span> students
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSubjectCard;
