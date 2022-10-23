import { Component } from 'react';
import BackButton from '../../elements/BackButton/BackButton.js';
import SongWithVoting from '../../elements/SongWithVoting/SongWithVoting.js';
import testAlbumArt from '../../parts/testAlbum.jpg';
import { getSuggestedSongs } from '../../util/firebase.js';
import './Voting.scss';

class Voting extends Component {

    constructor(props) {
        super(props);
        const params = new URLSearchParams(window.location.search);
        this.state = {
            spotifyToken: params.get("token"),
            suggested_songs: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        let results = await getSuggestedSongs(this.state.spotifyToken);
        this.setState({suggested_songs: results});
    }



    renderVotingSongs() {
        return this.state.suggested_songs.map(song => {
            return <SongWithVoting song_uri={song.id} albumart={song.album_art_link} name={song.track_name} artist={song.artist} vote_state={song.net_vote}/>
        })
    
    }

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <BackButton className="back" link='/userHome' />
                    <h1 onClick={() => this.getData()} className="title">Voting</h1>
                </div>
                <div className='songs'>
                    {this.renderVotingSongs()}
                </div>
            </div>
        );
    }
}

export default Voting;