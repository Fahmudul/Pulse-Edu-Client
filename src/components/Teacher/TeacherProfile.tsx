import Image from "next/image";
import React from "react";
import { CirclePlay, DollarSign, Star, Users, X } from "lucide-react";
// import User from "../../../public/assets/User.jpg";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import TeacherSubjectCard from "./TeacherSubjectCard";
import OverView from "./OverView";
import { getSingleTeacherDetails, getTeacherDetails } from "@/Services/Teacher";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import BookingModal from "@/components/Booking/BookingModal";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { auth } from "@/auth";
import { getUser } from "@/Utils/getUser";
const TeacherProfile = async ({
  id,
  isLoggedIn,
}: {
  id: string;
  isLoggedIn?: boolean;
}) => {
  console.log("sttudent logged i", isLoggedIn);
  const { data } = await getTeacherDetails(id);
  const teacher = await auth();
  const student = await getUser();
  const role = teacher ? teacher?.user?.role : student?.role;
  // console.log("logged in user 2", user);
  const { data: teacherData } = await getSingleTeacherDetails(id);
  // console.log("from service", teacherData);
  const { name } = teacherData;
  return (
    <div>
      <main className="p-4 flex flex-col  lg:p-6 w-[80%]  z-50 mx-auto  bg-primaryPro my-16 rounded-lg shadow-lg">
        <div className="h-[260px] flex justify-between  shadow-lg items-center w-full  p-10 bg-[#F9FAFB] rounded-lg">
          <div className="relative flex gap-4 items-center">
            <Image
              src={teacherData?.image}
              alt="user"
              className="w-[120px] h-[120px] rounded-full"
              loading="lazy"
              width={120}
              height={120}
            />
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold text-primary">
                {name} <p></p>{" "}
              </span>
              <p className="text-primary font-semibold">
                Web Designer & Developer
              </p>
              <div className="flex items-center gap-5">
                <span className="flex justify-between gap-2 items-center">
                  <span className="flex items-center gap-2 font-bold">
                    <Star className="w-6 h-6 text-[#FD8E1F] fill-[#FD8E1F]" />
                    {teacherData?.rating}.0
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
                    <DollarSign className="w-6 h-6 text-primary " />
                    {teacherData?.hourlyRate} /hr
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-end gap-2">
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
              <Dialog>
                <DialogTrigger
                  disabled={
                    (!teacherData?.canAccess || !isLoggedIn) &&
                    role == "teacher"
                  }
                  className={` ${
                    (!teacherData?.canAccess || !isLoggedIn) &&
                    role == "teacher"
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  } bg-primary py-2 focus:scale-95 transition-all duration-300 px-3 rounded-lg text-primaryPro`}
                >
                  Book a session
                </DialogTrigger>
                <DialogContent className="w-full">
                  <DialogClose className=" absolute right-[30.6%] top-[7%] inline-flex items-center justify-center rounded-full w-9 h-9">
                    <X className="w-6 h-6 text-primary" />
                  </DialogClose>
                  <VisuallyHidden asChild>
                    <DialogTitle />
                  </VisuallyHidden>
                  <BookingModal />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5 ">
          <div className="p-4 bg-white rounded-lg  shadow-lg">
            <p className="text-lg font-bold mb-3">About Me</p>
            <div>
              <span className="text-sm text-primary">
                <p className="font-bold text-lg inline">
                  {teacherData?.description?.slice(0, 6)}
                </p>
                {teacherData?.description?.slice(6)}
              </span>
            </div>
          </div>
          <div className="col-span-2 bg-white rounded-lg shadow-lg p-4 text-primary">
            <Tabs defaultValue="tab1" className="w-full ">
              <TabsList>
                <TabsTrigger value="tab1" className="text-base">
                  Subjects
                </TabsTrigger>
                <TabsTrigger value="tab2" className="text-base">
                  Overview
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="p-3">
                <p className="text-2xl font-bold text-[#333333]">
                  Subjects I take
                </p>
                <div className="mt-5">
                  <TeacherSubjectCard />
                </div>
              </TabsContent>
              <TabsContent value="tab2" className="p-3 flex">
                <OverView availability={data?.availability} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherProfile;
