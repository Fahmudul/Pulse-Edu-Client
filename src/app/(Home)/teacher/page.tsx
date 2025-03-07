import { getAllTeacher } from "@/Services/Teacher";
import CommonBanner from "@/components/CommonBanner";
import TeacherCard from "@/components/Teacher/TeacherCard";
import React from "react";

const page = async () => {
  const { data: teacher } = await getAllTeacher();
  console.log(teacher);
  return (
    <div className="mb-4 lg:mb-6 xl:mb-10">
      <CommonBanner title="Meet the teachers" subTitle="TEACHERS" />
      <div className="mt-10 w-[82.5%] mx-auto">
        <h1 className="text-left text-3xl font-bold text-primary">
          Meet our professional <br /> mentors.
        </h1>
        <div className="mt-3 lg:mt-5 xl:mt-7 grid grid-cols-4 gap-5">
          <TeacherCard hideButton={true} teacher={teacher[0]} />

          {Array(7)
            .fill(0)
            .map((item,idx) => (
              <TeacherCard hideButton={true} key={idx}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
