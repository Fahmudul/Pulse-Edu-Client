"use client";
import { Button } from "@/components/ui/button";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Socials from "@/components/Socials";
import ProfileImage from "@/components/ProfileImage";
import Stats from "@/components/Stats";
import Link from "next/link";
import Work from "@/components/Work";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Banner from "@/components/Home/Banner";
import PrimaryContainer from "@/components/Shared/PrimaryContainer";
import { FaAirbnb, FaAmazon } from "react-icons/fa";
import { SiFiverr, SiUdemy, SiUpwork } from "react-icons/si";
import Title from "@/components/Shared/Title";
import CourseCard from "@/components/Subjects/SubjectCard";
export default function Home() {
  return (
    <main>
      <PrimaryContainer className="lg:min-h-[760px] ">
        <div className={`w-[82.5%] mx-auto  h-auto`}>
          <Banner />
        </div>
      </PrimaryContainer>
      <div className="flex flex-col justify-center items-center mt-10  h-[300px]">
        <Title title={`Join the 2000+ companies we're already learn with`} />
        <div className="flex items-center gap-10 my-10 [&>span]:text-primary [&>span]:flex [&>span]:justify-center [&>span]:items-center [&>span]:gap-2">
          <span>
            <FaAirbnb className="text-7xl" />
            <p className="text-2xl font-semibold">airbnb</p>
          </span>
          <span>
            <FaAmazon className="text-7xl" />
            <p className="text-2xl font-semibold">amazon</p>
          </span>
          <span>
            <SiFiverr className="text-7xl" />
          </span>
          <span>
            <SiUdemy className="text-7xl" />
            <p className="text-2xl font-semibold">udemy</p>
          </span>
          <span>
            <SiUpwork className="text-7xl" />
            <p className="text-2xl font-semibold">Upwork</p>
          </span>
        </div>
      </div>
      <PrimaryContainer className=" py-16">
        <Title className="text-5xl " title="Best Selling Courses in 2025" />
        <div className="w-[82.5%] mx-auto mt-20 grid grid-cols-4 gap-10">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <CourseCard key={index} />
            ))}
        </div>
      </PrimaryContainer>
    </main>
  );
}
