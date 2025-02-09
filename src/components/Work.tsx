"use client";

import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import SliderButton from "@/components/SliderButton";

const projects = [
  {
    id: "01",
    category: "Fullstack",
    title: "Art And Craft Gallery",
    description:
      "PaletteParadise: A vibrant platform for painting and drawing enthusiasts to explore, create, and connect through diverse artworks and a supportive community.",
    technologies: [
      {
        name: <FaReact />,
      },
      {
        name: <SiTailwindcss />,
      },
      {
        name: <FaJs />,
      },
      { name: <SiNodedotjs /> },
      { name: <SiExpress /> },
      { name: <SiMongodb /> },
    ],
    image: "/assets/Work/Cover.png",
    github: "https://github.com/Fahmudul/Art-Craft-Gallery-Client",
    live: "https://assignment-10-97eb5.web.app/",
  },
  {
    id: "02",
    category: "Fullstack",
    title: "Job Seeking Site",
    description:
      "Navigate your professional journey with personalized guidance and resources tailored to your career goals and aspirations.",
    technologies: [
      {
        name: <FaReact />,
      },
      {
        name: <SiTailwindcss />,
      },
      {
        name: <FaJs />,
      },
      { name: <SiNodedotjs /> },
      { name: <SiExpress /> },
      { name: <SiMongodb /> },
    ],
    image: "/assets/Work/Cover2.png",
    github: "https://github.com/Fahmudul/Career-Compass-Client",
    live: "https://careercomapass.web.app/",
  },
  {
    id: "03",
    category: "Fullstack",
    title: "Project 2",
    description:
      "Cozy Nest: Streamline apartment management with user-friendly features for tenants, administrators, and property managers, enhancing efficiency and tenant experience.",
    technologies: [
      {
        name: <FaReact />,
      },
      {
        name: <SiTailwindcss />,
      },
      {
        name: <FaJs />,
      },
      { name: <SiNodedotjs /> },
      { name: <SiExpress /> },
      { name: <SiMongodb /> },
    ],
    image: "/assets/Work/Cover3.png",
    github: "https://github.com/Fahmudul/Apartment-Management-System",
    live: "https://cozynest-cbb8e.web.app/",
  },
  {
    id: "04",
    category: "Frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione itaque aliquid officiis.",
    technologies: [
      {
        name: <FaHtml5 />,
      },
      {
        name: <SiTailwindcss />,
      },
      { name: <FaJs /> },
    ],
    image: "/assets/Work/Cover4.png",
    github: "https://github.com/Fahmudul/Spotify",
    live: "https://wifu.freewebhostmost.com/",
  },
];
const Work = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIdx = swiper.activeIndex;
    setCurrentProject(projects[currentIdx]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn", delay: 2.4 },
      }}
      className="mn-h-screen flex flex-col justify-center py-12 xl:px-0"
      id="Work"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[55%]">
              <div className="text-8xl leading-none font-extrabold text-transparent  font-outline-2">
                {currentProject.id}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent">
                {currentProject.category} Project
              </h2>
              <h3 className="text-xl">{currentProject.title}</h3>
              <p className="text-white/60">{currentProject.description}</p>
              <ul className="flex gap-5">
                {currentProject.technologies.map((technology, index) => (
                  <li key={index} className="text-accent text-3xl">
                    {technology.name}
                  </li>
                ))}
              </ul>
              <div className="border border-white/25"></div>

              <div className="flex items-center gap-4">
                {/*Live Link */}
                <Link href={currentProject.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <GoArrowUpRight className="text-white group-hover:text-accent text-4xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live View</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*Github Link */}
                <Link href={currentProject.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white group-hover:text-accent text-4xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/*Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 relative"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="rounded-tr-[60px] rounded-bl-[60px] rounded-tl-[30px] rounded-br-[30px] h-[470px] relative group flex justify-center items-center bg-white">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-contan rounded-3xl"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderButton
                containerStyles="flex gap-3  absolute right-0 bottom-[calc(50%-10px)]  z-20 w-full justify-between"
                btnStyle="bg-accent hover:bg-accent text-primary text-[25px] roun w-[36px] h-[56px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
