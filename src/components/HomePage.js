import React from 'react'
import {useNavigate} from 'react-router-dom'
const HomePage = () => {
  const Navigate=useNavigate()
  function handleOnClick(){
    Navigate("/playerLobby")
  }
  return (
    <div>

      <p className='text-center fs-1 mt-4  text-primary '>Welcome to Tic toc toe game</p>
      <p className='text-center fs-3'>Click on play game to play the game </p>
      <div className='text-center'>

      <button className='btn btn-outline-info mt-5 fs-1' onClick={handleOnClick}>Play Game</button>
      </div>
    </div>
  )
}

export default HomePage