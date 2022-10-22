import IconTextButton from "../../elements/IconTextButton/IconTextButton";
import playIcon from "../../parts/play-button-round-icon.png";
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
    
                <IconTextButton icon={playIcon} text="Play" />
            </div>
        );
    }
}

export default UserHome;