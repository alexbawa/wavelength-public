import React from "react";
import ProgressDots from "../ProgressDots/ProgressDots";
import RightArrow from "../Homepage/right-arrow.png";
import SpotifyInterface from "../../util/SpotifyInterface";
import {Link, Navigate} from "react-router-dom"


class DJDashboard extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <div className="create-event-playlist-page">
                <button>Queue</button>
                <button><Link to="/requests">Request</Link></button>
            </div>
        );
    }
}

export default DJDashboard;