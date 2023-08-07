import React from "react";
import "./Footer.css";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  const status = () => {
    if (!isOpen) {
      return (
        <div className="order">
          <p>We're Closed</p>
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
      {/* {isOpen && (
        <div className="order">
          <p>
            We're open until {closeHour}:00, Come visit us or ordern Online.
          </p>
          <button className="btn">Order</button>
        </div>
      )} */}

      {/* {isOpen ? (
        <div className="order">
          <p>
            We're open until {closeHour}:00, Come visit us or ordern Online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">
          <p>We're Closed</p>
        </div>
      )} */}

      {status()}
    </div>
  );
};

export default Footer;
