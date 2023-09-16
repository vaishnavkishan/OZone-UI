import Event from "./Event";

function EventList({ events, title }) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {events.map((event) => (
        <Event event={event} />
      ))}
    </div>
  );
}

export default EventList;
