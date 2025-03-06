// app/components/TeacherAvailabilityForm.tsx
"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { saveAvailability } from "@/Services/Teacher";
// import { saveTeacherAvailability } from '../services/calendarApi';

interface TimeSlot {
  startTime: string;
  endTime: string;
  isBooked?: boolean;
}

interface WeeklySchedule {
  [key: string]: TimeSlot[];
}

export default function TeacherAvailabilityForm({
  teacherId,
}: {
  teacherId: string;
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
    <div className="max-w-lg mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Set Your Weekly Availability</h2>

      <div className="mb-4">
        <label className="block mb-2">Day:</label>
        <select
          value={day}
          onChange={(e) => setDay(e.target.value as keyof WeeklySchedule)}
          className="w-full p-2 border rounded"
        >
          {daysOfWeek.map((d) => (
            <option key={d} value={d}>
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2">Start Time:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">End Time:</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={addTimeSlot}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Time Slot
      </button>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Current Schedule:</h3>
        {daysOfWeek.map((d) => (
          <div key={d} className="mb-2">
            <h4 className="font-medium">
              {d.charAt(0).toUpperCase() + d.slice(1)}:
            </h4>
            {schedule[d as keyof WeeklySchedule].length === 0 ? (
              <p className="text-gray-500">No time slots added</p>
            ) : (
              <ul className="list-disc pl-5">
                {schedule[d as keyof WeeklySchedule].map((slot, i) => (
                  <li key={i} className="flex items-center">
                    {slot.startTime} - {slot.endTime}
                    <button
                      onClick={() =>
                        removeTimeSlot(d as keyof WeeklySchedule, i)
                      }
                      className="ml-2 text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
      >
        {isLoading ? "Saving..." : "Save Availability"}
      </button>

      {message && (
        <div className="mt-4 p-2 bg-blue-100 text-blue-800 rounded">
          {message}
        </div>
      )}
    </div>
  );
}
