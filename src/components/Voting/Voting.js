import { Component } from 'react';
import BackButton from '../../elements/BackButton/BackButton.js';
import SongWithVoting from '../../elements/SongWithVoting/SongWithVoting.js';
import testAlbumArt from '../../parts/testAlbum.jpg';

class Voting extends Component {
    render() {
        return (
            <div className='container'>
                <BackButton link='/userHome'/>
                <h1>Voting</h1>
                <SongWithVoting albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lights' artist='Kanye West'/>
            </div>
        );
    }
}

export default Voting;