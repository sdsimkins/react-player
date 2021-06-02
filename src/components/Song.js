import React from "react";

const Song = ({isPlaying, currentSong}) => {
    return (
        <div className="song-container">
            <img class={`${isPlaying ? "song-active" : ""}`} alt={currentSong.name} src={currentSong.cover}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song;