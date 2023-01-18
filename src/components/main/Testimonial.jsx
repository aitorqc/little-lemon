import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

import "./Testimonial.css"

export default function Testimonial({title}) {
    const [testimonials, setTestimonials] = useState([
        {
            name: "John Smith",
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            rating: 5,
            testimonial: "This restaurant is amazing! The food is delicious and the service is top notch."
        },
        {
            name: "Jane Doe",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
            rating: 4,
            testimonial: "I had a great experience at this restaurant. The atmosphere is cozy and the staff is friendly."
        },
        {
            name: "Bob Johnson",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 3,
            testimonial: "The food was good, but the service was a bit slow."
        },
        {
            name: "Marta Smith",
            image: "https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4,
            testimonial: "The food was good, but the service was a bit slow."
        }
    ]);

    return (
        <section className="testimonials">
            <h3>{title}</h3>
            <div className="cards">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-info">
                        <div className="rating">
                            {
                                Array(testimonial.rating).fill().map((_, i) => <AiFillStar key={i} />)
                            }
                            {
                                Array(5 - testimonial.rating).fill().map((_, i) => <AiOutlineStar key={i} />)
                            }
                        </div>
                        <img src={testimonial.image} alt={testimonial.name} />
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.testimonial}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
