import React from "react";
import "./Chef.css"
import ChefCard from "./Chef.Card";

const Chef = () => {
    return (
        <div className="chef--component">
            <h1 className="chef">our chef</h1>
            <ChefCard
                imageULR="../pizzas/Sanji-one-piece.webp"
                name="Vinsmoke Sanji"
                age="21"
                ocuppation="Cook, Pirate"
                about=" 'Black Leg' Sanji,born as Vinsmoke Sanji, is the cook of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the fifth member of the crew and the fourth to join, doing so at the end of the Baratie Arc."
            />
        </div>
    )
}

export default Chef;