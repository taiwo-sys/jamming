import React from "react";
import styles from "./Playlist.module.css";

function Playlist(){

    return (
        <div className={styles.Playlist}>
            <input value="New Playlist" />
            { /**Add a tracklist component*/}
            <button className={styles["Playlist-save"]}>
                SAVE TO SPOTIFY
            </button>
        </div>
    )
}

export default Playlist;