import React from "react";
import "./Footer.scss";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  const status = () => {
    if (!isOpen) {
      return (
        <div className="order">
          <p>We're Closed !</p>
        </div>
      );
    } else {
      return (
        <div className="order">
          <p>
            We're open until {closeHour}:00, Come visit us or ordern Online.
          </p>
          <button className="btn">Order</button>
        </div>
      );
    }
  };

  return (
    <div className="footer__component">
      {status()}
      <div className="footer--bottom"></div>
    </div>
  );
};

export default Footer;
