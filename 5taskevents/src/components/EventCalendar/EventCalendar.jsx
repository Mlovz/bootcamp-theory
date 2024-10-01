import React from "react";
import EventItem from "../EventItem/EventItem";

const EventCalendar = ({ events }) => {
  return (
    <div>
      {events.map((event, index) => (
        <EventItem key={index} name={event.name} date={event.date} />
      ))}
    </div>
  );
};
export default EventCalendar;
