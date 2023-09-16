import React from "react";

function Event({ event }) {
  return;
  <div className="blog-preview" key={event.id}>
    <h2>{event.title}</h2>
    <p>Written by {event.author}</p>
  </div>;
}

export default Event;
