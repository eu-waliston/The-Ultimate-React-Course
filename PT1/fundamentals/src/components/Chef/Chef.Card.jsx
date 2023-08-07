import React from "react";
import "./Chef.css";

const ChefCard = (props) => {
  return (
    <div className="chef-card">
      <img src={props.imageULR} alt="chef" />
      <h2>
        {props.name}, age: {props.age}
      </h2>
      <p>{props.ocuppation}</p>
      <p>{props.about}</p>
    </div>
  );
};

export default ChefCard;
