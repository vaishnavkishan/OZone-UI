import EventList from "./EventList";
import useFetch from './useFetch';

function Events({kind}) {
    const {data: events, isLoading, error} = useFetch(`https://localhost:7204/Events?kind=${kind}`);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <p>Loading...</p>}
            {events && <EventList events={events} title={`All ${kind} events`} />}
        </div>
    );
}

export default Events;
