import React from "react";
import "../../assets/css/homepage/BrandBanner.css";

import menu from "../../assets/icons/menu.svg";

function BrandBanner({handleMenu}) {
  return (
    <div className="brandBanner">
      <div className="wrapper">
        <h3 className="text-800">Frontend Mentor</h3>
        <p className="text-500">Feedback board</p>
      </div>
      <button  onClick={handleMenu} >
        <img className="menu-icon" src={menu} alt="menu"/>
      </button>
    </div>
  );
}

export default BrandBanner;
