let accessToken;
const clientID = '595fd8a16aa643a0835c3159663e9350';
const baseURL = 'http://localhost:3000'
const redirectURI = baseURL + '/createEvent';

const SpotifyInterface = {
    async getToken() {
        if(accessToken) {
            return accessToken
        }

        const token = window.location.href.match(/access_token=([^&]*)/);
        const expiration = window.location.href.match(/expires_in=([^&]*)/);

        if(token && expiration) {
            accessToken = token[1];
            const expiresIn = Number(expiration[1]);
            window.setTimeout(() => {
                accessToken = ''
            }, expiresIn*1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = url;
            const token = window.location.href.match(/access_token=([^&]*)/);
            const expiration = window.location.href.match(/expires_in=([^&]*)/);

            if(token && expiration) {
                accessToken = token[1];
                const expiresIn = Number(expiration[1]);
                window.setTimeout(() => {
                    accessToken = ''
                }, expiresIn*1000);
            window.history.pushState('Access Token', null, '/');
            }
            return accessToken;
        }
    },

    async createPlaylist(name, token) {
        let headers = {Authorization: `Bearer ${token}`};
        let user_response = await fetch(`https://api.spotify.com/v1/me`,{headers});
        user_response = await user_response.json();

        let create_response = await fetch(`https://api.spotify.com/v1/users/${user_response.id}/playlists`, {
            headers,
            method: 'POST',
            body: JSON.stringify({name})
        })
        create_response = await create_response.json();

        // ID for Spotify playlist, used for requests to change playlist
        return create_response.id;
    },

    async addToPlaylist(playlistID, trackURI, token) {
        let headers = {Authorization: `Bearer ${token}`};

        let user_response = await fetch(`https://api.spotify.com/v1/me`,{headers});
        user_response = await user_response.json();

        // Add song @ trackURI to playlist @ playlistID
        await fetch(`https://api.spotify.com/v1/users/${user_response.id}/playlists/${playlistID}/tracks`, {
            headers,
            method: 'POST',
            body: JSON.stringify({uris: trackURI}),
        })
    },
   
    async search(terms, token) {
        let headers = {Authorization: `Bearer ${token}`};
        let response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${terms}`, {headers})
        response = await response.json();
        if(!response.tracks) {
            return [];
        } else {
            // Map retrieved tracks to useful objects for frontend
            return response.tracks.items.map(track => {
                return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    coverArt: track.album.images[0].url,
                    uri: track.uri,
                }
            })
        }
    },

    // Gets info for current playing song
    async getCurrentSong(token) {
        let headers = {Authorization: `Bearer ${token}`};
        let player_response = await fetch(`https://api.spotify.com/v1/me/player`,{headers});
        player_response = await player_response.json();

        if(!player_response.is_active) {
            return {};
        } else {
            return {
                title: player_response.item.name,
                artist: player_response.item.artist[0].name,
                coverArt: player_response.album.images[0].url,
            }
        }
    }
}

export default SpotifyInterface;