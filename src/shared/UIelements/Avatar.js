import React from "react";
import "./Avatar.css";
function Avatar(props) {
  return (
    <div
      className={`avatar ${props.className}`}
      style={props.style}
      onClick={props.setProfileHandler}
    >
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.height }}
      />
    </div>
  );
}

export default Avatar;
