// import React from 'react'
import React, { useState, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";
import background from "../audio/game-music.mp3";

const Sound = () => {
  const { playing } = useContext(MyContext);
//   console.log(audio)
 const [audio, setAudio] = useState(null);
  useEffect(()=>{
      setAudio(new Audio(background));
      if(playing==='' && audio!==null){
          audio.play().catch((error) => {
        audio.loop = true;
          console.error("Audio playback failed:", error);
        });;
        }
    else if(audio!==null){
        audio.pause();
        audio.currentTime = 0;
    }
  },[playing])
  return <div>

  </div>;
}

export default Sound