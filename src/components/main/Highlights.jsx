import React, { useState } from 'react'
import { RiEBike2Line } from "react-icons/ri"

import dish1 from "../../icons_assets/bruchetta.svg";
import dish2 from "../../icons_assets/lemon dessert.jpg";
import dish3 from "../../icons_assets/greek salad.jpg";

import "./Highlights.css";

export default function Highlights({ title }) {
    const [specials, setSPecials] = useState([
        {
            name: "Brucheta",
            image: "bruchetta.svg",
            price: 5.99,
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            name: "Lemon Dessert",
            image: "lemon dessert.jpg",
            price: 5,
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        },
        {
            name: "Greek salad",
            image: "greek salad.jpg",
            price: 12.99,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
    ]);

    return (
        <section className='highlights'>
            <div className='highlights-info'>
                <h2>{title}</h2>
                <button>Online Menu</button>
            </div>
            <div className="dishes">
                {specials.map((special, index) => (
                    <div key={special.name} className="dish">
                        <img src={require("../../icons_assets/" + special.image)} alt="Dish 1" />
                        <div className='dish-info'>
                            <div>
                                <h3>{special.name}</h3>
                                <p>$ {special.price}</p>
                            </div>
                            <p>{special.description}</p>
                            <p>Order a delivery <RiEBike2Line /></p>
                        </div>
                    </div>
                ))
                }
            </div>
        </section>
    )
}
