"use client";
import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getTeacherDetails } from "@/Services/Teacher";
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
      start: new Date(2025, 2, 4, 9, 0), // 9:00 AM
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
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        showMultiDayTimes
        style={{ height: 500 }}
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
};

export default TeacherAvailabilityPage;
