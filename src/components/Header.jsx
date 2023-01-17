import React from 'react'

import Nav from './Nav'

import logo from "../icons_assets/Logo.svg";

export default function Header() {
  return (
    <header>
      <div className='container'>
        <img src={logo} alt="Logo" />
        <Nav />
      </div>
    </header>
  )
}
