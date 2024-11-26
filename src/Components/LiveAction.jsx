import React from "react";
import Action from '../assets/images/Action.png'

const LiveAction = () => {
  return (
    <div className="live-action-container">
      <div className="live-action-image">
        <img src= {Action} alt="Video in Live Action" />
      </div>
      <div className="live-action-text">
      <div className="line"></div>
        <h2>Video in Live <br /> Action</h2>
        
        <p>
          Problems trying to resolve the conflict between <br />the two major realms
          of Classical physics: <br /> Newtonian mechanics.
        </p>
        <a href="#" className="learn-morethree">
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
};

export default LiveAction;
