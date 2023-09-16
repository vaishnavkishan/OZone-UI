import { Padding } from "@mui/icons-material";
import EventPreview from "./EventPreview";

function EventList({ events, kind }) {
  return (
    <div className="blog-list">
      <h2
        style={{ paddingBottom: "16px", paddingLeft: "0.5px" }}
      >{`All ${kind} events`}</h2>
      {events.map((event) => (
        <EventPreview event={event} kind={kind} key={event.id} />
      ))}
    </div>
  );
}

export default EventList;
