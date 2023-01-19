import React from 'react'
import { Link } from 'react-router-dom';

import BurgerIcon from './BurgerIcon';

import logo from "../icons_assets/Logo.svg";

export default function Nav({isMenuOpen, setIsMenuOpen}) {
  return (
    <nav className='wide'>
      <BurgerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <img src={logo} alt="Logo" />
      <div className='links'>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" className="nav-link">About</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/reservations" className="nav-link">Reservations</Link>
        <Link to="/" className="nav-link">Order Online</Link>
        <Link to="/" className="nav-link">Login</Link>
      </div>
    </nav>
  )
}
