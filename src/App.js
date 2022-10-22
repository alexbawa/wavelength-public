import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Homepage from "./components/Homepage/Homepage.js";
import CreateEventPage from "./components/CreateEventPage/CreateEventPage.js";
import JoinEventPage from "./components/JoinEventPage/JoinEventPage.js";
import UserHome from "./components/UserHome/UserHome.js";
import SpotifyInterface from './util/SpotifyInterface';
import Queue from "./components/Queue/Queue.js";
import Voting from "./components/Voting/Voting.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/createEvent" element={<CreateEventPage />} />
        <Route path="/joinEvent" element={<JoinEventPage />} />
        <Route path="/userHome" element={<UserHome />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/vote" element={<Voting />} />
      </Routes>
    </Router>
  );
}

export default App;