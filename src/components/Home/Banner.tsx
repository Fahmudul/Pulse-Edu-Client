import React from "react";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import Teacher from "../../../public/assets/teacher.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between gap-4 px-10 bg-primary rounded-lg xl:h-[650px]">
      <div className="flex flex-col gap-4 ml-7">
        <h3 className="text-3xl text-white fond-bold">P U L S E E D U</h3>
        <h1 className="xl:text-7xl font-semibold text-white">
          Knowledge Meets <br /> Innovation
        </h1>
        <p className="text-lg text-white">
          Find & Connect with the Best Tutors
        </p>
        <div className="flex mt-4 items-center pl-2 max-w-[60%] bg-primaryPro outline-none rounded-md w-3/2">
          <CiSearch className=" text-2xl" />
          <Input placeholder="Search for Tutors" className=" flex-1" />
          <Select>
            <SelectTrigger className="w-[90px]  px-2 rounded-md bg-white">
              Course
            </SelectTrigger>
            <SelectContent className="w-[30px]">
              <SelectItem value="Math">Math</SelectItem>
              <SelectItem value="Science">Science</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="History">History</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className=" h-[100%]  w-[50%] flex justify-end">
        <Image className=" h-full w-[60%] mr-10" src={Teacher} alt="teacher" />
      </div>
    </div>
  );
};

export default Banner;
