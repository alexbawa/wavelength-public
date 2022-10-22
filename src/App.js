import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Homepage from "./components/Homepage/Homepage.js";
import CreateEventPage from "./components/CreateEventPage/CreateEventPage.js";
import JoinEventPage from "./components/JoinEventPage/JoinEventPage.js";
import UserHome from "./components/UserHome/UserHome.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/createEvent" element={<CreateEventPage />} />
        <Route path="/joinEvent" element={<JoinEventPage />} />
        <Route path="/userHome" element={<UserHome />} />
      </Routes>
    </Router>
  );
}

export default App;