import React from "react";
import './RequestedSong.scss';
import UpvoteIcon from '../../parts/upvote.png';
import UpvoteIconFilled from '../../parts/upvotefilled.png';
import addIcon from '../../parts/add-icon.png';
import removeIcon from '../../parts/remove-icon.png';
import Bell from '../../parts/Bell.png'

// props: albumart, name, artist
class RequestedSong extends React.Component {
    render() {
        return (
            <div className="song-with-voting" onClick={this.props.onClick}>
                <img src={this.props.albumart} alt="Album cover" />
                <div className="song-info">
                    <h3 className="title">{this.props.name}</h3>
                    <p className="artist">{this.props.artist}</p>
                </div>
                <div className="voting">
                    <img className="add" onClick={() => {}} src={addIcon} alt="add"/>
                    <img className="remove" onClick={() => {}} src={removeIcon} alt="remove"/>
                    <img className="bell" onClick={() => { }} src={Bell} alt="bell" />

                </div>
            </div>
        );
    }
}

export default RequestedSong;