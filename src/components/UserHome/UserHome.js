import IconTextButton from "../../elements/IconTextButton/IconTextButton";
import playIcon from "../../parts/play.png";
import musicIcon from "../../parts/music.png";
import React from "react";

class UserHome extends React.Component {
    handleSearch(event) {
        event.preventDefault();
        console.log("searching...");
    }

    render() {
        return (
            <div className="container">
                <h1>User Home</h1>
                <form onSubmit={this.handleSearch}>
                    <input className="search-songs" onChange={null/* TODO*/} placeholder="Suggest a song" />
                </form>

                <IconTextButton icon={playIcon} text="See queue" link="/queue" />
                <IconTextButton icon={musicIcon} text="Vote on songs" link="/vote" />
            </div>
        );
    }
}

export default UserHome;