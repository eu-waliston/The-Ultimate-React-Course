import React from "react";
import "./Home.scss";
import { pizzaObj } from "./data";

const Navbar = () => {
  return (
    <div className="nav__component">
      <h1>fast react pizza co.</h1>
      <hr className="span" />
      <h2>our menu</h2>
      <hr className="span" />
    </div>
  );
};

const Pizza = () => {
  const pizzas = true;
  // if(props.pizzaData.soldOut) return null;

  return (
    <div className="pizza__container">
      {pizzas ? (
        pizzaObj.map((pizza) => (
          <div className="pizzas_container">
            <img src={pizza.photoName} alt="pizza" className="img__pizza" />
            <div>
              <h1>{pizza.name}</h1>
              <p>{pizza.ingredients}</p>
            </div>
          </div>
        ))
      ) : (
        <h1>As Pizzas acabaram!</h1>
      )}
    </div>
  );
};

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
      // < Order openHour={openHour}/>
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
      <div className="footer--bottom"></div>
    </div>
  );
};
const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Pizza />
      <Footer />
    </div>
  );
};

export default Home;
