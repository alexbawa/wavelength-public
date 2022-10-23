import React from "react";
import SpotifyInterface from "../../util/SpotifyInterface";
import ProgressDots from "../ProgressDots/ProgressDots";
import './CreateEventPage.scss';
import SpotifyLogo from "./spotify-logo.png";


class CreateEventPage extends React.Component {
    async componentDidMount() {
        setTimeout(async () => {
            let token = await SpotifyInterface.getToken();
            this.props.setToken(token);
            window.location = "http://localhost:3000/createEventCode"
        }, 2500)
    }

    render() {
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

export default CreateEventPage;