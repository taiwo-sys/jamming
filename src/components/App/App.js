import React, { useState } from "react";
// import logo from './logo.svg';
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";

const tracks = [
  {
    name: "Track1",
    artist: "Artist1",
    album: "Album1",
  },
  {
    name: "Track2",
    artist: "Artist2",
    album: "Album2",
  },
  {
    name: "Track3",
    artist: "Artist3",
    album: "Album3",
  },
];

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Track1",
      artist: "Artist1",
      album: "Album1",
    },
    {
      name: "Track2",
      artist: "Artist2",
      album: "Album2",
    },
    {
      name: "Track3",
      artist: "Artist3",
      album: "Album3",
    },
  ]);

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar Component --> */}

        <div className={styles["App-playlist"]}>
          {/* <!-- Add a SearcResults Component --> */}
          <SearchResults userSearchResults={searchResults} />
          {/* <!-- Add a Playlist Component --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
