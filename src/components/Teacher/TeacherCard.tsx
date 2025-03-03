import React from "react";
import { Button } from "../ui/button";

const TeacherCard = ({
  className,
  hideButton,
}: {
  className?: string;
  hideButton?: boolean;
}) => {
  return (
    <div
      className={`w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
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
        <div className="py-3 border-b border-b-primary flex flex-col justify-center items-center ">
          <h3 className=" text-lg font-bold text-gray-800">Jane Smith</h3>
          <p className="text-sm font-medium" style={{ color: "#093B3B" }}>
            UX/UI Designer
          </p>
        </div>
        {/* Description */}
        <div className="px-4">
          {/* Rating */}
          <div className="my-4 flex justify-between items-center">
            <div className="flex flex-row-reverse items-center">
              <span className="text-lg font-bold" style={{ color: "#093B3B" }}>
                4.9
              </span>
              <div className="flex ">
                <svg
                  className="w-4 h-4 fill-current"
                  style={{ color: "#093B3B" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
            <span className="ml-2 text-md text-gray-500">
              <span className="text-primary font-semibold">3123</span> students
            </span>
          </div>
          {!hideButton && <Button className="w-full my-4">Send Message</Button>}
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
