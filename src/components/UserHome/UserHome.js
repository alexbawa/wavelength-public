import IconTextButton from "../../elements/IconTextButton/IconTextButton";
import playIcon from "../../parts/play.png";
import musicIcon from "../../parts/music.png";
import searchIcon from "../../parts/search.png";
import React from "react";
import './UserHome.scss';
import SpotifyInterface from "../../util/SpotifyInterface";
import Song from "../../elements/Song/Song";

class UserHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: null,
            searchResults: [],
        }

        this.updateSearch = this.updateSearch.bind(this);
        this.search = this.search.bind(this);
        this.renderSearchResults = this.renderSearchResults.bind(this);
    }
    
    async search() {
        if(this.state.searchTerm) {
            let results = await SpotifyInterface.search(this.state.searchTerm, );
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
        return this.state.searchResults.map(song => {
            return <Song name={song.name} artist={song.artist} albumart={song.coverart}/>
        })
    }

    render() {
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
                    <IconTextButton className='vote' icon={musicIcon} text="Vote on songs" link="/vote" />
                </div>
            </div>
        );
    }
}

export default UserHome;