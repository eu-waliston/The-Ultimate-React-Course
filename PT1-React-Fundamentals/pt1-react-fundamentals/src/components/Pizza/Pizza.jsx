import React from "react";
import "./Pizza.css";

const Pizza = (props) => {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian alive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, aspinach, and ricotta",
      price: 10,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Proscuitto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 10,
      photoName: "pizzas/proscuitto.jpg",
      soldOut: false,
    },
  ];
  const pizzas = true;

  // if(props.pizzaData.soldOut) return null;

  return (
    <div className="pizza__container">
            {
              pizzas ? pizzaData.map((pizza) => (
                <div className="pizzas_container">
                  <img src={pizza.photoName} alt="pizza" className="img__pizza" />
                  <div>
                    <h1>{pizza.name}</h1>
                    <p>{pizza.ingredients}</p>
                  </div>
                </div>
              ))
              :
              (
                <h1>As Pizzas acabaram!</h1>
              )
            }
    </div>
  );
};

export default Pizza;
