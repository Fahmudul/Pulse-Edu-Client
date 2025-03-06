"use client";

import { useState } from "react";
import { IWeeklySchedule, IWeeklyTimeSlot } from "@/types/calendar";

interface TeacherAvailabilityDisplayProps {
  availability: IWeeklySchedule;
}

const daysOrder: Array<keyof IWeeklySchedule> = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const formatTime = (time: string) => {
  // Convert 24-hour time to 12-hour format
  const [hours, minutes] = time.split(":");
  const hour = parseInt(hours, 10);
  const period = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minutes} ${period}`;
};

export default function TeacherAvailabilityDisplay({
  availability,
}: TeacherAvailabilityDisplayProps) {
  const [selectedDay, setSelectedDay] = useState<keyof IWeeklySchedule | null>(
    null
  );

  // Check if the teacher has any availability at all
  const hasAvailability = daysOrder.some(
    (day) => availability[day] && availability[day].length > 0
  );

  if (!hasAvailability) {
    return (
      <div className="text-center text-gray-500 p-4">
        No availability scheduled
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Teacher's Availability
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {daysOrder.map((day, index) => {
          const daySlots = availability[day] || [];
          const hasSlots = daySlots.length > 0;

          return (
            <button
              key={index}
              onClick={() => setSelectedDay(day)}
              className={`
                p-3 rounded-lg text-center font-semibold transition-all duration-300
                ${
                  selectedDay === day
                    ? "bg-blue-500 text-white"
                    : hasSlots
                    ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }
              `}
              disabled={!hasSlots}
            >
              {String(day).charAt(0).toUpperCase() + String(day).slice(1)}
            </button>
          );
        })}
      </div>

      {selectedDay && (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 capitalize">
            {selectedDay} Availability
          </h3>

          {availability[selectedDay]?.length > 0 ? (
            <div className="space-y-3">
              {availability[selectedDay].map((slot, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-md shadow-sm flex justify-between items-center"
                >
                  <span className="font-medium text-gray-700">
                    {formatTime(slot.start)} - {formatTime(slot.end)}
                  </span>
                  <span className="text-green-600 font-semibold">
                    Available
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              No available time slots for this day
            </p>
          )}

          <button
            onClick={() => setSelectedDay(null)}
            className="mt-4 w-full bg-gray-200 text-gray-700 p-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
