import React from "react";
import styles from "./Track.module.css";

function Track(props){

    // const renderAction = () => <button className={styles["Track-action"]} >{props.isRemoval? "-" : "+"}</button>
    const renderAction = () => {
        if(props.isRemoval){
            return(
                <button className={styles["Track-action"]} onClick={passTrack}>+</button>
            );
        }else{
            return (
                <button className={styles["Track-action"]}>-</button>
            );
        }
    }
    const passTrack = () => props.onAdd(props.track);

    return (
        <div className={styles.Track}>
            <div className={styles["Track-information"]}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;