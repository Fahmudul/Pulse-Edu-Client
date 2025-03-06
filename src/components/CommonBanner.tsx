import React from "react";

const CommonBanner = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="w-full bg-primaryPro pb-3 lg:pb-5 xl:pb-12">
      <div className="rounded-xl w-[82.5%] mx-auto  h-[450px] border bg-primary flex justify-center items-center">
        <span className="text-center space-y-4">
          <p className="text-md font-semibold md:text-lg xl:text-2xl text-primaryPro">
            {subTitle}
          </p>
          <p className="text-lg font-semibold md:text-xl xl:text-5xl text-primaryPro">
            {" "}
            {title}
          </p>
        </span>
      </div>
    </div>
  );
};

export default CommonBanner;
