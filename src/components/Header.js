import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import img from "../images/img.png";
import "./Header.css";
import { CiLight } from "react-icons/ci";
// import useSound from "use-sound";
// import backgroundMusic from "../audio/game-music.mp3"
// import { TbMusicOff } from "react-icons/tb";
import { PiMusicNotesDuotone } from "react-icons/pi";
import {useState} from 'react'
import { MdNightlight } from "react-icons/md";
import { TbMusicOff } from "react-icons/tb";
import {MyContext} from '../context/MyContext'
import { useContext } from "react";
import Sound from "./Sound";
// import background from "./audio/game-music.mp3";
// import background from "../audio/game-music.mp3"
// import { useEffect } from "react";
import click from "../audio/button-click.mp3"
const Header = () => {
  // const audio = new Audio(background);
  // audio.loop = true;
  // useEffect(()=>{

  //   audio.play();
  // },[])
  // const [playSound] = useSound(backgroundMusic);
  // const [lightMode,setLightMode]=useState('')
  // const [darkMode,setDarkMode]=useState('')
  const clickAudio=new Audio(click)
  console.log(clickAudio)
  const [lightImage,setLightImage]=useState('');
  const [soundOn,setSoundon]=useState('');
  const [textColor1,setTextColor1]=useState('color-1')
  const { darkMode, setDarkMode, setIsPlaying } = useContext(MyContext);
  // console.log(darkMode,setDarkMode)
  // cosnt []
  function handleDarkMode(){
    clickAudio.play()
    if(darkMode===''){
      setDarkMode('dark-mode')
    }
    else{
      setDarkMode('')
    }
    if(lightImage===''){
      setLightImage('dark')
    }
    if (textColor1 === "color-1") {
      setTextColor1("color-2");
    } else {
      setTextColor1("color-1");
    }
  }
  function handleSoundMode(){
    clickAudio.play();
    if(soundOn===""){
      setSoundon("sound-on");
      setIsPlaying("")
    }
    else{
      setSoundon('');
      setIsPlaying("sound-on");
    }
    
  }
  
  return (
    <div>
      <Sound></Sound>
      <div className={`header-align ${darkMode} `}>
        <div>
          <Link class="logo-text" to="/">
            <img className="logo-img" src={img} alt="not available" />
            Tic Tac Toe
          </Link>
        </div>

        <div className="btn-align">
          <Link
            class={` ${textColor1}`}
            to={"/"}
            style={{
              textDecoration: "none",
              marginRight: 20,
            }}
            onClick={() => clickAudio.play()}
          >
            Home
          </Link>

          <Link
            class={`${textColor1}`}
            to={"/playerLobby"}
            style={{
              textDecoration: "none",
              marginRight: 20,
            }}
            onClick={() => clickAudio.play()}
          >
            PlayGame
          </Link>
        </div>
        <div className="day-night">
          {darkMode === "" ? (
            <button className="dayandnight" onClick={handleDarkMode}>
              <CiLight size={40} />
            </button>
          ) : (
            <button className="dayandnight" onClick={handleDarkMode}>
              <MdNightlight size={40} />
            </button>
          )}
          {soundOn === "" ? (
            <button className="dayandnight" onClick={handleSoundMode}>
              <PiMusicNotesDuotone size={40} />
            </button>
          ) : (
            <button className="dayandnight" onClick={handleSoundMode}>
              <TbMusicOff size={40} />
            </button>
          )}

          {/* <button className="dayandnight">
            <PiMusicNotesDuotone size={40} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
