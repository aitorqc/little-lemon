import React from 'react'

import "./HeroBookingSection.css";

export default function HeroBookingSection({ image, title, subtitle }) {
    return (
        <section className="hero-booking" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${require("../../icons_assets/"+image)})` }}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </section>
      );
}
