import React from "react";
import "../../assets/css/homepage/CategoriesCard.css"

function CategoriesCard() {
  return (
    <div className="categories card">
      <button className="tag text-300 active">All</button>
      <button className="tag text-300">UI</button>
      <button className="tag text-300">UX</button>
      <button className="tag text-300">Enhancement</button>
      <button className="tag text-300">Bug</button>
      <button className="tag text-300">Feature</button>
    </div>
  );
}

export default CategoriesCard;
