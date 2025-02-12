"use client";
import React from "react";
// import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarked, FaPhone } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { IMessage } from "@/types/global";
import { useSendMessageMutation } from "@/Redux/Features/MessageApi/Message.api";
import { toast } from "sonner";
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
  const { register, handleSubmit, reset } = useForm<IMessage>();
  const [sendMessage] = useSendMessageMutation(undefined);
  const handleSendMessage = async (data: IMessage) => {
    const toastId = toast.loading("Sending messsage...");
    // const result = await handleContact(data);
    console.log(data);
    const { data: result } = await sendMessage(data);
    if (result?.success) {
      toast.success("Message Sent Successfully", { id: toastId });
    } else {
      const message = result?.message || "Failed to send message";
      toast.error(message, { id: toastId });
    }
    reset();
  };
  return (
    <div className="py-8 animate__slideInLeft" id="Contact">
      <div className="container mx-auto">
        <div className="flex flex-col  xl:flex-row-reverse gap-[30px]">
          {/*Contact form*/}
          <div className="xl:h-[56%] order-2 xl:order-none animate__slideInRight">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-2xl"
              onSubmit={handleSubmit(handleSendMessage)}
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
                  {...register("firstName", { required: true })}
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                  required
                />

                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  required
                />
                <Input
                  type="text"
                  placeholder="Phone"
                  {...register("phone", { required: true })}
                  required
                />
                <Input
                  type="text"
                  placeholder="Subject"
                  {...register("subject", { required: true })}
                  required
                />
              </div>
              <Textarea
                className="h-[250px]"
                placeholder="Type Your Message"
                {...register("message", { required: true })}
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
