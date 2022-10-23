import React from "react";
import './RequestedSong.scss';
import UpvoteIcon from '../../parts/upvote.png';
import UpvoteIconFilled from '../../parts/upvotefilled.png';
import addIcon from '../../parts/add-icon.png';
import removeIcon from '../../parts/remove-icon.png';
import Bell from '../../parts/Bell.png'

// props: albumart, name, artist
class RequestedSong extends React.Component {
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
            <div className="song-with-voting" onClick={this.props.onClick}>
                <img src={this.props.albumart} alt="Album cover" />
                <div className="song-info">
                    <h3 className="title">{this.props.name}</h3>
                    <p className="artist">{this.props.artist}</p>
                </div>
                <div className="voting">
                    <p className="vote-count">{this.state.vote}</p>
                    <img onClick={() => {}} src={addIcon}/>
                    <img className="remove" onClick={() => {}} src={Bell} alt="" />
                  
                </div>
            </div>
        );
    }
}

export default RequestedSong;