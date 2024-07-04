"use client";
import React from "react";
import { FaEnvelope, FaMapMarked, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const contactInfo = [
  {
    logo: <FaPhone />,
    title: "Phone",
    description: "(+880) 160 191 6247",
  },
  {
    logo: <FaEnvelope />,
    title: "Email",
    description: "fahmudul234@gmailcom",
  },
  {
    logo: <FaMapMarked />,
    title: "Address",
    description: "77/E Uttarkhan, Dhaka-1230",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn", delay: 2.4 },
      }}
      className="py-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col  xl:flex-row-reverse gap-[30px]">
          {/*Contact form*/}
          <div className="xl:h-[56%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-2xl">
              <h3 className="text-4xl font-semibold text-accent">
                Let{"'"}s Collaborate
              </h3>
              <p className="text-white/70 text-xl">
                Partner with a web developer to leverage shared expertise and
                teamwork for greater success in your projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>
              <Textarea
                classNameh="h-[250px]"
                placeholder="Type Your Message"
              />
              <div className=" flex ">
                <Button size="md" className="max-w-40">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/*Contact info*/}
          <div className="flex-1 bg-[#27272c] rounded-2xl px-4 flex flex-col items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <h1 className="text-3xl mb-7 text-white/70 font-semibold">
              Contact Info
            </h1>
            <ul className="flex flex-col gap-10">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-7">
                  <div className="flex items-center justify-center w-[55px h-[55px] xl:w-[75px] xl:h-[75px] bg-[#27272c] text-accent rounded-md ">
                    <div className="text-[30px]">{info.logo}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/70 ">{info.title}</p>
                    <h3 className="text-xl">{info.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
