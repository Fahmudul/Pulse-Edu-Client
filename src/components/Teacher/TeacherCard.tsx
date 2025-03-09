import React from "react";
import { ITutor } from "@/types/global";
import Link from "next/link";
import Image from "next/image";

const TeacherCard = ({
  className,
  hideButton,
  teacher,
}: {
  className?: string;
  hideButton?: boolean;
  teacher?: ITutor;
}) => {
  return (
    <div className="bg-[#f5f7fa] max-h-[530px] hover:scale-[1.02] transition-all duration-500 rounded-lg shadow-lg overflow-hidden max-w-sm">
      <Image
        src={teacher?.image!}
        className="h-[300px] object-fill bg-gray-200 "
        width={450}
        height={300}
        alt="Teacher"
        loading="lazy"
      />

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold">{teacher?.name}</h3>
            <p className="text-gray-600">Teacher</p>
          </div>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              teacher?.available
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {teacher?.available ? "Available" : "Unavailable"}
          </span>
        </div>

        <p className="text-gray-700 mb-4">
          {teacher?.description.slice(0, 100)}...{" "}
          <Link
            href={`/teacher/${teacher?._id}`}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            See more
          </Link>
        </p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="bg-yellow-100 text-yellow-800 p-2 rounded-lg flex items-center mr-4">
              <span className="font-bold mr-1">{teacher?.rating}.0</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <div className="text-gray-600 flex items-center">
              <span className="font-semibold mr-1">3123</span> students
            </div>
          </div>

          <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-bold">
            ${teacher?.hourlyRate}/hr
          </div>
        </div>

        {!hideButton && (
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200">
            Send Message
          </button>
        )}
      </div>
    </div>
  );
};

export default TeacherCard;
