import Navbar from "./Components/Navbar";
import Events from "./Components/Events";
import Create from "./Components/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/events/upcoming"
              element={<Events kind="upcoming" />}
            ></Route>
            <Route path="/events/past" element={<Events kind="past" />}></Route>
            <Route path="/events/create" element={<Create />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
