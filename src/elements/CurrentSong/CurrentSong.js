import React from "react";
import './CurrentSong.scss';

class CurrentSong extends React.Component {
    render() {
        return (
            <div className="current-song">
                <img className="current-song-art" src={this.props.coverArt} />
                <p className="current-song-caption"><span>Playing now</span></p>
                <h3 className="current-song-title">{this.props.name}</h3>
                <p className="current-song-artist">{this.props.artist}</p>
            </div>
        );
    }
}

export default CurrentSong;