import React from "react";
import "./Input.css";
function Input(props) {
  const element =
    props.element === "input" ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    ) : (
      <input type="radio" id={props.id} />
    );
  return <div className="form-control">{element}</div>;
}

export default Input;
