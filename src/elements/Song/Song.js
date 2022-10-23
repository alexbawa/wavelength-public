import React from "react";
import './Song.scss';

// props: albumart, name, artist
class Song extends React.Component {
    render() {
        return (
            <div className="song">
                <img src={this.props.albumart} alt="Album cover" />
                <div className="song-info">
                    <h3 className="title">{this.props.name}</h3>
                    <p className="artist">{this.props.artist}</p>
                </div>
            </div>
        );
    }
}

export default Song;