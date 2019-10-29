import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="container jumbotron text-center">
    <h1 className="title">{props.title}</h1>
    <p>{props.content}</p>
    </div>
    );
}

export default Title;
