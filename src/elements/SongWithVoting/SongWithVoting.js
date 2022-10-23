import React from "react";
import './SongWithVoting.scss';
import UpvoteIcon from '../../parts/upvote.png';
import DownvoteIcon from '../../parts/downvote.png';

// props: albumart, name, artist
class SongWithVoting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: 0,
            voted: false,
        }
    }

    upvote() {
        this.setState(prevState => {
            return {
                vote: prevState.voted ? prevState.vote : prevState.vote + 1,
                voted: true
            };
        });
    }

    downvote() {
        this.setState(prevState => {
            return {
                vote: prevState.voted ? prevState.vote : prevState.vote - 1,
                voted: true
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
                    <img className="upvote" onClick={this.upvote.bind(this)} src={UpvoteIcon} alt="upvote" />
                    <p className="vote-count">{this.state.vote}</p>
                    <img className="downvote" onClick={this.downvote.bind(this)} src={DownvoteIcon} alt="downvote" />
                </div>
            </div>
        );
    }
}

export default SongWithVoting;