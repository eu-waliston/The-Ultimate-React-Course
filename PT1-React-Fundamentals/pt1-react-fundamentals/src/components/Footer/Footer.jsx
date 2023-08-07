import React from "react";
import "./Footer.css";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // const shoeStatus = () => {
  //  return hour >= openHour && hour <= closeHour ? "Open" : "Closed!";
  // };

  return (
    <div className="footer__component">
      {isOpen && (
        <div className="order">
          <p>
            We're open until {closeHour}:00, Come visit us or ordern Online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </div>
  );
};

export default Footer;
