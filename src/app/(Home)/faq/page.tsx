"use client";
import CommonBanner from "@/components/CommonBanner";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
const faqItems = [
  "General Questions",
  "Account & Security",
  "Payment & Billing",
  "Technical Issues",
  "Privacy Policy",
  "Contact Support",
];
const Faq = () => {
  // const form = useForm();

  // const onSubmit: SubmitHandler<FieldValues> = (data) => {
  //   toast.info("Question Submitted");
  // };
  return (
    <div>
      <CommonBanner subTitle="FAQs " title="FAQs " />
      <div className="my-20 w-[82.5%] mx-auto">
        <h1 className="text-4xl font-semibold mb-10 text-primary">
          Frequently asked questions
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="h-[600px] w text-primary flex flex-col p-4 space-y-2">
            <nav className="space-y-2">
              {faqItems.map((item, index) => (
                <span
                  key={index}
                  className={`border block px-4 py-2 rounded-md transition-colors hover:bg-gray-300 ${
                    index == 0 && "bg-primaryPro"
                  }`}
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>

          <div className="col-span-2 py-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className=" py-1 px-6 mb-5 border">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className=" py-1 px-6 mb-5 border">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className=" py-1 px-6 mb-5 border">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className=" bg-[#f5f7fa] mt-4">
            <div className="space-y-2 p-5 w-full">
              <h2 className="text-lg font-semibold text-primary">
                Don’t find your answer!
              </h2>
              <p className="text-[#6E7485] text-sm w-full mt-2 mb-6">
                Don’t worry, write your question here and our supsport team will
                help you.
              </p>
              <input
                type="text"
                placeholder="Subject"
                className="flex  pl-4 h-10 w-full rounded-md  border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <textarea
                id="comments"
                name="comments"
                placeholder="Message"
                rows="4"
                cols="39"
                className="pt-4 pl-4 "
              />
              <button
                type="submit"
                className="h-10 px-4 py-2 rounded-md bg-primary text-white text-sm font-medium shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
