import IconTextButton from "../../elements/IconTextButton/IconTextButton";
import playIcon from "../../parts/play.png";
import musicIcon from "../../parts/music.png";
import searchIcon from "../../parts/search.png";
import React from "react";
import './UserHome.scss';

class UserHome extends React.Component {
    handleSearch(event) {
        event.preventDefault();
        console.log("searching...");
    }

    render() {
        return (
            <div className="container wrapper">
                <div className="search">
                    <h1 className="title">Search</h1>
                    <form onSubmit={this.handleSearch}>
                        <img className="search-icon" src={searchIcon} alt="search icon"/>
                        <input className="search-songs" onChange={null/* TODO*/} placeholder="Suggest a song" autoComplete="off" />
                    </form>
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