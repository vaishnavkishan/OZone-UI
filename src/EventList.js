function EventList({ events, title }) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {events.map((event) => (
        <div className="blog-preview" key={event.id}>
          <h2>{event.title}</h2>
          <p>Written by {event.author}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;
