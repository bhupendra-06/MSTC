import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AvailableCourses from "./components/AvailableCourses";
import Loader from "./components/Loader"; // Import Loader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Show loader for 2 seconds
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<AvailableCourses />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
