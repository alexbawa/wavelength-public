import React from "react";
import './SongForSearch.scss';

// props: albumart, name, artist
class SongForSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        let info = this.props.uri+"|"+this.props.name+"|"+this.props.artist+"|"+this.props.albumart
        this.props.clickHandler(info);
    }

    render() {
        return (
            <div onClick={this.handleClick} className="song">
                <img src={this.props.albumart} alt="Album cover" />
                <div className="song-info">
                    <h3 className="title">{this.props.name}</h3>
                    <div>
                        <p className="artist">{this.props.artist}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SongForSearch;