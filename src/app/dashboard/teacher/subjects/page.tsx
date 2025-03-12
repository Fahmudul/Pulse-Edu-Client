import TeacherSubjectCard from "@/components/Teacher/TeacherSubjectCard";
import React from "react";

const page = () => {
  return (
    <div className=" w-[95%] mx-auto  p-5 bg-[#f5f7fa] mb-5">
      <h1 className="text-3xl font-bold">My Subjects</h1>
      <div className="p-3 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array(8)
          .fill(9)
          .map((_, index) => (
            <TeacherSubjectCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default page;
