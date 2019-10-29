import React from "react";
import "./style.css";

function CardBox(props) {
  return <div className="d-flex flex-wrap">{props.children}</div>;
}

export default CardBox;
