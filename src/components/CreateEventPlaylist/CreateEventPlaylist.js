import React from "react";
import ProgressDots from "../ProgressDots/ProgressDots";
import './CreateEventPlaylist.scss';
import RightArrow from "../Homepage/right-arrow.png";
import SpotifyInterface from "../../util/SpotifyInterface";
import {Navigate} from "react-router-dom"


class CreateEventPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.createPlaylist = this.createPlaylist.bind(this);
    }

    async componentDidMount() {
        let token = await SpotifyInterface.getToken();
        this.props.setToken(token);
    }

    async createPlaylist(e) {
        e.preventDefault();
        let playlistName = document.getElementById("playlist-name").value;
        let playlistID = await SpotifyInterface.createPlaylist(playlistName, this.props.getToken());
        this.props.setPlaylistID(playlistID)
        console.log(playlistID);
        this.props.navigation.navigate('/createEventCode', {})
        
    }

    render() {
        return (
            <div className="create-event-playlist-page">
                <h2 className="create-event-playlist-title">Playlist name</h2>
                <p className="create-event-playlist-subtitle">Enter playlist name:</p>
                <div className="centered-box">
                    <input id="playlist-name" className="create-event-playlist-input"></input>
                    <img onClick={this.createPlaylist} className="create-event-playlist-arrow" src={RightArrow}></img>
                    <ProgressDots filled={2} total={3}/>
                </div>
            </div>
        );
    }
}

export default CreateEventPlaylist;