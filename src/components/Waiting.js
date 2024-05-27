import React from 'react'
import { useLocation } from 'react-router-dom'
const Waiting = () => {
    const location=useLocation()
    console.log(location.state)
    console.log(location.socket)
    // const socketIds=[]
    // socketIds.push(location.state);
  return (
    <div>
        {/* {console.log(socketIds)} */}
        <h1 className='text-center fs-2 mt-4 text-primary'>Waiting for other players to join...</h1>
    </div>
  )
}

export default Waiting