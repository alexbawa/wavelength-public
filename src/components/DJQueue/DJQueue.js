import { Component } from 'react';
import BackButton from '../../elements/BackButton/BackButton.js';
import Song from '../../elements/Song/Song.js';
import testAlbumArt from '../../parts/testAlbum.jpg';
import './DJQueue.scss';

class DJQueue extends Component {
    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <BackButton class='back' link='/dashboard' />
                    <h1 class='section-title'>Queue</h1>
                </div>
                <div className='songs'>
                    {/* test song - delete later */}
                    {/* <Song albumart={testAlbumArt} name='Flashing Lights' artist='Kanye West' /> */}
                </div>
            </div>
        );
    }
}

export default DJQueue;