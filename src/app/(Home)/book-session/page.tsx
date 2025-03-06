"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { calculateHours } from "@/Utils/calculateHours";
import {
  FormValues,
  IAvailability,
  IBookingData,
  ISchedule,
  Subject,
} from "@/types/global";

const SelectAvailability = () => {
  const [availabilitySchedule, setAvailabilitySchedule] =
    useState<IAvailability>({});
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [availableDays, setAvailableDays] = useState<Option[]>([]);
  const [bookingData, setBookingData] = useState<IBookingData>({
    schedule: {},
    student: "",
    teacher: "",
    subject: "",
    duration: 0,
  });

  // Setup form
  const form = useForm<FormValues>({
    defaultValues: {
      selectedDays: [],
      selectedDay: "",
      selectedTime: "",
      selectedSubject: "",
      date: undefined,
    },
  });

  const { control, handleSubmit, watch, setValue } = form;

  const selectedDay = watch("selectedDay");
  const selectedTime = watch("selectedTime");
  const selectedDays = watch("selectedDays");
  const selectedSubject = watch("selectedSubject");
  const dateRange = watch("date");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [availability, allSubject] = await Promise.all([
          getTeacherAvailability(),
          getAllSubject(),
        ]);

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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Calculate time slots based on selected day
  const timeSlots = selectedDay
    ? availabilitySchedule[selectedDay as keyof typeof availabilitySchedule] ||
      []
    : [];
  // console.log(dateRange);
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
      console.log(duration);
      setBookingData((prev) => ({
        ...prev,
        schedule: newSchedule,
        subject: selectedSubject,
        duration: duration,
      }));
    }
  }, [selectedDays, selectedTime, selectedSubject, dateRange]);

  // Submission
  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    console.log("Booking data:", bookingData);
  };

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
                          <p className="text-center text-gray-600 dark:text-gray-400 py-2">
                            No results found
                          </p>
                        }
                        className="bg-white dark:bg-gray-800"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
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
                        <SelectContent>
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

              {/* Subject Selection */}
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
                      >
                        <SelectTrigger className="bg-white dark:bg-gray-800">
                          <SelectValue placeholder="Select a subject first" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject, index) => (
                            <SelectItem key={index} value={`${subject._id}`}>
                              {subject.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-6">
              {/* Time Selection */}
              <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg shadow-sm">
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
                      <FormMessage className="text-xs" />
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
                          selected={field.value}
                          onSelect={(date) => setValue("date", date)}
                          mode="range"
                          disabled={{ before: new Date() }}
                          className="bg-white dark:bg-gray-800 p-2 rounded"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
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

export default SelectAvailability;
