import React from 'react'
import { Link } from 'react-router-dom';
import { Link as LinkS } from "react-scroll";

import BurgerIcon from './BurgerIcon';

import logo from "../icons_assets/Logo.svg";

export default function Nav({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className='wide'>
      <BurgerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <img src={logo} alt="Logo" />
      <div className='links'>
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
    </nav>
  )
}
