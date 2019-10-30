import React from "react";
//counter for the top of page. accepts hte state props of count and highscore to display.
function   Counter(props) {
    return (
      <div className="card text-center">
        <div className="card-body">
          <span className="m-3 card-text">Current Score: {props.count}</span>
          <span className="m-3 card-text">High Score: {props.highScore}</span>
        </div>
      </div>
    );
  };

export default Counter;
