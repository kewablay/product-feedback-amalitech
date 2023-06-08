import React, { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import MainContentArea from "../components/layout/MainContentArea";

function Homepage() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <MainContentArea />
    </div>
  );
}

export default Homepage;
