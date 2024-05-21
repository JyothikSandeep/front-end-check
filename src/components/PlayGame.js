import React from 'react'
import './PlayGame.css'
import image from '../images/img-4.png'
const PlayGame = () => {
  return (
    <div>
      <div className="player-box">
        {/* <img src={image} alt="" /> */}
        <div className="first-column">
          <div className="row m-2 ">
            <div
              className="col-sm player-btn"
             
            ></div>
            <div
              className="col-sm player-btn"
             
            ></div>
            <div
              className="col-sm player-btn"
              
            ></div>
          </div>
        </div>
        <div className="third-column">
          <div className="row m-2 ">
            <div
              className="col-sm player-btn"
            
            ></div>
            <div
              className="col-sm player-btn"
              
            ></div>
            <div
              className="col-sm player-btn"
            
            ></div>
          </div>
        </div>
        <div className="second-column">
          <div className="row m-2 ">
            <div
              className="col-sm player-btn"
             
            ></div>
            <div
              className="col-sm player-btn"
              
            ></div>
            <div
              className="col-sm player-btn"
             
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayGame