import React from "react";
import "../../assets/css/layout/Header.css";

import bulb from "../../assets/icons/bulb.png";
import Button from "../utilities/Button";

function Header() {
  return (
    <div className="header mt-5 bg-dark flex-between">
      <div className="header__content ">
        <div className="header__info">
          <img src={bulb} alt="bulb" />
          <p>6 Suggestions</p>
        </div>
        <div className="sortBy">
          <label htmlFor="sort">Sort by: </label>
          <select name="sort" id="sort">
            <option value="Most Upvotes">Most Upvotes</option>
            <option value="Least Upvotes">Least Upvotes</option>
            <option value="Most Comments">Most Comments</option>
            <option value="Least Comments">Least Comments</option>
          </select>
        </div>

        <Button text={"Add Feedback"} bgcolor={"#ad1fea"} />
      </div>
    </div>
  );
}

export default Header;
