import React from 'react'
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

export default function Nav() {
  return (
    <nav className='wide'>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/" className="nav-link">About</Link>
      <Link to="/menu" className="nav-link">Menu</Link>
      <Link to="/reservations" className="nav-link">Reservations</Link>
      <Link to="/" className="nav-link">Order Online</Link>
      <Link to="/" className="nav-link">Login</Link>
    </nav>
  )
}
