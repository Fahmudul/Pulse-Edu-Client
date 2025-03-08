"use client";
import { useGetAllTeacherQuery } from "@/Redux/Features/Teachers/Teacher.api";
import { getAllTeacher } from "@/Services/Teacher";
import CommonBanner from "@/components/CommonBanner";
import TeacherCard from "@/components/Teacher/TeacherCard";
import { ITutor } from "@/types/global";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Page = () => {
  const [params, setParams] = useState<{
    [key: string]: string | string[] | undefined;
  }>({});

  const {
    data: teacherData,
    isLoading,
    isFetching,
    refetch,
  } = useGetAllTeacherQuery(params);

  useEffect(() => {
    refetch();
  }, [params]);

  const authorList: any[] = [];

  // Modified onChange handler for RadioGroup components
  const onRadioChange = (value: string) => {
    const [name, valueStr] = value.split("-");

    if (name === "hourlyRate") {
      const [min, max] = valueStr.split(",");
      setParams((prev) => ({
        ...prev,
        minHourlyRate: min,
        maxHourlyRate: max,
      }));
    } else if (name === "rating") {
      setParams((prev) => ({
        ...prev,
        [name]: valueStr,
      }));
    } else if (name === "available") {
      setParams((prev) => ({
        ...prev,
        [name]: valueStr,
      }));
    }

    // Refetch after params change
    refetch();
  };

  // Handler for clearing a specific filter
  const clearFilter = (filterName: string) => {
    setParams((prev) => {
      const newParams = { ...prev };

      if (filterName === "hourlyRate") {
        delete newParams.minHourlyRate;
        delete newParams.maxHourlyRate;
      } else {
        delete newParams[filterName];
      }

      return newParams;
    });
  };

  return (
    <div className="mb-4 lg:mb-6 xl:mb-10">
      <CommonBanner title="Teachers" subTitle="Teachers" />
      <div className="mt-10 w-[82.5%] mx-auto">
        <h1 className="text-center text-4xl font-bold text-primary my-3 lg:my-6 xl:my-20">
          Meet Our Professional <br /> Mentors
        </h1>
        <div className="mt-3 lg:mt-5 xl:mt-7 grid grid-cols-5 gap-3">
          <div className="col-span-1 shadow-lg bg-[#f5f7fa] max-h-[570px]">
            <div className="col-span-1 p-5">
              <h3 className="text-2xl font-semibold mb-2">Filter</h3>
              <hr />
              <div className="my-3 space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">Hourly rate</h4>
                    {(params.minHourlyRate || params.maxHourlyRate) && (
                      <button
                        onClick={() => clearFilter("hourlyRate")}
                        className="text-sm text-blue-500"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 px-2">
                    <RadioGroup
                      onValueChange={onRadioChange}
                      value={
                        params.minHourlyRate && params.maxHourlyRate
                          ? `hourlyRate-${params.minHourlyRate},${params.maxHourlyRate}`
                          : undefined
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="hourlyRate-100,200"
                          id="hourlyRate-100-200"
                        />
                        <Label htmlFor="hourlyRate-100-200">100৳ - 200৳</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="hourlyRate-200,300"
                          id="hourlyRate-200-300"
                        />
                        <Label htmlFor="hourlyRate-200-300">200৳ - 300৳</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="hourlyRate-300,400"
                          id="hourlyRate-300-400"
                        />
                        <Label htmlFor="hourlyRate-300-400">300৳ - 400৳</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="hourlyRate-400,500"
                          id="hourlyRate-400-500"
                        />
                        <Label htmlFor="hourlyRate-400-500">400৳ - 500৳</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <hr />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">Rating</h4>
                    {params.rating && (
                      <button
                        onClick={() => clearFilter("rating")}
                        className="text-sm text-blue-500"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 px-2">
                    <RadioGroup
                      onValueChange={onRadioChange}
                      value={
                        params.rating ? `rating-${params.rating}` : undefined
                      }
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="rating-1"
                          id="rating-1"
                          className="sr-only"
                        />
                        <Label
                          htmlFor="rating-1"
                          className="flex items-center cursor-pointer"
                        >
                          <Star className="fill-[#f2c80d] border-none outline-none text-transparent" />
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="rating-2"
                          id="rating-2"
                          className="sr-only"
                        />
                        <Label
                          htmlFor="rating-2"
                          className="flex items-center cursor-pointer"
                        >
                          {Array(2)
                            .fill(0)
                            .map((_, index) => (
                              <Star
                                key={index}
                                className="fill-[#f2c80d] border-none outline-none text-transparent"
                              />
                            ))}
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="rating-3"
                          id="rating-3"
                          className="sr-only"
                        />
                        <Label
                          htmlFor="rating-3"
                          className="flex items-center cursor-pointer"
                        >
                          {Array(3)
                            .fill(0)
                            .map((_, index) => (
                              <Star
                                key={index}
                                className="fill-[#f2c80d] border-none outline-none text-transparent"
                              />
                            ))}
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="rating-4"
                          id="rating-4"
                          className="sr-only"
                        />
                        <Label
                          htmlFor="rating-4"
                          className="flex items-center cursor-pointer"
                        >
                          {Array(4)
                            .fill(0)
                            .map((_, index) => (
                              <Star
                                key={index}
                                className="fill-[#f2c80d] border-none outline-none text-transparent"
                              />
                            ))}
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="rating-5"
                          id="rating-5"
                          className="sr-only"
                        />
                        <Label
                          htmlFor="rating-5"
                          className="flex items-center cursor-pointer"
                        >
                          {Array(5)
                            .fill(0)
                            .map((_, index) => (
                              <Star
                                key={index}
                                className="fill-[#f2c80d] border-none outline-none text-transparent"
                              />
                            ))}
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <hr />

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">Availability</h4>
                    {params.available && (
                      <button
                        onClick={() => clearFilter("available")}
                        className="text-sm text-blue-500"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 px-2">
                    <RadioGroup
                      onValueChange={onRadioChange}
                      value={
                        params.available
                          ? `available-${params.available}`
                          : undefined
                      }
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={"available-" + true}
                          id="available-true"
                        />
                        <Label htmlFor="available-true">Available</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={"available-" + false}
                          id="available-false"
                        />
                        <Label htmlFor="available-false">Not Available</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-semibold">Subject</h4>
                  <div className="flex flex-col gap-2 px-2">
                    {authorList?.data?.map((author: { _id: string }) => (
                      <Checkbox
                        key={subject._id}
                        onChange={onChange}
                        value={"author-" + author._id}
                      >
                        {author._id}
                      </Checkbox>
                    ))}
                  </div>
                </div>
                <hr /> */}
              </div>
            </div>
          </div>
          <div className="col-span-4 ">
            <div className="shadow-lg items-center  bg-[#f5f7fa] rounded-lg py-2 flex justify-between mb-3">
              <div className="py-3 px-2 flex-1">
                {" "}
                <Input
                  placeholder="Search Tutors by name..."
                  className="bg-white border w-[40%] border-primaryPro rounded-md "
                />
              </div>
              <div className="w-[20%] font-bold text-xl text-primary flex justify-end pr-3">
                Teachers {teacherData?.data?.totalDocs}
              </div>
            </div>
            <div className=" grid grid-cols-3 gap-5">
              {isLoading ? (
                <div className="col-span-3 flex justify-center items-center min-h-[400px]">
                  <p>Loading teachers...</p>
                </div>
              ) : teacherData?.data?.res?.length > 0 ? (
                teacherData?.data?.res?.map((teacher: ITutor, idx: number) => (
                  <TeacherCard hideButton={true} key={idx} teacher={teacher} />
                ))
              ) : (
                <div className="col-span-3 flex justify-center items-center min-h-[400px]">
                  <p>No teachers found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
