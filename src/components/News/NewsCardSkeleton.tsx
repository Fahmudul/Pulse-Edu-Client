import React from 'react';

const NewsCardSkeleton = () => {
  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden animate-pulse">
        <div className="relative h-48 w-full bg-gray-300">
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded w-24 h-4"></div>
        </div>
        <div className="p-4">
          <div className="font-bold text-lg mb-2 bg-gray-300 h-6 rounded"></div>
          <div className="text-gray-600 text-sm mb-3 bg-gray-300 h-4 rounded"></div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-gray-500 bg-gray-300 h-4 rounded w-20"></span>
            <span className="text-xs text-blue-600 font-medium bg-gray-300 h-4 rounded w-24"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCardSkeleton;
