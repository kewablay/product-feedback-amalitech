import React from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import MainContentArea from "../components/layout/MainContentArea";

function Homepage() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <MainContentArea />
    </div>
  );
}

export default Homepage;
