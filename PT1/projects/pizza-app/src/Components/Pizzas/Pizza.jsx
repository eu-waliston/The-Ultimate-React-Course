import React from "react";
import "./Pizzas.scss";
import { pizzaObj } from "./data";

const Pizza = () => {
  const pizzas = true;

  return (
    <div className="pizza__container">
      {pizzas ? (
        pizzaObj.map((pizza) => (
          <div
            className={`pizzas_container ${pizza.soldOut ? "sold-out" : ""}`}
          >
            <img src={pizza.photoName} alt="pizza" className="img__pizza" />
            <div>
              <h1>{pizza.name}</h1>
              <p>{pizza.ingredients}</p>

              {pizza.soldOut ? <p>SOLD OUT!</p> : <p> $ {pizza.price}</p>}
            </div>
          </div>
        ))
      ) : (
        <h1>As Pizzas acabaram!</h1>
      )}
    </div>
  );
};

export default Pizza;
