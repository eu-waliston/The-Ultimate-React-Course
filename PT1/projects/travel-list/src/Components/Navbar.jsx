import React from "react";
import "../App.scss";

export default function Nav() {
  return (
    <div className="navbar">
      <div>
        <img src="./Images/beach.png" alt="logo" className="logo-img" />
      </div>
      <div>
        <h1 className="fa">far away</h1>
      </div>
      <div>
        <img
          src="./Images/Suitcase-Travel.png"
          alt="logo"
          className="logo-img"
        />
      </div>
    </div>
  );
}
