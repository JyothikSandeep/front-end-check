import React from "react";
import {useNavigate } from "react-router-dom";
// import io from 'socket.io-client'
// import axios from "axios";
import { useState } from "react";
const PlayerLobby = () => {
  const [name, setName] = useState("");
  // const [d, setD] = useState();

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

    Navigate("/playGame", { state: { name } });
  }
  return (
    <div>
      {/* {console.log(d)} */}
      <h1 className="text-center mt-4">Player Lobby</h1>
      {/* <p className='fs-3 text-center text-primary mt-3  '>Enter Player name</p> */}
      <div
        className="text-center"
        style={{ display: "flex", justifyContent: "center", margin: "0 auto" }}
      >
        <input
          type="text"
          className="form-control w-25  mt-5 text-center"
          placeholder="Enter Player Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-info fs-3" onClick={onHandleClick}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default PlayerLobby;
