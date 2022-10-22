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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    }

    this.setToken = this.setToken.bind(this);
  }

  setToken(newToken) {
    this.setState({token: newToken});
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/createEvent" element={<CreateEventPage setToken={this.setToken}/>} />
          <Route path="/joinEvent" element={<JoinEventPage setToken={this.setToken}/>} />
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/vote" element={<Voting />} />
        </Routes>
      </Router>
    );
  }
}

export default App;