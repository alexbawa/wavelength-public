import IconTextButton from "../../elements/IconTextButton/IconTextButton";
import playIcon from "../../parts/play.png";
import musicIcon from "../../parts/music.png";
import searchIcon from "../../parts/search.png";
import React from "react";
import SpotifyInterface from "../../util/SpotifyInterface";
import SongForSearch from "../../elements/SongForSearch/SongForSearch";
import { suggestSong } from "../../util/firebase";
import './UserHome.scss';


class UserHome extends React.Component {
    constructor(props) {
        super(props);
        const params = new URLSearchParams(window.location.search);
        this.state = {
            spotifyToken: params.get("token"),
            searchTerm: null,
            searchResults: [],
        }

        this.updateSearch = this.updateSearch.bind(this);
        this.search = this.search.bind(this);
        this.renderSearchResults = this.renderSearchResults.bind(this);
        this.addRequest = this.addRequest.bind(this);
    }

    async addRequest(infoString) {
        let targetSongInfo = infoString.split("|")
        let result = await suggestSong(targetSongInfo[0],targetSongInfo[1],targetSongInfo[2],targetSongInfo[3], this.state.spotifyToken);
        if(result == "Success") {
            // CALEB add pop up here
            alert(`Successfully added ${targetSongInfo[1]} to requested songs.`)
            window.location.reload(false);
        }
    }

    async search() {
        if(this.state.searchTerm  != "") {
            let results = await SpotifyInterface.search(this.state.searchTerm, this.state.spotifyToken);
            this.setState({
                searchResults: results
            });
        }
    }

    updateSearch(event) {
        this.setState({
            searchTerm: event.target.value,
        })
        this.search();
    }

    renderSearchResults() {
        if(this.state.searchResults) {
            return this.state.searchResults.map(song => {
                return <SongForSearch key={song.uri} clickHandler={this.addRequest} uri={song.uri} name={song.name} artist={song.artist} albumart={song.coverArt}/>
            })
        }   
    }

    render() {
        let linkString = "/vote/?token=" + this.state.spotifyToken;
        return (
            <div className="container wrapper">
                <div className="search">
                    <h1 className="title">Search</h1>
                    <form >
                        <img className="search-icon" src={searchIcon} alt="search icon"/>
                        <input className="search-songs" onChange={this.updateSearch} placeholder="Suggest a song" autoComplete="off" />
                    </form>
                    <div className="search-results">
                        {this.renderSearchResults()}
                    </div>
                </div>
                <div className='other-actions'>
                    <IconTextButton className='queue' icon={playIcon} text="See queue" link="/queue" />
                    <IconTextButton className='vote' icon={musicIcon} text="Vote on songs" link={linkString} />
                </div>
            </div>
        );
    }
}

export default UserHome;