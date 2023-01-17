import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/menu" className="nav-link">Menu</Link>
      <Link to="/reservations" className="nav-link">Reservations</Link>
      <Link to="/order" className="nav-link">Order</Link>
      <Link to="/login" className="nav-link">Login</Link>
    </nav>
  )
}
