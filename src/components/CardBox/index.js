import React from "react";
//box for all of hte character cards to land
function CardBox(props) {
  return <div className="container d-flex flex-wrap justify-content-center">{props.children}</div>;
}

export default CardBox;
