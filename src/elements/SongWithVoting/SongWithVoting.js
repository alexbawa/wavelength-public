import React from "react";
import './SongWithVoting.scss';
import UpvoteIcon from '../../parts/upvote.png';
import UpvoteIconFilled from '../../parts/upvotefilled.png';
import DownvoteIcon from '../../parts/downvote.png';
import DownvoteIconFilled from '../../parts/downvotefilled.png';
import { voteSong } from "../../util/firebase";

// props: albumart, name, artist
class SongWithVoting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: this.props.vote_state,
            voted: false, 
        }
    }

    upvote() {
        if(!this.state.voted) {
            voteSong(this.props.song_uri, 1);
            this.setState({
                vote: this.state.vote+1,
                voted: true
            })
        }
    }

    downvote() {
        if(!this.state.voted) {
            voteSong(this.props.song_uri, -1);
            this.setState({
                vote: this.state.vote-1,
                voted: true
            })
        }
    }
    render() {
        return (
            <div className="song-with-voting">
                <img src={this.props.albumart} alt="Album cover" />
                <div className="song-info">
                    <h3 className="title">{this.props.name}</h3>
                    <p className="artist">{this.props.artist}</p>
                </div>
                <div className="voting">
                    <img className="upvote" onClick={this.upvote.bind(this)} src={this.state.vote == 1 ? UpvoteIconFilled : UpvoteIcon} alt="upvote" />
                    <p className="vote-count">{this.state.vote}</p>
                    <img className="downvote" onClick={this.downvote.bind(this)} src={this.state.vote == -1 ? DownvoteIconFilled : DownvoteIcon} alt="downvote" />
                </div>
            </div>
        );
    }
}

export default SongWithVoting;