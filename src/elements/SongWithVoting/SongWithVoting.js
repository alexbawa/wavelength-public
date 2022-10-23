import React from "react";
import './SongWithVoting.scss';
import UpvoteIcon from '../../parts/upvote.png';
import UpvoteIconFilled from '../../parts/upvotefilled.png';
import DownvoteIcon from '../../parts/downvote.png';
import DownvoteIconFilled from '../../parts/downvotefilled.png';

// props: albumart, name, artist
class SongWithVoting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: 0,
            voted: 0, // -1 for downvote, 1 for upvote, 0 for no vote yet
        }
    }

    upvote() {
        this.setState(prevState => {
            return {
                vote: prevState.voted == 1 ? prevState.vote-1 : prevState.vote + 1 - prevState.voted,
                voted: prevState.voted == 1 ? 0 : 1
            };
        });
    }

    downvote() {
        this.setState(prevState => {
            return {
                vote: prevState.voted == -1 ? prevState.vote+1 : prevState.vote - 1 - prevState.voted,
                voted: prevState.voted == -1 ? 0 : -1
            };
        });
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