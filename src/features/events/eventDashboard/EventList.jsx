import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({ events, selectEvent, deleteEvent }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          deleteEvent={deleteEvent}
          event={event}
          key={event.id}
          selectEvent={selectEvent}
        />
      ))}
    </>
  );
}
