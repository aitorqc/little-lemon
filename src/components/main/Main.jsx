import React from 'react'

import image from "../../icons_assets/restaurant.jpg";

import About from './About'
import HeroSection from './HeroSection'
import Highlights from './Highlights'
import Testimonial from './Testimonial'

export default function Main() {
  return (
    <main className="container">
      <div className='background'>
        <HeroSection
          title="Little Lemon"
          subtitle="Chicago"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="Reserve a Table"
          image={image} />
      </div>
      <Highlights
        title="Specials" />
      <div className='background'>
        <Testimonial
          title="Testimonials" />
      </div>
      <About
        id="about"
        title="Little Lemon"
        subtitle="Chicago"
        about="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        img1="Mario and Adrian A.jpg"
        img2="restaurant chef B.jpg" />
    </main>
  )
}
