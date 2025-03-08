"use client";

import { useState } from "react";
import { saveAvailability } from "@/Services/Teacher";

interface TimeSlot {
  startTime: string;
  endTime: string;
  isBooked?: boolean;
}

interface WeeklySchedule {
  [key: string]: TimeSlot[];
}

export default function AddTeacherAvailabilityModal({
  teacherId,
}: {
  teacherId?: string;
}) {
  // const { data: session } = useSession();
  const [schedule, setSchedule] = useState<WeeklySchedule>({
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  });
  const [day, setDay] = useState<keyof WeeklySchedule>("monday");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const addTimeSlot = () => {
    if (startTime >= endTime) {
      setMessage("End time must be after start time");
      return;
    }

    setSchedule((prev) => ({
      ...prev,
      [day]: [...prev[day], { startTime, endTime, isBooked: false }],
    }));

    setMessage("Time slot added");
  };

  const removeTimeSlot = (day: keyof WeeklySchedule, index: number) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!session) {
    //   setMessage('Please sign in first');
    //   return;
    // }
    console.log(schedule);
    setIsLoading(true);
    try {
      await saveAvailability(schedule);
      setMessage("Availability saved successfully");
    } catch (error) {
      setMessage("Error saving availability");
    } finally {
      setIsLoading(false);
    }
  };

  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  return (
    <div className="w-[30%] mx-auto  bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden border border-primary dark:border-gray-700">
      {/* Modal Header */}
      <div className="bg-primaryPro text-primary p-5 flex justify-between items-center">
        <h2 className="text-xl font-bold">Set Your Weekly Availability</h2>
      </div>

      {/* Modal Body */}
      <div className="p-6 bg-[#E8F6F3]/30">
        <div className="mb-5 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <label className="block text-sm font-medium text-[#093B3B] mb-2">
            Select Day:
          </label>
          <select
            value={day}
            onChange={(e) => setDay(e.target.value as keyof WeeklySchedule)}
            className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#093B3B] focus:border-transparent transition-all bg-gray-50 dark:bg-gray-900"
          >
            {daysOfWeek.map((d) => (
              <option key={d} value={d}>
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <label className="block text-sm font-medium text-[#093B3B] mb-2">
              Start Time:
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#093B3B] focus:border-transparent transition-all bg-gray-50 dark:bg-gray-900"
            />
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <label className="block text-sm font-medium text-[#093B3B] mb-2">
              End Time:
            </label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#093B3B] focus:border-transparent transition-all bg-gray-50 dark:bg-gray-900"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={addTimeSlot}
          className="w-full mb-6 bg-[#093B3B] text-white px-4 py-3 rounded-lg hover:bg-[#093B3B]/90 transition-colors flex items-center justify-center gap-2 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
          Add Time Slot
        </button>

        <div className="mb-6 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm max-h-60 overflow-y-auto">
          <h3 className="font-semibold text-[#093B3B] mb-4 border-b pb-2">
            Current Schedule
          </h3>
          <div className="space-y-4">
            {daysOfWeek.map((d) => (
              <div key={d} className="mb-2">
                <h4 className="font-medium text-[#093B3B] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#093B3B] inline-block"></span>
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                </h4>
                {schedule[d as keyof WeeklySchedule].length === 0 ? (
                  <p className="text-gray-500 text-sm ml-4 italic">
                    No time slots added
                  </p>
                ) : (
                  <ul className="space-y-2 mt-2">
                    {schedule[d as keyof WeeklySchedule].map((slot, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between bg-[#E8F6F3] p-2 rounded-md ml-4"
                      >
                        <span className="text-[#093B3B] font-medium">
                          {slot.startTime} - {slot.endTime}
                        </span>
                        <button
                          onClick={() =>
                            removeTimeSlot(d as keyof WeeklySchedule, i)
                          }
                          className="ml-2 text-white bg-red-500 hover:bg-red-600 p-1 rounded-full h-6 w-6 flex items-center justify-center transition-colors"
                          aria-label="Remove time slot"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="p-5 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-[#093B3B] text-white px-4 py-3 rounded-lg hover:bg-[#093B3B]/90 disabled:bg-gray-400 transition-colors flex items-center justify-center gap-2 font-medium"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Saving...
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
              Save Availability
            </>
          )}
        </button>

        {message && (
          <div
            className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${
              message.includes("Error")
                ? "bg-red-100 text-red-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={
                message.includes("Error") ? "text-red-500" : "text-green-500"
              }
            >
              {message.includes("Error") ? (
                <>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </>
              ) : (
                <>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </>
              )}
            </svg>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
