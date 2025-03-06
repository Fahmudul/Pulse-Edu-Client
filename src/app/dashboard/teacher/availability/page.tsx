"use client";
import React, { useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getTeacherDetails } from "@/Services/Teacher";
import { calendarStyles } from "@/components/Teacher/Calendar.style";
const EventComponent = ({ event }: { event: any }) => {
  return (
    <div>
      <strong>{event.title}</strong>
      <br />
      {moment(event.start).format("hh:mm A")} -{" "}
      {moment(event.end).format("hh:mm A")}
    </div>
  );
};
const TeacherAvailabilityPage = () => {
  // const [currentView, setCurrentView] = useState(Views.WEEK);
  // const handleViewChange = (newView: string) => {
  //   setCurrentView(newView);
  // };
  // const [data, setData] = React.useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getTeacherDetails();

  //     setData(response);
  //   };
  //   fetchData();
  // }, []);
  // console.log("from overview", data);
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      start: "9:00", // 9:00 AM
      end: new Date(2025, 2, 4, 10, 0), // 10:00 AM
      title: "Available Slot",
    },
    {
      start: new Date(2025, 2, 4, 11, 0), // 11:00 AM
      end: new Date(2025, 2, 4, 12, 0), // 12:00 PM
      title: "Available Slot",
    },
    {
      start: new Date(2025, 2, 5, 10, 0), // 10:00 AM
      end: new Date(2025, 2, 5, 11, 0), // 11:00 AM
      title: "Booked Meeting",
    },
  ];
  return (
    <div className="p-6 bg-[#E8F6F3]/10 rounded-xl">
      <style>{calendarStyles}</style>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#093B3B]">
          Teacher Availability
        </h1>
        <p className="text-gray-600">
          View and manage your available time slots and meetings
        </p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-[#093B3B] to-[#145454]"></span>
            <span className="text-sm font-medium">Available Slots</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-[#8B0000] to-[#B22222]"></span>
            <span className="text-sm font-medium">Booked Meetings</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl overflow-hidden shadow-xl">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          showMultiDayTimes
          style={{ height: 600 }}
          // onView={handleViewChange}
          views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
          // defaultView={Views.WEEK}
          components={{
            event: EventComponent,
          }}
        />
      </div>
    </div>
  );
};

export default TeacherAvailabilityPage;
