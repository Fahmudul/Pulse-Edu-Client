import CommonBanner from "@/components/CommonBanner";
import Google from "@/components/Google";
import Lenovo from "@/components/Lenovo";
import NetFlix from "@/components/NetFlix";
import Youtube from "@/components/Youtube";
import Leximark from "@/components/leximark";
import Microsoft from "@/components/microsoft";
import Slack from "@/components/slack";
import Verizon from "@/components/verizon";
import React from "react";
import team1 from "../../../../public/assets/team1.jpg";
import team2 from "../../../../public/assets/team2.jpg";
import team3 from "../../../../public/assets/team3.jpg";
import team4 from "../../../../public/assets/team4.jpg";
import team5 from "../../../../public/assets/team5.jpg";
import team6 from "../../../../public/assets/team6.jpg";
import team7 from "../../../../public/assets/team7.jpg";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div>
      <CommonBanner subTitle="About " title="About " />
      {/* Banner */}
      <div className="w-full border-b-2 border-[#E9EAF0] pb-5 lg:pb-0">
        <div className="w-[82.5%]  flex  lg:flex-row flex-col-reverse mx-auto gap-3  xl:my-20">
          <div className="text-center lg:text-left my-auto max-w-[535px]">
            <div className="text-3xl lg:text-7xl font-semibold text-[#E9EAF0]">
              2007-2025
            </div>
            <div className="mt-4 mb-8 text-2xl lg:text-5xl font-bold lg:font-semibold text-primary">
              We share knowledge <br /> with the world
            </div>
            <div className="text-[#6E7485] text-lg lg:text-2xl leading-8">
              We strive to make knowledge accessible to all, fostering a
              community where learning thrives. Through shared insights and
              discussions, we connect curious minds, empowering growth and
              innovation.
            </div>
          </div>

          <div className="split-image-container h-[250px] lg:h-[500px]">
            <div className="image-left h-full border"></div>
            <div className="image-right h-full border"></div>
          </div>
        </div>
      </div>
      {/* Company collabs */}
      <div className="bg-[#fefefe] w-full">
        <div className="w-[82.5%]  mx-auto lg:my-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            <div className="col-span-1 lg:col-span-2 space-y-5  flex flex-col items-start justify-center">
              <div className="text-3xl font-semibold text-primary ">
                We Just keep growing <br /> with 6.3k Companies
              </div>
              <div className="text-base">
                Continue to grow, partnering with 6.3K companies and expanding
                our impact every day.
              </div>
            </div>
            <div className="col-span-4 grid grid-rows-6 lg:grid-rows-1 lg:grid-cols-4 gap-6">
              <span className="row-span-2 flex justify-center items-center bg-white custom-shadow">
                <NetFlix />
              </span>
              <span className="row-span-2 flex justify-center items-center bg-white custom-shadow">
                <Youtube />
              </span>
              <span className="row-span-2 flex justify-center items-center bg-white custom-shadow">
                <Google />
              </span>
              <span className="row-span-2 flex justify-center items-center bg-white custom-shadow">
                <Lenovo />
              </span>
              <span className="row-span-2 flex justify-center items-center bg-white custom-shadow">
                <Slack />
              </span>
              <span className="row-span-2 flex justify-center items-center bg-white custom-shadow">
                <Verizon />
              </span>
              <span className="row-span-2 flex justify-center items-center bg-white custom-shadow">
                <Leximark />
              </span>
              <span className="row-span-2 flex justify-center items-center bg-white custom-shadow">
                <Microsoft />
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* Mission */}
      <div className="w-full bg-[#ffeee8] ">
        <div className="w-[82.5%] grid grid-cols-2 mx-auto  ">
          <div className="bg-[url('/assets/group.png')] bg-cover bg-center h-[500px]"></div>
          <div className="row-span-2 flex justify-center flex-col">
            <div className="text-[#FF6636] font-medium">
              OUR ONE BILLION MISSION
            </div>
            <div className="text-primary text-4xl font-semibold mt-2 mb-6">
              Our one billion mission sounds bold, We agree.
            </div>
            <div className="text-[#4E5566] text-base leading-8">
              "We cannot solve our problems with the same thinking we used when
              we created them."—Albert Einstein. Institutions are slow to
              change. Committees are where good ideas and innovative thinking go
              to die. Choose agility over dogma. Embrace and drive change. We
              need to wipe the slate clean and begin with bold, radical
              thinking.
            </div>
          </div>
        </div>
      </div>
      {/* Teams */}
      <div className="w-full bg-[#f5f7fa] py-20 ">
        <div className="flex w-[82.5%] mx-auto  items-center gap-28 ">
          <div className="max-w-[425px]">
            <div className="row-span-2 flex justify-center flex-col">
              <div className="text-[#666668] font-medium">OUR GALLERY</div>
              <div className="text-primary text-4xl font-semibold mt-2 mb-6">
                We’ve been here almost 17 years
              </div>
              <div className="text-[#4E5566] text-base leading-8">
                "For nearly 17 years, we have been committed to excellence,
                sharing knowledge, and fostering growth. Through innovation and
                dedication, we’ve built strong relationships, earned trust, and
                made a lasting impact on our community
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex items-end gap-5">
              <Image src={team1} alt="team1" width={280} height={200} />
              <Image src={team2} alt="team1" width={312} height={232} />
              <Image src={team3} alt="team1" width={120} height={163} />
            </div>
            <div className="flex items-start gap-5">
              <Image src={team4} alt="team1" width={225} height={270} />
              <Image src={team5} alt="team1" width={424} height={312} />
              <div className="flex flex-col gap-5">
                <Image src={team6} alt="team1" width={340} height={160} />
                <Image src={team7} alt="team1" width={125} height={128} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
