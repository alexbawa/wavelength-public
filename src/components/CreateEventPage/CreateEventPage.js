import React from "react";
import SpotifyInterface from "../../util/SpotifyInterface";
import ProgressDots from "../ProgressDots/ProgressDots";
import './CreateEventPage.scss';


class CreateEventPage extends React.Component {
    async componentDidMount() {
        setTimeout(async () => {
            let token = await SpotifyInterface.getToken();
            this.props.setToken(token);
        }, 2000)
    }

    render() {
        return (
            <div className="create-event-page">
                <h2 className="create-event-title">Login to Spotify</h2>
                <p className="create-event-subtitle">Time to authenticate - you will be redirected shortly.</p>
                <img className="create-event-spotify-logo" src=""></img>
                <ProgressDots filled={1} total={3}/>
            </div>
        );
    }
}

export default CreateEventPage;