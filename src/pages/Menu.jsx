import React, { useEffect } from "react";

import DishCard from "../components/menu/DishCard";

import "./Menu.css"

export default function Menu() {
    const dishes = [
        {
            name: "Caprese Salad",
            image: "caprese-salad.jpg",
            description: "Tomatoes, mozzarella, and basil",
            category: "starter",
            price: 8
        },
        {
            name: "Spaghetti Bolognese",
            image: "spaghetti-bolognese.jpg",
            description: "Spaghetti with meat sauce",
            category: "main",
            price: 12
        },
        {
            name: "Chocolate Cake",
            image: "chocolate-cake.jpg",
            description: "Rich chocolate cake",
            category: "dessert",
            price: 6
        },
        {
            name: "Grilled Chicken Caesar Salad",
            image: "grilled-chicken-caesar-salad.jpg",
            description: "Grilled chicken, romaine lettuce, croutons, and Caesar dressing",
            category: "starter",
            price: 10
        },
        {
            name: "Steak and Fries",
            image: "steak-and-fries.jpg",
            description: "Grilled steak with French fries",
            category: "main",
            price: 18
        },
        {
            name: "Crème Brûlée",
            image: "creme-brulee.jpg",
            description: "Vanilla custard with a caramelized sugar top",
            category: "dessert",
            price: 8
        },
        {
            name: "Fish and Chips",
            image: "fish-and-chips.jpg",
            description: "Fried fish with French fries",
            category: "main",
            price: 14
        },
        {
            name: "Fruit Salad",
            image: "fruit-salad.jpg",
            description: "Assorted fresh fruits",
            category: "dessert",
            price: 6
        },
        {
            name: "Lemon Chicken",
            image: "lemon-chicken.jpg",
            description: "pan-seared chicken breast with a lemon butter sauce",
            category: "main",
            price: 15
        },
        {
            name: "Pesto Pasta",
            image: "pesto-pasta.jpg",
            description: "Penne pasta with pesto sauce",
            category: "main",
            price: 10
        }
    ];

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <section className="menu-page">
            <div className="title">
                <h1>Menu</h1>
            </div>

            <h2>Starters</h2>
            <div className="dishes">
                {dishes.filter(dish => dish.category === 'starter').map(dish => (
                    <DishCard
                        key={dish.name}
                        name={dish.name}
                        image={dish.image}
                        description={dish.description}
                        price={dish.price}
                    />
                ))}
            </div>
            
            <h2>Main Dishes</h2>
            <div className="dishes">
                {dishes.filter(dish => dish.category === 'main').map(dish => (
                    <DishCard
                        key={dish.name}
                        name={dish.name}
                        image={dish.image}
                        description={dish.description}
                        price={dish.price}
                    />
                ))}
            </div>

            <h2>Desserts</h2>
            <div className="dishes">
                {dishes.filter(dish => dish.category === 'dessert').map(dish => (
                    <DishCard
                        key={dish.name}
                        name={dish.name}
                        image={dish.image}
                        description={dish.description}
                        price={dish.price}
                    />
                ))}
            </div>
        </section>
    )
}
