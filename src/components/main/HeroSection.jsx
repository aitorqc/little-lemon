import React from 'react'
import { Link } from 'react-router-dom';

import "./HeroSection.css"

export default function HeroSection({title, subtitle, description, buttonText, image}) {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <p>{description}</p>
                <Link to="/reservations" className='button'>{buttonText}</Link>
            </div>
            <img src={image} alt="Hero" />
        </section>
    )
}
