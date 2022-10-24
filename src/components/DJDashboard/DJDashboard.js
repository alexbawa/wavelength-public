import React from "react";
import ProgressDots from "../ProgressDots/ProgressDots";
import RightArrow from "../Homepage/right-arrow.png";
import SpotifyInterface from "../../util/SpotifyInterface";
import {Link, Navigate} from "react-router-dom"
import playIcon from "../../parts/play.png";
import musicIcon from "../../parts/music.png";
import searchIcon from "../../parts/search.png";
import IconTextButton from "../../elements/IconTextButton/IconTextButton";
import CurrentSong from "../../elements/CurrentSong/CurrentSong";

class DJDashboard extends React.Component {
    
    constructor(props) {
        const params = new URLSearchParams(window.location.search);
        super(props);
        this.state = {
            spotifyToken: params.get("token"),
            playlistID: params.get("id"),
            currentSong: null,
        }

        this.renderCurrentSong = this.renderCurrentSong.bind(this);
    }

    async componentDidMount() {
        let current = SpotifyInterface.getCurrentSong(this.state.spotifyToken);
        this.setState({
            currentSong: current
        });
        setInterval(
            () => {
                let current = SpotifyInterface.getCurrentSong(this.state.spotifyToken);
                this.setState({
                    currentSong: current
                });
            }, 20000
        )
    }

    renderCurrentSong() {
        if(this.state.currentSong) {
            return <CurrentSong coverArt={this.state.currentSong.coverArt} name={this.state.currentSong.title} artist={this.state.currentSong.artist}/>
        } else {
            return <div></div>
        }
        
    }
    render() {
        console.log(this.state.spotifyToken);
        var link = "/requests/?token="+this.state.spotifyToken+"&id="+this.state.playlistID;
        return (
            <div className="container wrapper">
                <div className="search">
                    <h1 className="title">Dashboard</h1>
                    {/* <div>
                        {this.renderCurrentSong()}
                    </div> */}
                </div>
                <div className='other-actions'>
                    <IconTextButton className='queue' icon={playIcon} text="See queue" link="/djqueue" />
                    <IconTextButton className='requests' icon={musicIcon} text="See requests" link={link} />
                </div>
            </div>
        );
    }
}

export default DJDashboard;