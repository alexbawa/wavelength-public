import { Component } from 'react';
import BackButton from '../../elements/BackButton/BackButton.js';
import Song from '../../elements/Song/Song.js';
import testAlbumArt from '../../parts/testAlbum.jpg';
import './Queue.scss';

class Queue extends Component {
    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <BackButton class='back' link='/userHome' />
                    <h1 class='title'>Queue</h1>
                </div>
                <div className='songs'>
                    {/* test song - delete later */}
                    <Song albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                </div>
            </div>
        );
    }
}

export default Queue;