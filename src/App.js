import logo from './logo.svg';
import './App.css';
import { createEvent, joinEvent, suggestSong, voteSong } from './firebase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          createEvent("spotify_playlist_id", "spotify_token").then((res) => {
            console.log(res);
          })}
          }
        >Create</button>
        <button onClick={() => {
          joinEvent("7112", "6094805359").then((res) => {
            console.log(res);
          })}
          }
        >Join</button>
        <button onClick={() => {
          suggestSong("track_id","Fireball", "Pitbull", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTM7pIhi5YkkNsLK9YPJNn18KQWsotoHyGgZRYkvJNAHHDXgFxQ").then((res) => {
            console.log(res);
          })}
          }
        >Suggest Fireball by Pitbull</button>

        <button onClick={() => {
          voteSong("track_id", 1).then((res) => {
            console.log(res);
          })}
          }
        >Upvote Fireball by Pitbull</button>

      </header>
    </div>
  );
}

export default App;
