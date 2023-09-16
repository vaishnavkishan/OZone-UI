import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>The OZone Event Wall</h1>
      <div className="links">
        <Link to="/events/upcoming">Upcoming</Link>
        <Link to="/events/past">Past</Link>
        <Link
          to="/events/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Create Event
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
