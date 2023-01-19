import React from "react";

import "./DishCard.css";

const DishCard = ({ name, image, description, price }) => {
    return (
        <div className="dish-card">
            <img src={require("../../icons_assets/dishes/" + image)} alt={name} />
            <div className="info">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>$ {price}</p>
            </div>
        </div>
    );
};

export default DishCard;