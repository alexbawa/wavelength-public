import { Component } from 'react';
import BackButton from '../../elements/BackButton/BackButton.js';
import SongWithVoting from '../../elements/SongWithVoting/SongWithVoting.js';
import testAlbumArt from '../../parts/testAlbum.jpg';
import './Voting.scss';

class Voting extends Component {
    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <BackButton className="back" link='/userHome' />
                    <h1 className="title">Voting</h1>
                </div>
                <div className='songs'>
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                </div>
            </div>
        );
    }
}

export default Voting;