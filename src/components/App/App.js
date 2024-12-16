import React, { useState } from "react";
// import logo from './logo.svg';
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const demoTracks = [
  { name: "Track1", artist: "Artist1", album: "Album1", id:1 },
  { name: "Track2", artist: "Artist2", album: "Album2", id:2 },
  { name: "Track3", artist: "Artist3", album: "Album3", id:3 },
];
const trackPlaylist = [
  { name: "Track4", artist: "Artist4", album: "Album4", id:4 },
  { name: "Track5", artist: "Artist5", album: "Album5", id:5 },
  { name: "Track6", artist: "Artist6", album: "Album6", id:6 },
];

function App() {
  const [searchResults, setSearchResults] = useState(demoTracks);
  const [playlistName, setPlaylistName] = useState("Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState(trackPlaylist);
  
  const addTrack = (track) => {
    const existingTrack = playlistTracks.find(t => t.id === track.id);
    // const newTrack = playlistTracks.concat(track);
    if(existingTrack){
      alert("Track already exists")
    }else{
      setPlaylistTracks((prev) => [...prev, track]);
    }
  }

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar Component --> */}

        <div className={styles["App-playlist"]}>
          {/* <!-- Add a SearcResults Component --> */}
          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
          {/* <!-- Add a Playlist Component --> */}
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
        </div>
      </div>
    </div>
  );
}

export default App;
