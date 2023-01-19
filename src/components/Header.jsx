import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Nav from './Nav'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className='container'>
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div className={`responsive ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" className="nav-link">About</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/reservations" className="nav-link">Reservations</Link>
        <Link to="/" className="nav-link">Order Online</Link>
        <Link to="/" className="nav-link">Login</Link>
      </div>
    </header>
  )
}
