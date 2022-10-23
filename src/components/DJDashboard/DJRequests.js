import React from "react";
import BackButton from '../../elements/BackButton/BackButton.js';
import RequestedSong from '../../elements/RequestedSong/RequestedSong.js';
import testAlbumArt from '../../parts/testAlbum.jpg';
import "./DJRequests.scss"
import Bell from "../../parts/Bell.png"



class DJRequests extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <BackButton className="back" link='/dashboard' />
                    <h1 className="title">Requests</h1>
                </div>
                <div className='songs'>

                    <RequestedSong onClick={() => console.log("JIKLJF")} albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
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
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                    <RequestedSong albumart={testAlbumArt} name='Flashing Lights Flashing Lights Flashing Lightsssssssssss' artist='Kanye West' />
                </div>
            </div>
        );
    }
}

export default DJRequests;