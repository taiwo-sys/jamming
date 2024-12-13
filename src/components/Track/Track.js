import React from "react";
import styles from "./Track.module.css";

function Track(props){

    const renderAction = () => <button className={styles["Track-action"]}>{props.isRemoval? "-" : "+"}</button>

    return (
        <div className={styles.Track}>
            <div className={styles["Track-information"]}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
        </div>
    )
}

export default Track;