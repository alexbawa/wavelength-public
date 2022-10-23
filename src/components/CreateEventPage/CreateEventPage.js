import React from "react";
import SpotifyInterface from "../../util/SpotifyInterface";
import ProgressDots from "../ProgressDots/ProgressDots";
import './CreateEventPage.scss';
import SpotifyLogo from "./spotify-logo.png";
import RightArrow from "../Homepage/right-arrow.png";
import {createEvent} from "../../util/firebase"


class CreateEventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: null
        }
        this.createPlaylist = this.createPlaylist.bind(this);
        this.getCode = this.getCode.bind(this);
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
        this.getCode()
    }

    async getCode() {
        let code = await createEvent(this.props.getPlaylistID(), this.props.getToken());
        this.setState({
            code,
        })
    }

    render() {
        if(this.props.getToken() && this.props.getPlaylistID()) {
            return (
                <div className="create-event-code-page">
                    <h2 className="create-event-code-title">Event Code</h2>
                    <p className="code-display">{this.state.code}</p>
                    <ProgressDots filled={3} total={3}/>
                </div>
            );
        } else if (this.props.getToken()) {
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
        } else {
            return (
                <div className="create-event-page">
                    <h2 className="create-event-title">Login to Spotify</h2>
                    <p className="create-event-subtitle">Time to authenticate - you will be redirected shortly.</p>
                    <img className="create-event-spotify-logo" src={SpotifyLogo}></img>
                    <ProgressDots filled={1} total={3}/>
                </div>
            );
        }
    }
}

export default CreateEventPage;