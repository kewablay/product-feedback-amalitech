import React, { useState } from "react";
import BrandBanner from "../homepage/BrandBanner";
import CategoriesCard from "../homepage/CategoriesCard";
import RoadMapCard from "../homepage/RoadMapCard";

import "../../assets/css/utilities/Sidebar.css";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sidebar">
      <BrandBanner handleMenu={handleMenu} />
      <div className={`menu ${showMenu && "show-menu"}`}>
        <CategoriesCard />
        <RoadMapCard />
      </div>
    </div>
  );
}

export default Sidebar;
