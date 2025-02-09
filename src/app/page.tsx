import { Button } from "@/components/ui/button";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Socials from "@/components/Socials";
import ProfileImage from "@/components/ProfileImage";
import Stats from "@/components/Stats";
import Link from "next/link";
import Work from "@/components/Work";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-7 xl:pb-26">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">MERN Stack Developer</span>
            <h1 className="h1 mt-3 font-semibold">
              <span className="">
                Hi I{"'"}m <br />
                <span className="text-accent">Fahmudul Hassan</span>
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 leading-7 mt-4">
              Skilled Full-Stack Developer: Proficient in MERN Stack, Adept in
              C/C++ & Python for Adaptable Solutions
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 active:scale-95 transition-all duration-300 "
              >
                <Link href="/resume.pdf" download={true}>
                  <span>Download CV</span>
                </Link>
                <IoCloudDownloadOutline className="text-xl" />
              </Button>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 relative ">
            <ProfileImage />
            <div className=" flex  justify-end absolute top-0 right-0 xl:top-[210px]">
              <div className="flex flex-col-reverse xl:flex-col items-end  justify-center gap-4">
                <div className="flex justify-center w-full ">
                  <div className="w-1 h-[100px] bg-accent "></div>
                </div>
                <Socials
                  containerClass="flex flex-col gap-6"
                  iconClass="w-9 h-9 border border-accent rounded-full flex
              justify-center items-center text-accent text-base hover:bg-accent
              hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats />
      <Resume />
      <Work />
      <Contact />
    </main>
  );
}
