import React from "react";
import SpotifyInterface from "../../util/SpotifyInterface";
import ProgressDots from "../ProgressDots/ProgressDots";
import './CreateEventPage.scss';
import SpotifyLogo from "./spotify-logo.png";
import RightArrow from "../Homepage/right-arrow.png";
import Announce from "./announce.png";
import Display from "./display.png";
import Spread from "./spread.png";
import {createEvent} from "../../util/firebase"
const coreURL = "http://localhost:3000";


class CreateEventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: null,
        }
        this.createPlaylist = this.createPlaylist.bind(this);
        this.getCode = this.getCode.bind(this);
        this.renderCode = this.renderCode.bind(this);
        this.toDJDashboard = this.toDJDashboard.bind(this);
    }

    async componentDidMount() {
        let token = await SpotifyInterface.getToken();
        this.props.setToken(token);
    }

    async createPlaylist(e) {
        e.preventDefault();
        let playlistName = document.getElementById("playlist-name").value;
        let playlistID = await SpotifyInterface.createPlaylist(playlistName, this.props.getToken());
        this.props.setPlaylistID(playlistID);
        setTimeout(this.getCode, 5000);
    }

    async getCode() {
        let code = await createEvent(this.props.getPlaylistID(), this.props.getToken());
        this.setState({
            code,
        })
    }

    toDJDashboard() {
        console.log("Event set up! Let's go to the dashboard!")
        window.location = coreURL + "/dashboard";
    }

    renderCode() {
        let digits = [];
        if (this.state.code != null) {
            let codeAsString = String(this.state.code);
            for (let i = 0; i < 5; i++) {
                digits.push(
                    <p key={i} className="digit">{codeAsString[i]}</p>
                )
            }
        }
        return digits;
    }

    render() {
        if (this.props.getToken() && this.props.getPlaylistID()) {
            return (
                <div className="create-event-code-page">
                    <h2 className="create-event-code-title">Code</h2>
                    <div className="code-display">
                        {this.renderCode()}
                    </div>
                    <p className="code-subtitle">Distribute your code:</p>
                    <div className="code-steps">
                        <div className="code-step">
                            <img className="code-step-icon" src={Announce} />
                            <p className="code-step-text">Announce it to the crowd</p>
                        </div>

                        <div className="code-step">
                            <img className="code-step-icon" src={Display} />
                            <p className="code-step-text">Display it on a screen</p>
                        </div>

                        <div className="code-step">
                            <img className="code-step-icon" src={Spread} />
                            <p className="code-step-text">Spread it by word of mouth</p>
                        </div>
                    </div>
                    <img onClick={this.toDJDashboard} className="dashboard-arrow" src={RightArrow}></img>
                    <ProgressDots className="dots" filled={3} total={3} />
                </div>
            );
        } else if (this.props.getToken()) {
            return (
                <div className="create-event-playlist-page">
                    <h2 className="create-event-playlist-title">Playlist name</h2>
                    <div className="centered-box">
                        <input id="playlist-name" className="create-event-playlist-input" placeholder='Enter playlist name'></input>
                        <img onClick={this.createPlaylist} className="create-event-playlist-arrow" src={RightArrow}></img>
                        <ProgressDots className="dots" filled={2} total={3} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="create-event-page">
                    <h2 className="create-event-title">Login to Spotify</h2>
                    <p className="create-event-subtitle">Time to authenticate - you will be redirected shortly.</p>
                    <img className="create-event-spotify-logo" src={SpotifyLogo}></img>
                    <ProgressDots className="dots" filled={1} total={3} />
                </div>
            );
        }
    }
}

export default CreateEventPage;