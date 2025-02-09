"use client";
import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiMambaui,
  SiDaisyui,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Link from "next/link";
const about = {
  title: "About Me",
  description:
    "I began coding in 2020, mastering the basics and OOP in C and C++, and tackling problem-solving tasks. I then specialized in Python, working on advanced projects and DSA. At 2023, I transitioned to web development and now thrive as a junior MERN stack developer.",
  info: [
    {
      sectionName: "Name",
      info: "Fahmudul Hassan",
    },
    {
      sectionName: "Phone",
      info: "+880 160 191 6247",
    },
    {
      sectionName: "Experience",
      info: "3+ Years",
    },
    {
      sectionName: "LinkedIn",
      info: "Fahmudul Hassan",
    },
    {
      sectionName: "Natioinality",
      info: "Bangladeshi",
    },
    {
      sectionName: "Email",
      info: "fahmudul234@gmail.com",
    },
    {
      sectionName: "Designation",
      info: "MERN Stack ",
    },
    {
      sectionName: "Languages",
      info: "Bangla, English",
    },
  ],
};

const education = {
  title: "Education",
  description:
    "My educational journey has equipped me with a strong foundation in computer science and programming. Through rigorous coursework and hands-on projects, I have developed a deep understanding of various programming languages and technologies, which paved the way for my transition into web development",
  info: [
    {
      institution: "American International University Bangladesh",
      course: "Bachelor of Science in CSE",
      date: "2024 - Now",
    },
    {
      institution: "Programming Hero ",
      course: "Complete Web Development Bootcamp",
      date: "2023 - 2024",
    },
    {
      institution: "Coursera",
      course: "Complete Python ",
      date: "2021 - 2023",
    },
    {
      institution: "Online Course",
      course: "Python for Algorithms and Data Structures",
      date: "2022 - 2023",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "I have a strong foundation in programming and web development, enabling me to tackle complex problems, manage projects efficiently, and adapt to new technologies and challenges in the tech world.",
  skillSets: [
    {
      logo: <FaHtml5 />,
      name: "HTML",
    },
    {
      logo: <FaCss3 />,
      name: "CSS",
    },
    {
      logo: <FaJs />,
      name: "JavaScript",
    },
    {
      logo: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      logo: <FaReact />,
      name: "React",
    },
    {
      logo: <SiExpress />,
      name: "Express",
    },
    {
      logo: <SiMongodb />,
      name: "MongoDB",
    },
    {
      logo: <SiFirebase />,
      name: "Firebase",
    },
    {
      logo: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      logo: <SiTailwindcss />,
      name: "Tailwind Css",
    },
    {
      logo: <FaFigma />,
      name: "Figma",
    },

    {
      logo: <SiShadcnui />,
      name: "Shadcn UI",
    },
    {
      logo: <SiMambaui />,
      name: "Mamba UI",
    },
    {
      logo: <FaPython />,
      name: "Python",
    },
    {
      logo: <TbBrandCpp />,
      name: "C++",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" flex items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 h-[10%]">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/*About me*/}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="leading-7 text-white/60">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-5 max-w-[870px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between xl:justify-between gap-4"
                    >
                      <span
                        className={index !== 3 ? "hidden" : "text-white/70"}
                      >
                        {" "}
                        {info.sectionName}
                      </span>
                      <Link
                        href={
                          "https://www.linkedin.com/in/fahmudul-hassa%C3%B1-b87939248"
                        }
                        className={
                          index !== 3 ? "hidden" : "text-xl text-white/60"
                        }
                      >
                        {info.info}
                      </Link>

                      <span
                        className={index === 3 ? "hidden" : "text-white/70"}
                      >
                        {" "}
                        {info.sectionName}
                      </span>
                      <span className={index === 3 ? "hidden" : "text-xl"}>
                        {info.info}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/*Education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl  font-bold ">{education.title}</h3>
                <p className="max-w-600px leading-7 text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.info.map((info, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[190px] py-7 px-7 rounded-xl flex flex-col justify-center items-center
                     lg:items-start gap-1"
                      >
                        <span className="text-accent">{info.date}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {info.course}
                        </h3>
                        <div className="flex items-center  gap-3">
                          <span className="w-[7px] h-[7px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{info.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*Skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] leading-7 text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
                  {skills.skillSets.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.logo}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
