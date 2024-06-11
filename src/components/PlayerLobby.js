import React from "react";
import {useNavigate } from "react-router-dom";
// import io from 'socket.io-client'
// import axios from "axios";
import click from "../audio/button-click.mp3";

import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { useEffect } from "react";
import './PlayerLobby.css'
const PlayerLobby = () => {
  const [name, setName] = useState("");
      const clickAudio = new Audio(click);

  // const [d, setD] = useState();
  const { darkMode } = useContext(MyContext);
  useEffect(() => {
    if (darkMode !== "") {
      setBody("body1");
    } else {
      setBody("");
    }
  }, [darkMode]);
    const [body, setBody] = useState("");


  const Navigate = useNavigate();
  function onHandleClick() {
    // const socket = io.connect("http://localhost:4000");
    // console.log(socket)
    // console.log(name)

    // axios
    // .get("http://localhost:4000/socket_connect")
    // .then((d) => {
    //   //  console.log(d);
    // });
    // socket.emit("check_for_palyers",{name});
      clickAudio.play();

    Navigate("/playGame", { state: { name } });
  }
  return (
    <div className={`${body}`}>
      {/* {console.log(d)} */}
      <h1 className="text-center playerLobbyText ">Player Lobby</h1>
      {/* <p className='fs-3 text-center text-primary mt-3  '>Enter Player name</p> */}
      <div
        className="text-center"
        style={{ display: "flex", justifyContent: "center", margin: "0 auto" }}
      >
        <input
          type="text"
          className="text-control  mt-4 text-center"
          placeholder="Enter Player Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button className="btn-1" onClick={onHandleClick}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default PlayerLobby;
