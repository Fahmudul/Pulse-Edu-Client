// "use client";
import { getTeacherDetails } from "@/Services/Teacher";
import { IAvailability } from "@/types/global";
import React from "react";

const OverView = async ({ availability }: { availability: IAvailability }) => {
  console.log(availability);
  return (
    <div className="w-1/2  ">
      <AvailabilitySchedule availability={availability} />
    </div>
  );
};

const AvailabilitySchedule = ({
  availability,
}: {
  availability: IAvailability;
}) => {
  return (
    <div className="w-full mx-auto p-5  bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Weekly Schedule
      </h2>
      <div className="space-y-4">
        {Object.entries(availability).map(([day, slots]) => (
          <div key={day} className="border-b pb-3">
            <h3 className="text-lg  capitalize text-primary font-semibold">
              {day}
            </h3>
            {slots.length > 0 ? (
              <ul className="mt-2 space-y-1">
                {slots.map((slot, index) => (
                  <li
                    key={index}
                    className={`text-gray-700 ${
                      slot.isBooked ? "line-through" : ""
                    }`}
                  >
                    ⏰ {slot.startTime} - {slot.endTime}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">No slots available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default OverView;
