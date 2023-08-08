import React from "react";
import "./Navabr.scss";

const Navbar = () => {
  return (
    <div className="navbar__component">
      <h1 className="logo">Fast React Pizza Co.</h1>
      <div className="our-menu">
        <div className="separator" />
        <h2>our menu</h2>
        <div className="separator" />
      </div>
    </div>
  );
};

export default Navbar;
