"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getTeacherAvailability } from "@/Services/Teacher";
import { getAllSubject } from "@/Services/Subject";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { calculateHours } from "@/Utils/calculateHours";
import {
  FormValues,
  IAvailability,
  IBookingData,
  ISchedule,
  Subject,
} from "@/types/global";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/Redux/hooks";
import { convertEventDate } from "@/Utils/convertEventDate";
import { BookingData, bookingSchema } from "@/ZodSchema";
const BookingModal = () => {
  const params = useParams();
  const {
    id: studentId,
    email: studentEmail,
    name: studentName,
  } = useAppSelector((state) => state.auth);
  // //console.log(studentId);
  // //console.log(params);
  const [availabilitySchedule, setAvailabilitySchedule] =
    useState<IAvailability>({});
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [availableDays, setAvailableDays] = useState<Option[]>([]);
  const [bookingData, setBookingData] = useState<IBookingData>({
    schedule: {},
    student: studentId,
    teacher: params?.id!,
    subject: "",
    duration: 0,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(bookingSchema) as any,
    defaultValues: {
      selectedDays: [],
      selectedDay: "",
      selectedTime: "",
      selectedSubject: "",
      date: undefined,
    },
  });
  const {
    formState: { errors },
  } = form;
  const { control, handleSubmit, watch, setValue } = form;
  const selectedDay = watch("selectedDay");
  const selectedTime = watch("selectedTime");
  const selectedDays = watch("selectedDays");
  const selectedSubject = watch("selectedSubject");
  const dateRange = watch("date");
  //console.log(selectedDays);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [availability, allSubject] = await Promise.all([
          getTeacherAvailability(),
          getAllSubject(),
        ]);
        // console.log(allSubject);
        if (availability?.data) {
          setAvailabilitySchedule(availability.data);

          // Prepare available days
          const newAvailableDays = Object.keys(availability.data)
            .filter(
              (day) =>
                availability.data[day as keyof typeof availability.data]
                  ?.length > 0
            )
            .map((day) => ({
              label: day.charAt(0).toUpperCase() + day.slice(1),
              value: day,
            }));

          setAvailableDays(newAvailableDays);
        }

        if (allSubject?.data?.length) {
          setSubjects(allSubject.data);
        }
      } catch (error) {
        //console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(subjects);

  // Calculate time slots based on selected day
  const timeSlots = selectedDay
    ? availabilitySchedule[selectedDay as keyof typeof availabilitySchedule] ||
      []
    : [];
  // //console.log(dateRange);
  // Update booking State when form values changes
  useEffect(() => {
    if (selectedTime && selectedDays.length > 0) {
      const [startTime, endTime] = selectedTime.split(" - ");

      const newSchedule: ISchedule = {};
      selectedDays.forEach((day) => {
        newSchedule[day.value] = { startTime, endTime };
      });

      let duration = 0;
      duration = calculateHours(
        bookingData?.schedule || {},
        dateRange?.from!,
        dateRange?.to!
      );
      //console.log(duration);
      setBookingData((prev) => ({
        ...prev,
        schedule: newSchedule,
        subject: selectedSubject,
        duration: duration,
      }));
    }
  }, [selectedDays, selectedTime, selectedSubject, dateRange]);
  //console.log(bookingData);
  // Submission
  const onSubmit = (data: FormValues) => {
    // console.log("form data", data);
    const startDate = convertEventDate(data?.date?.from as Date);
    const endDate = convertEventDate(data?.date?.to as Date);
    const [startTime, endTime] = data?.selectedTime.split(" - ");
    //console.log(startTime, endTime);
    //console.log(startDate, " ", endDate);
    const recurrenceDate =
      endDate.split("-").join("") + endTime.split(":").join("");
    //console.log("reuvvv", recurrenceDate);
    const googleEventModifiedData = {
      summary: `Session with ${studentName}`,
      description: `${data?.selectedSubject.split("-")[1]} session`,
      start: {
        dateTime: `${startDate}T${startTime}:00+06:00`,
        timeZone: "Asia/Dhaka",
      },
      end: {
        dateTime: `${startDate}T${endTime}:00+06:00`,
        timeZone: "Asia/Dhaka",
      },
      recurrence: [`RRULE:FREQ=WEEKLY;UNTIL=${recurrenceDate}00Z`],
    };
    const modifiedData = {
      ...bookingData,
      subject: data?.selectedSubject.split("-")[0],
      student: studentId,
      event: googleEventModifiedData,
    };
    delete modifiedData.schedule;
    console.log("Booking data:", modifiedData);
  };
  // console.log(selectedSubject);
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[40%] max-w-3xl mx-auto my-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
      >
        <div className="bg-primaryPro  p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-primary text-center">
            Book a session
          </h2>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6 bg-gray-50 dark:bg-gray-900 p-5 rounded-lg shadow-sm">
              {/* Days Selection */}
              <FormField
                control={control}
                name="selectedDays"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Select Days
                    </FormLabel>
                    <div className="text-xs text-primary mb-2">
                      Your selection:{" "}
                      {field.value.map((val) => val.label).join(", ")}
                    </div>
                    <FormControl>
                      <MultipleSelector
                        key={availableDays.length}
                        value={field.value}
                        onChange={(value) => {
                          setValue("selectedDays", value);
                        }}
                        defaultOptions={availableDays}
                        disabled={!availableDays.length}
                        placeholder="Select days ..."
                        emptyIndicator={
                          <p className="text-center text-gray-600 dark:text-gray-400 py-2 ">
                            No results found
                          </p>
                        }
                        className="bg-white  dark:bg-primaryPro "
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500">
                      {errors?.selectedDays?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* Single Day Selection */}
              <FormField
                control={control}
                name="selectedDay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Select a Day
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          setValue("selectedDay", value);
                          setValue("selectedTime", ""); // Reset time when day changes
                        }}
                      >
                        <SelectTrigger className="bg-white dark:bg-gray-800">
                          <SelectValue placeholder="Choose a day" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {availableDays.map((day) => (
                            <SelectItem key={day.value} value={day.value}>
                              {day.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <p className="text-primary text-xs font-medium italic py-1 px-2 bg-primary/10 rounded">
                Please select the same time if you select multiple days.
              </p>

              {/* Time Selection */}
              <FormField
                control={control}
                name="selectedTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Select Time
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={!selectedDay || timeSlots.length === 0}
                        className="space-y-2 my-2"
                      >
                        {selectedDay && timeSlots.length > 0 ? (
                          timeSlots.map((slot, index) => {
                            const timeValue = `${slot.startTime} - ${slot.endTime}`;
                            return (
                              <div
                                key={index}
                                className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                              >
                                <RadioGroupItem
                                  value={timeValue}
                                  id={`time-${index}`}
                                  className="text-primary"
                                />
                                <Label
                                  htmlFor={`time-${index}`}
                                  className="cursor-pointer text-sm"
                                >
                                  {timeValue}
                                </Label>
                              </div>
                            );
                          })
                        ) : (
                          <p className="text-gray-500 text-sm italic">
                            Select a day first
                          </p>
                        )}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className="text-xs text-red-500">
                      {errors?.selectedTime?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-6">
              {/* Subject Selection */}
              <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg shadow-sm">
                <FormField
                  control={control}
                  name="selectedSubject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Select Subject
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          // ref={subjectNameRef}
                        >
                          <SelectTrigger className="bg-white dark:bg-gray-800">
                            <SelectValue placeholder="Select a subject first" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {subjects.map((subject, index) => (
                              <SelectItem
                                key={index}
                                value={`${subject._id}-${subject.name}`}
                              >
                                {subject.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500">
                        {errors?.selectedSubject?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>

              {/* Calendar */}
              <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg shadow-sm">
                <FormField
                  control={control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Select Date Range
                      </FormLabel>
                      <FormControl>
                        <Calendar
                          min={20}
                          selected={field.value}
                          onSelect={(date) => setValue("date", date)}
                          mode="range"
                          disabled={{ before: new Date() }}
                          className="bg-white dark:bg-gray-800 p-2 rounded"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500">
                        {errors?.date?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 border-t border-gray-200 dark:border-gray-700">
          <Button
            type="submit"
            className="w-full bg-primary  text-white font-medium"
          >
            Request a session
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BookingModal;
