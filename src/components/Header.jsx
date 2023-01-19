import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Link as LinkS } from "react-scroll";

import Nav from './Nav'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className='nav-container'>
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div className={`responsive ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link">Home</Link>
        <LinkS
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-120}
          duration={400}
          className="nav-link">About</LinkS>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/reservations" className="nav-link">Reservations</Link>
        <Link to="/" className="nav-link">Order Online</Link>
        <Link to="/" className="nav-link">Login</Link>
      </div>
    </header>
  )
}
