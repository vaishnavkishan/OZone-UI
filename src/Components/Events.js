import EventList from "./EventList";
import useFetch from "../Hooks/useFetch";

function Events({ kind }) {
  const {
    data: events,
    isLoading,
    error,
  } = useFetch(`http://localhost:5160/Events?kind=${kind}`);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <p>Loading...</p>}
      {events && <EventList events={events} kind={kind} />}
    </div>
  );
}

export default Events;
