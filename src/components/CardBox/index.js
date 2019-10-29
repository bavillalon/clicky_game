import React from "react";
import "./style.css";

function CardBox(props) {
  return <div className="container d-flex flex-wrap justify-content-center">{props.children}</div>;
}

export default CardBox;
