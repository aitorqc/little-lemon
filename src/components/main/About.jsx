import React from 'react'

import "./About.css"


export default function About({title, subtitle, about, img1, img2}) {
  return (
    <section className='about'>
      <div className='about-info'>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{about}</p>
      </div>
      <img src={require("../../icons_assets/"+img1)} alt="Interior of restaurant" />
      <img src={require("../../icons_assets/"+img2)} alt="Food on a plate" />
    </section>
  )
}
