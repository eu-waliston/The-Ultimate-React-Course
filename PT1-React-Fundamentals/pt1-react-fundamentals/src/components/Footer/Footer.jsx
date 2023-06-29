import React from "react";
import "./Footer.css";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 12;

  const shoeStatus = () => {
   return hour >= openHour && hour <= closeHour ? "Open" : "Closed!";
  };

  return (
    <div className="footer__component">
      <h4>
        {new Date().toLocaleTimeString()}, &nbsp;We Are current: {shoeStatus()}
      </h4>
    </div>
  );
};

export default Footer;
