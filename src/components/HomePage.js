import React from 'react'
import {useNavigate} from 'react-router-dom'
import tic from '../images/tic-1.svg'
import tic1 from '../images/tic-2.svg'
import './HomePage.css'
import { useContext } from 'react';
import {MyContext} from '../context/MyContext'
import {useEffect} from 'react'
import {useState} from 'react';
import click from "../audio/button-click.mp3";

const HomePage = () => {
  const {darkMode,setDarkMode}=useContext(MyContext)
    const clickAudio = new Audio(click);

  useEffect(()=>{
    if(darkMode!==''){
      setBody('body1')    
  }else{
    setBody('')
  }
  },[darkMode])
  const Navigate=useNavigate()
  const [body,setBody]=useState('')
  
  function handleOnClick(){
    clickAudio.play();
    Navigate("/playerLobby")
  }
  return (
    <div className={`${body}`}>
      <p className="text-center welocme-text">Welcome to Tic toc toe online</p>
      <img src={tic1} alt="" className="home-img" />
      {/* <p className="text-center fs-3">Click on play game to play the game </p> */}
      <div className="text-center">
        <button className="btn-1" onClick={handleOnClick}>
          Play Game
        </button>
      </div>
    </div>
  );
}

export default HomePage