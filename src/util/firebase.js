// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection, getDocs, updateDoc, doc, getDoc} from '@firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ZmO0TS0nozusBjAj7Z_M-0dO02OWJDQ",
  authDomain: "wavelength-366319.firebaseapp.com",
  projectId: "wavelength-366319",
  storageBucket: "wavelength-366319.appspot.com",
  messagingSenderId: "897148093215",
  appId: "1:897148093215:web:e470bba8c665974889662a",
  measurementId: "G-G02PV67PBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


var eventID = "";


export async function joinEvent(join_code, phone_number) {
  const ref = collection(firestore, "Events");
  const docsSnap = await getDocs(ref);
  var tokenRes = "";
  docsSnap.forEach(doc => {
    if (doc.data().join_code == join_code){
      let phone_numbers = doc.data().phone_numbers
      phone_numbers.push(phone_number);
      try {
        updateDoc(doc.ref,{phone_numbers: phone_numbers})
      } catch (e) {
        console.log(e);
      }
      tokenRes = doc.data().spotify_token;
      eventID = doc.id
    } else {
      console.log(join_code + "!=" + doc.data().join_code);
    }
})
  return tokenRes;
}



export async function createEvent(playlist_id, spotify_token) {
  const ref = collection(firestore, "Events");
  let join_code = (Math.floor(Math.random() * 100000) + 100000).toString().substring(1);
  let data = {
    join_code: join_code,
    playlist_id: playlist_id,
    spotify_token: spotify_token,
    suggested_songs: [],
    phone_numbers: [],
    hot_vote: ""
  }

  try {
    addDoc(ref, data).then((res) => eventID = res.id);
  } catch(e){
    console.log(e);
  }

  return join_code;
}


export async function suggestSong(id, track_name, artist, album_art_link, token){
  const ref = collection(firestore, "Events");
  const docsSnap = await getDocs(ref);
  var docRef = null;
  var suggested_songs = [];
  docsSnap.forEach(doc => {
    if (doc.data().spotify_token == token){
      suggested_songs = doc.data().suggested_songs;
      docRef = doc.ref;
      eventID = doc.id
    }
})


  suggested_songs.push({id: id, track_name: track_name, artist: artist, album_art_link: album_art_link, net_vote: 1});
  
  try {
    updateDoc(docRef,{suggested_songs: suggested_songs})
  } catch (e) {
    console.log(e);
  }

  return "Success"
}

export async function voteSong(song_id, vote) {
  const docRef = doc(firestore,"Events", eventID)
  var suggested_songs = [];


  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    suggested_songs = docSnap.data().suggested_songs;
  } else {
    console.log("No such document!");
  }

  for (var i = 0; i < suggested_songs.length; i++){
    if (suggested_songs[i].id === song_id){
      suggested_songs[i].net_vote += vote;
    }
  }

  try {
    updateDoc(docRef,{suggested_songs: suggested_songs})
  } catch (e) {
    console.log(e);
  }
}

export async function getSuggestedSongs(token){
  const ref = collection(firestore, "Events");
  const docsSnap = await getDocs(ref);
  var docRef = null;
  var suggested_songs = [];
  docsSnap.forEach(doc => {
    if (doc.data().spotify_token == token){
      suggested_songs = doc.data().suggested_songs;
      docRef = doc.ref;
      eventID = doc.id
    }
})
return suggested_songs;
}