import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div onClick={() => {
      console.log(props.id);
      props.randomizeCards(props.id)
    }} className="col-3 m-3 card">
      <div className="">
        <img className="img-fluid" alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p>
          <strong>Name:</strong> {props.name}
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;
