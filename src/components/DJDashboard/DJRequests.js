import React from "react";
import BackButton from '../../elements/BackButton/BackButton.js';
import RequestedSong from '../../elements/RequestedSong/RequestedSong.js';
import testAlbumArt from '../../parts/testAlbum.jpg';
import "./DJRequests.scss"
import { getSuggestedSongs } from '../../util/firebase.js';
import Bell from "../../parts/Bell.png"



class DJRequests extends React.Component {
    constructor(props) {
        super(props);
        const params = new URLSearchParams(window.location.search);
        this.state = {
            spotifyToken: params.get("token"),
            suggested_songs: []
        }
    }

    async componentDidMount() {
        let results = await getSuggestedSongs(this.state.spotifyToken);
        this.setState({ suggested_songs: results });
    }

    renderVotingSongs() {
        return this.state.suggested_songs.map(song => {
            return <RequestedSong song_uri={song.id} albumart={song.album_art_link} name={song.track_name} artist={song.artist} vote_state={song.net_vote} />
        })

    }

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <BackButton className="back" link='/dashboard' />
                    <h1 className="section-title">Requests</h1>
                </div>
                <div className='songs'>
                    {this.renderVotingSongs()}
                    {/* <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' /> */}
                </div>
            </div>
        );
    }
}

export default DJRequests;