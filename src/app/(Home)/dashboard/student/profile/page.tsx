"use client";
import Image from "next/image";
import React from "react";
import User from "../../../../../../public/assets/User.jpg";
import { useUser } from "@/Context/UserContext";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CirclePlay,
  SquareCheckBig,
  Trophy,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudentTabs } from "@/components/Student/StudentTabs";

import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import SubjectProgressCard from "@/components/Subjects/SubjectProgressCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import TeacherCard from "@/components/Teacher/TeacherCard";
import PaymentComponent from "@/components/Payment/PaymentDetails";
import { useAppSelector } from "@/Redux/hooks";
import StudentSettings from "@/components/Student/StudentSettings";
import StudentPaymentCard from "@/components/Student/StudentPaymentCard";
const UserProfile = () => {
  const user = useAppSelector((state) => state.auth);
  console.log(user);
  return (
    <div className="flex-1   w-full lg:w-auto relative  ">
      {/* Dashboard Content */}
      <main className="p-4 flex flex-col  lg:p-6 w-[80%]  z-50 mx-auto  bg-primaryPro my-16 rounded-lg shadow-lg">
        {/* Stats Grid */}
        <div className="h-[260px] flex justify-between items-center w-full  p-10 bg-white rounded-lg">
          <div className="relative flex gap-4 items-center">
            <Image
              src={User}
              alt="user"
              className="w-[120px] h-[120px] rounded-full"
            />
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold text-primary">{user?.name}</p>
              <span className="bg-gradient-to-r from-green-600 to-green-300 bg-clip-text text-transparent font-bold text-3xl">
                Student
              </span>
            </div>
          </div>
          <div>
            <Button className="flex h-14 items-center gap-3 bg-primaryPro text-primary shadow-md">
              Become Instructor <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="my-5">
          <Tabs defaultValue="dashboard" className="">
            <TabsList className="flex justify-between  w-full h-15">
              {StudentTabs.map((tab) => (
                <TabsTrigger key={tab} value={tab.toLowerCase()}>
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent
              value="dashboard"
              className="bg-white pt-1 mt-4 px-5 pb-5"
            >
              <div className="h-[200px]  w-full ">
                <p className="text-2xl font-bold text-primary my-6">
                  Dashboard
                </p>
                <div className="flex gap-6 justify-between text-primary">
                  <div className="flex  flex-1 items-center 0 p-6 gap-6 bg-primaryPro rounded-md shadow-lg">
                    <span className=" bg-white p-3 ">
                      <CirclePlay className="text-primary w-10 h-10" />
                    </span>
                    <span className="">
                      <p className="text-2xl font-bold">957</p>
                      <p className="">Enrolled Subjects</p>
                    </span>
                  </div>
                  <div className="flex  flex-1 items-center 0 p-6 gap-6 bg-[#EBEBFF] rounded-md shadow-lg">
                    <span className=" bg-white p-3 ">
                      <SquareCheckBig className="text-[#564ffd] w-10 h-10" />
                    </span>
                    <span className="">
                      <p className="text-2xl font-bold">957</p>
                      <p className="">Enrolled Subjects</p>
                    </span>
                  </div>
                  <div className="flex  flex-1 items-center 0 p-6 gap-6 bg-[#E1F7E3] rounded-md shadow-lg">
                    <span className=" bg-white p-3 ">
                      <Trophy className="text-[#23bd33] w-10 h-10" />
                    </span>
                    <span className="">
                      <p className="text-2xl font-bold">957</p>
                      <p className="">Enrolled Subjects</p>
                    </span>
                  </div>
                  <div className="flex  flex-1 items-center 0 p-6 gap-6 bg-[#FFF2E5] rounded-md shadow-lg">
                    <span className=" bg-white p-3 ">
                      <Users className="text-[#FD8E1F] w-10 h-10" />
                    </span>
                    <span className="">
                      <p className="text-2xl font-bold">957</p>
                      <p className="">Enrolled Subjects</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" w-full ">
                <p className="text-2xl font-bold text-primary my-6">
                  Let{"s"} Start where We Left
                </p>
                <div className="grid grid-cols-4 gap-5">
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <SubjectProgressCard key={index} />
                    ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="subjects">
              <p className="text-2xl font-bold text-primary my-6">
                Subjects (90)
              </p>
              {/* Filter Options */}
              <div className="flex items-center justify-between gap-4 mt-5">
                <div className="flex-1 flex flex-col gap-3">
                  <label htmlFor="">Search</label>
                  <span className="flex items-center gap-3 bg-white px-2 rounded-md">
                    <CiSearch className=" text-2xl" />
                    <Input
                      placeholder="Search for Tutors"
                      className=" flex-1"
                    />
                  </span>
                </div>
                <div className=" flex flex-col gap-3 w-[15%]">
                  <label htmlFor="">Sort By</label>
                  <Select>
                    <SelectTrigger className="w-[100%] px-2 h-[45px] rounded-md bg-white">
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
                <div className=" flex flex-col gap-3 w-[15%]">
                  <label htmlFor="">Status</label>
                  <Select>
                    <SelectTrigger className="w-[100%] px-2 h-[45px] rounded-md bg-white">
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
                <div className=" flex flex-col gap-3 w-[15%]">
                  <label htmlFor="">Search</label>
                  <Select>
                    <SelectTrigger className="w-[100%] px-2 h-[45px] rounded-md bg-white">
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
              <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {Array(12)
                  .fill(0)
                  .map((item, index) => (
                    <SubjectProgressCard key={index} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="teachers">
              {/* Filter options */}
              <div className="flex items-center justify-between gap-4 mt-5">
                <div className="flex-1 flex flex-col gap-3">
                  <label htmlFor="">Search</label>
                  <span className="flex items-center gap-3 bg-white px-2 rounded-md">
                    <CiSearch className=" text-2xl" />
                    <Input
                      placeholder="Search for Tutors"
                      className=" flex-1"
                    />
                  </span>
                </div>
                <div className=" flex flex-col gap-3 w-[15%]">
                  <label htmlFor="">Subjects</label>
                  <Select>
                    <SelectTrigger className="w-[100%] px-2 h-[45px] rounded-md bg-white">
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
                <div className=" flex flex-col gap-3 w-[15%]">
                  <label htmlFor="">All Teachers</label>
                  <Select>
                    <SelectTrigger className="w-[100%] px-2 h-[45px] rounded-md bg-white">
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
              <div className="mt-5">
                <TeacherCard />
              </div>
            </TabsContent>
            <TabsContent value="message">
              <div className="w-full text-xl font-bold text-primary h-[500px] flex justify-center items-center">
                <p className="text-4xl font-bold">Coming Soon! Stay tuned</p>
              </div>
            </TabsContent>
            <TabsContent value="session payment">
              <div className="mt-5 w-full bg-white rounded-lg py-6 h-full ">
                <PaymentComponent />
              </div>
            </TabsContent>
            <TabsContent value="purchase history">
              <h1 className="text-3xl font-bold mb-5">Purchase History</h1>
              <StudentPaymentCard />
            </TabsContent>
            <TabsContent value="settings">
              <StudentSettings />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
