import React from 'react'

import image from "../icons_assets/restaurant.jpg";

import About from './main/About'
import HeroSection from './main/HeroSection'
import Highlights from './main/Highlights'
import Testimonial from './main/Testimonial'

export default function Main() {
  return (
    <main className="container">
      <HeroSection
        title="Little Lemon"
        subtitle="Chicago"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Reserve a Table"
        image={image} />
      <Highlights />
      <Testimonial />
      <About />
    </main>
  )
}
