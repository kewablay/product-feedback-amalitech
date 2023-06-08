import React from "react";
import '../../assets/css/homepage/RoadMapCard.css'

function RoadMapCard() {
  return (
    <div className="card">
      <div className="card__header flex-between">
        <h3>Roadmap</h3>
        <a href="#" className="view-roadmap">View</a>
      </div>
      <div className="card__content">
        <div className="status flex-between">
          <p className="status__text">
            <span id="dot"></span>
            Planned
          </p>
          <p className="count">2</p>
        </div>
        <div className="status flex-between">
          <p className="status__text">
            <span id="dot"></span>
            In-Progress
          </p>
          <p className="count">3</p>
        </div>
        <div className="status flex-between">
          <p className="status__text">
            <span id="dot"></span>
            Live
          </p>
          <p className="count">1</p>
        </div>
      </div>
    </div>
  );
}

export default RoadMapCard;
