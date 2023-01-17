import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

import "./Testimonial.css"

export default function Testimonial({title}) {
    const [testimonials, setTestimonials] = useState([
        {
            name: "John Smith",
            image: "https://via.placeholder.com/150",
            rating: 5,
            testimonial: "This restaurant is amazing! The food is delicious and the service is top notch."
        },
        {
            name: "Jane Doe",
            image: "https://via.placeholder.com/150",
            rating: 4,
            testimonial: "I had a great experience at this restaurant. The atmosphere is cozy and the staff is friendly."
        },
        {
            name: "Bob Johnson",
            image: "https://via.placeholder.com/150",
            rating: 3,
            testimonial: "The food was good, but the service was a bit slow."
        },
        {
            name: "Marta Smith",
            image: "https://via.placeholder.com/150",
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
