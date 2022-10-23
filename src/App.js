import React from "react";
import { Route, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Homepage from "./components/Homepage/Homepage.js";
import CreateEventPage from "./components/CreateEventPage/CreateEventPage.js";
import CreateEventPlaylist from "./components/CreateEventPlaylist/CreateEventPlaylist";
import CreateEventCodePage from "./components/CreateEventCodePage/CreateEventCodePage";
import JoinEventPage from "./components/JoinEventPage/JoinEventPage.js";
import UserHome from "./components/UserHome/UserHome.js";
import Queue from "./components/Queue/Queue.js";
import Voting from "./components/Voting/Voting.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      playlistID: null,
    }

    this.setToken = this.setToken.bind(this);
    this.getToken = this.getToken.bind(this);

    this.setPlaylistID = this.setPlaylistID.bind(this);
    this.getPlaylistID = this.getPlaylistID.bind(this);
  }

  setToken(newToken) {
    this.setState({token: newToken});
  }

  getToken() {
    return this.state.token;
  }

  setPlaylistID(newID) {
    this.setState({playlistID: newID});
  }

  getPlaylistID() {
    return this.state.playlistID;
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/createEvent" element={<CreateEventPage getPlaylistID={this.getPlaylistID} setPlaylistID={this.setPlaylistID} getToken={this.getToken} setToken={this.setToken}/>}/>
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