import EventList from "./EventList";
import useFetch from "../Hooks/useFetch";

function Events({ kind }) {
  // const {
  //   data: events,
  //   isLoading,
  //   error,
  // } = useFetch(`https://localhost:7204/Events?kind=${kind}`);

  const {
    data: events,
    isLoading,
    error,
  } = {
    data: [
      {
        id: 123,
        author: "abcd",
        title: "test- dcgksd",
      },
      {
        id: 123,
        author: "abcd",
        title: "test-sjkhds",
      },
      {
        id: 123,
        author: "abcd",
        title: "test-dksdk",
      },
    ],
    isLoading: false,
    error: false,
  };

  console.log(events);
  console.log(isLoading);
  console.log(error);


  const values = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <p>Loading...</p>}
      {events && <EventList events={events} title={`All ${kind} events`} />}
    </div>
  );
}

export default Events;
