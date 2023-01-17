import React from 'react'
import { RiEBike2Line } from "react-icons/ri"

import dish1 from "../../icons_assets/bruchetta.svg";
import dish2 from "../../icons_assets/lemon dessert.jpg";
import dish3 from "../../icons_assets/greek salad.jpg";

import "./Highlights.css";

export default function Highlights() {
    return (
        <section className='highlights'>
            <div className='highlights-info'>
                <h2>Specials</h2>
                <button>Online Menu</button>
            </div>
            <div className="dishes">
                <div className="dish">
                    <img src={dish1} alt="Dish 1" />
                    <div className='dish-info'>
                        <div>
                            <h3>Bruchetta</h3>
                            <p>$ 5.99</p>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <p>Order a delivery <RiEBike2Line /></p>
                    </div>
                </div>
                <div className="dish">
                    <img src={dish2} alt="Dish 2" />
                    <div className='dish-info'>
                        <div>
                            <h3>Lemon Dessert</h3>
                            <p>$ 5.00</p>
                        </div>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <p>Order a delivery <RiEBike2Line /></p>
                    </div>
                </div>
                <div className="dish">
                    <img src={dish3} alt="Dish 3" />
                    <div className='dish-info'>
                        <div>
                            <h3>Greek salad</h3>
                            <p>$ 12.99</p>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <p>Order a delivery <RiEBike2Line /></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
