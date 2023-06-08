import React from "react";
import plusIcon from "../../assets/icons/+.png";
import "../../assets/css/utilities/Button.css";

function Button({ text, bgcolor }) {
  return (
    <button className="flex-center " style={{ background: bgcolor }}>
      <span className="flex-center">
        <img id="plus" src={plusIcon} alt="+" />
      </span>
      {text}
    </button>
  );
}

export default Button;
