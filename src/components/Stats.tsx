"use client";
import CountUp from "react-countup";
const statsData = [
  {
    num: 4,
    text: "Years of Experience",
  },
  {
    num: 27,
    text: "Projects Completed",
  },
  {
    num: 10,
    text: "Technology Worked With",
  },
  {
    num: 140,
    text: "Commits This Year",
  },
];
const Stats = () => {
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {statsData.map((item, idx) => (
            <div
              className={`${
                idx !== statsData.length - 1 &&
                "flex-1 relative gap-4 items-center  after:content-[''] after:block after:h-[85%] after:w-[2px]  after:bg-[#fee5b5] after:absolute after:right-0 after:top-[9%] last-of-type:border-r-0"
              }  `}
              key={idx}
            >
              <div>
                <CountUp
                  end={item.num}
                  duration={5}
                  className="text-5xl xl:text-6xl font-bold"
                />
                <span className="text-5xl xl:text-6xl font-bold">
                  {idx == 0 && "+"}
                </span>
              </div>
              <p
                className={`${
                  item.text.length > 10 ? "max-w-[120px]" : "max-w-[150px]"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
