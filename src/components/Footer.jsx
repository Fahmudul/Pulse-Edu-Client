"use client";
import React from "react";
import FooterSocials from "./FooterSocial";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineMail } from "react-icons/md";
import { Input } from "./ui/input";
const Footer = () => {
  return (
    <div className="flex bg-[#1a292c] gap-10 flex-col md:flex-row container mx-auto mt-20 xl:px-20 items-center justify-center xl:gap-28 py-10 xl:py-20">
      <div className="w-full xl:w-[50%] flex flex-col items-center xl:items-start gap-[20px]">
        <h1 className="text-4xl font-semibold">Get In Touch</h1>
        <p className="text-center xl:text-left">
          Have a project in mind or need a developer{"'"}s expertise? Contact me
          to discuss your ideas and explore how we can bring your vision to
          life. Let{"'"}s create something great together!
        </p>
        <FooterSocials
          containerClass="flex  gap-3"
          iconClass="w-9 h-9 border border-accent rounded-3xl flex
              justify-center items-center text-accent text-base hover:bg-accent
              hover:text-primary hover:transition-all duration-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="flex h-[48px] rounded-xl border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
        />
      </div>
      <div className="w-full xl:w-[50%] flex flex-col lg:flex-row gap-10 items-center xl:items-start">
        <div className="flex relative">
          <span className="min-w-[230px] relative flex flex-col gap-3 justify-center items-center z-10 bg-[#17262b] min-h-[230px]  rounded-tl-3xl rounded-br-3xl">
            <TfiWorld
              className="w-9 h-9  rounded-3xl flex
              justify-center items-center text-accent text-base hover:bg-accent
              hover:text-primary hover:transition-all duration-500"
            />
            <p>Fahmudul Hassan</p>
          </span>
          <span className="absolute top-4  left-4 bg-[#262f2d] min-w-[230px] min-h-[230px]  rounded-tl-3xl rounded-br-3xl"></span>
        </div>
        <div className="flex relative">
          <span className="min-w-[230px] relative flex flex-col gap-3 justify-center items-center  z-10 bg-[#17262b] min-h-[230px]  rounded-tl-3xl rounded-br-3xl">
            <MdOutlineMail
              className="w-9 h-9 rounded-3xl flex
              justify-center items-center text-accent text-base hover:bg-accent
              hover:text-primary hover:transition-all duration-500"
            />
            <p>fahmudul234@gmali.com</p>
          </span>
          <span className="absolute top-4  left-4 bg-[#262f2d] min-w-[230px] min-h-[230px]  rounded-tl-3xl rounded-br-3xl"></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
