import React from "react";
import Pizza from "./components/Pizza/Pizza";

const App = (props) => {
  return (
    <div className="container">
      <Pizza 
        title={props.title}
        ingredients={props.ingredients}
        price={props.price}
        photoName={props.photoName}
        soldOut={props.soldOut}    
      />
    </div>
  );
};

export default App;
