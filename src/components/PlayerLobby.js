import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
const PlayerLobby = () => {
  const Navigate=useNavigate()
  function onHandleClick(){
    Navigate("/playgame")

  }
  return (
    <div>
      <h1 className='text-center mt-4'>Player Lobby</h1>
      {/* <p className='fs-3 text-center text-primary mt-3  '>Enter Player name</p> */}
      <div className='text-center' style={{display:"flex",justifyContent:"center", margin:"0 auto"}}>

      <input type="text" className='form-control w-25  mt-5 text-center'  placeholder='Enter Player Name' />
      </div>
      <div className='text-center mt-5'>

      <button className='btn btn-info fs-3' onClick={onHandleClick}>Start Game</button>
      </div>
    </div>
  )
}

export default PlayerLobby