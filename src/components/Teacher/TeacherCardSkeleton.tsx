import React from "react";

const TeacherCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden max-w-sm flex-1">
      <div className="h-[300px] bg-gray-200 pulse"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="h-6 bg-gray-200 rounded pulse w-3/4 mb-1"></div>
            <div className="h-4 bg-gray-200 rounded pulse w-1/2"></div>
          </div>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 pulse"></span>
        </div>
        <div className="h-4 bg-gray-200 rounded pulse mb-4 w-full"></div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-lg flex items-center p-2 mr-4 pulse">
              <div className="h-4 bg-gray-200 rounded pulse w-12"></div>
            </div>
            <div className="text-gray-600 flex items-center">
              <div className="h-4 bg-gray-200 rounded pulse w-16"></div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg font-bold px-3 py-2 pulse w-24"></div>
        </div>
        <button className="w-full bg-gray-200 pulse text-white font-medium py-2 px-4 rounded transition duration-200"></button>
      </div>
    </div>
  );
};

export default TeacherCardSkeleton;
