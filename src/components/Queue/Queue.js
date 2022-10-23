import { Component } from 'react';
import BackButton from '../../elements/BackButton/BackButton.js';
import Song from '../../elements/Song/Song.js';
import testAlbumArt from '../../parts/testAlbum.jpg';

class Queue extends Component {
    render() {
        return (
            <div className='container'>
                <BackButton link='/userHome'/>
                <h1>Queued</h1>
                {/* test song - delete later */}
                <Song albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West'/>
            </div>
        );
    }
}

export default Queue;