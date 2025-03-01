import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const SubjectProgressCard = () => {
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
        {/* Name and Title */}

        {/* Description */}
        <p className=" text-sm text-gray-600">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <h3 className="mt-3 text-lg font-bold text-gray-800">Jane Smith</h3>

        {/* Rating */}
        <div className="mt-3 flex items-center">
          <Button className="h-[50px] bg-[#136E61] w-full">
            Watch Lecture
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubjectProgressCard;
