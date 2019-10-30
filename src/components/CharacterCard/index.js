import React from "react";

//handles each character and displays a card.
function CharacterCard(props) {
  return (
    <div onClick={() => {
      console.log(props.id);
      props.handleScores(props.id);
      props.randomizeCards();
    }} className="col-3 m-md-3 card">
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
