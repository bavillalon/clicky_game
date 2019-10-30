import React from "react";
//accepts the title and content ad props to be able to change them in the app component
function Title(props) {
  return (
  <div className="container jumbotron text-center">
    <h1 className="title">{props.title}</h1>
    <p>{props.content}</p>
    </div>
    );
}

export default Title;
