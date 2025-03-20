import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AvailableCourses from "./components/AvailableCourses";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Navbar stays visible on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<AvailableCourses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
