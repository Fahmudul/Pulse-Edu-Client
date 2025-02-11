"use client";
import React from "react";
// import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarked, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import 'animate.css';

import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
    description: "77/e Uttarkhan, Dhaka-1230",
  },
];

const Contact = () => {
  // const sendEmail = (e) => {
  //   e.preventDefault();
    
  //   const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  //   const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  //   const publicKey = process.env.NEXT_PUBLIC_USER_ID;

  //   // Create a new object that contains dynamic template params
  //   const templateParams = {
  //     from_name: e.target.from_name.value,
  //     from_email: e.target.from_email.value,
  //     message: e.target.message.value,
  //   };
  //   // Send the email using EmailJS
  //   emailjs
  //     .send(serviceId, templateId, templateParams, publicKey)
  //     .then((response) => {
  //       toast.success("Email sent successfully!");
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };
  return (
    <div

      
      className="py-8"
      id="Contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col  xl:flex-row-reverse gap-[30px]">
          {/*Contact form*/}
          <div className="xl:h-[56%] order-2 xl:order-none ">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-2xl"
              // onSubmit={sendEmail}
            >
              <h3 className="text-4xl font-semibold text-accent">
                Let{"'"}s Collaborate
              </h3>
              <p className="text-white/70 text-xl">
                Partner with a web developer to leverage shared expertise and
                teamwork for greater success in your projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="First Name"
                  name="from_name"
                  required
                />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email" name="from_email" required/>
                <Input type="phone" placeholder="Phone" />
              </div>
              <Textarea
                className="h-[250px]"
                placeholder="Type Your Message"
                name="message"
                required
              />
              <div className=" flex ">
                <Button size="md" className="max-w-40">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/*Contact info*/}
          <div className="animate__slideInLeft flex-1 bg-[#27272c] rounded-2xl px-4 flex flex-col items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
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
    </div>
  );
};

export default Contact;
