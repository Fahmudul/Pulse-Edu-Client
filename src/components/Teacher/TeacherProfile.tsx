import Image from "next/image";
import React from "react";

import { CirclePlay, Star, Users } from "lucide-react";
import User from "../../../public/assets/User.jpg";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import TeacherSubjectCard from "./TeacherSubjectCard";
const TeacherProfile = () => {
  return (
    <div>
      <main className="p-4 flex flex-col  lg:p-6 w-[80%]  z-50 mx-auto  bg-primaryPro my-16 rounded-lg shadow-lg">
        <div className="h-[260px] flex justify-between  shadow-lg items-center w-full  p-10 bg-[#F9FAFB] rounded-lg">
          <div className="relative flex gap-4 items-center">
            <Image
              src={User}
              alt="user"
              className="w-[120px] h-[120px] rounded-full"
            />
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold text-primary">{"Hallo Check"}</p>
              <p className="text-primary font-semibold">
                Web Designer & Developer
              </p>
              <div className="flex items-center gap-5">
                <span className="flex justify-between gap-2 items-center">
                  <span className="flex items-center gap-2 font-bold">
                    <Star className="w-6 h-6 text-[#FD8E1F] fill-[#FD8E1F]" />
                    4.8
                  </span>
                  <p>(134,633 review)</p>
                </span>
                <span className="flex justify-between gap-2 items-center">
                  <span className="flex items-center gap-2 font-bold">
                    <Users className="w-6 h-6 text-[#564FFD] fill-[#564FFD]" />
                    430,177
                  </span>
                  <p>students</p>
                </span>
                <span className="flex justify-between gap-2 items-center">
                  <span className="flex items-center gap-2 font-bold">
                    <CirclePlay className="w-6 h-6 text-[#fff] fill-[#FF6636]" />
                    4.8
                  </span>
                  <p>(134,633 review)</p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-end">
              <span className="flex items-center text-[#564FFD] font-semibold">
                <TbWorld className="w-6 h-6 " />
                <p>https://www.vakoshvili.com</p>
              </span>
              <div className="flex items-center gap-2 my-2">
                <Link href="#" className="bg-[#F5F7FA] p-2">
                  <FaFacebookF className="text-4xl fill-[#4E5566]" />
                </Link>
                <Link href="#" className="bg-[#F5F7FA] p-2">
                  <CiTwitter className="text-4xl text-[#4E5566]" />
                </Link>
                <Link href="#" className="bg-[#F5F7FA] p-2">
                  <CiInstagram className="text-4xl text-[#4E5566]" />
                </Link>
                <Link href="#" className="bg-[#F5F7FA] p-2">
                  <CiYoutube className="text-4xl text-[#4E5566]" />
                </Link>
                <Link href="#" className="bg-[#F5F7FA] p-2">
                  <FaWhatsapp className="text-4xl text-[#4E5566]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5 ">
          <div className="p-4 bg-white rounded-lg  shadow-lg">
            <p className="text-lg font-bold mb-3">About Me</p>
            <div>
              <p className="text-sm">
                One day Vako had enough with the 9-to-5 grind, or more like
                9-to-9 in his case, and quit his job, or more like got himself
                fired from his own startup.
                <br />
                <br />
                He decided to work on his dream: be his own boss, travel the
                world, only do the work he enjoyed, and make a lot more money in
                the process. No more begging for vacation days and living from
                paycheck to paycheck. After trying everything from e-commerce
                stores to professional poker his lucky break came when he
                started freelance design. Vako fell in love with the field that
                gives him the lifestyle of his dreams.
                <br />
                <br /> Vako realizes that people who take courses on Udemy want
                to transform their lives. Today with his courses and mentoring
                Vako is helping thousands of people transform their lives, just
                like he did once.
              </p>
            </div>
          </div>
          <div className="col-span-2 bg-white rounded-lg shadow-lg p-4 text-primary">
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList>
                <TabsTrigger value="tab1" className="text-base">
                  Subjects
                </TabsTrigger>
                <TabsTrigger value="tab2" className="text-base">
                  Overview
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="p-3">
                <p className="text-2xl font-bold text-[#333333]">Subjects I take</p>
                <div className="mt-5">
                  <TeacherSubjectCard />
                </div>
              </TabsContent>
              <TabsContent value="tab2"></TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherProfile;
