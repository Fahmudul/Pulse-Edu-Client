"use client";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "../../../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import {
  getTeacherCalendarSchedule,
  getTeacherDetails,
} from "@/Services/Teacher";
import { calendarStyles } from "@/components/Teacher/Calendar.style";
import { useSession } from "next-auth/react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
const EventComponent = ({ event }: { event: any }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="bg-red-500 flex justify-center items-center w-full h-full rounded-lg">
          <span className="">
            <strong className="mb-2">{event.title}</strong>
            <br />
            {moment(event.start).format("hh:mm A")} -{" "}
            {moment(event.end).format("hh:mm A")}
          </span>
        </TooltipTrigger>
        <TooltipContent className="bg-black">
          <p>{event.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
const TeacherAvailabilityPage = () => {
  const [currentView, setCurrentView] = useState<View>(Views.WEEK);
  const [currentDate, setCurrentDate] = useState(new Date());
  const handleViewChange = (newView: View) => {
    setCurrentView(newView as View);
  };

  const handleNavigate = (newDate: Date) => {
    setCurrentDate(newDate);
  };
  const { data: session } = useSession();
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getTeacherCalendarSchedule(session?.user.id);
      console.log(response);
      // setData(response);
    };
    if (session?.user.id) {
      fetchData();
    }
  }, [session?.user.id]);
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
      title: "meeetingggg",
      description: "Meeting with client",
    },
  ];
  console.log("from overview", data);
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
          view={currentView}
          onView={handleViewChange}
          onNavigate={handleNavigate}
          titleAccessor={"title"}
          tooltipAccessor={null}
          toolbar={true}
          date={currentDate}
          views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
          // defaultView={Views.WEEK}
          components={{
            event: EventComponent,
            toolbar: CustomToolbar,
          }}
        />
      </div>
    </div>
  );
};

const CustomToolbar = ({ label, onNavigate, onView }: any) => {
  return (
    <div className="rbc-toolbar flex justify-between items-center p-2 bg-gray-100 rounded-md">
      {/* Navigation Buttons */}
      <span className="rbc-btn-group">
        <button
          onClick={() => onNavigate("PREV")}
          className="px-3 py-1 bg-blue-500 text-white rounded-md"
        >
          ⬅️ Prev
        </button>
        <button
          onClick={() => onNavigate("TODAY")}
          className="px-3 py-1 bg-green-500 text-white rounded-md"
        >
          📍 Today
        </button>
        <button
          onClick={() => onNavigate("NEXT")}
          className="px-3 py-1 bg-blue-500 text-white rounded-md"
        >
          Next ➡️
        </button>
      </span>

      {/* Label (Current Date Display) */}
      <span className="rbc-toolbar-label font-bold">{label}</span>

      {/* View Selection Buttons */}
      <span className="rbc-btn-group">
        <button
          onClick={() => onView("month")}
          className="px-3 py-1 bg-gray-300 rounded-md"
        >
          Month
        </button>
        <button
          onClick={() => onView("week")}
          className="px-3 py-1 bg-gray-300 rounded-md"
        >
          Week
        </button>
        <button
          onClick={() => onView("day")}
          className="px-3 py-1 bg-gray-300 rounded-md"
        >
          Day
        </button>
        <button
          onClick={() => onView("agenda")}
          className="px-3 py-1 bg-gray-300 rounded-md"
        >
          Agenda
        </button>
      </span>
    </div>
  );
};

export default TeacherAvailabilityPage;
