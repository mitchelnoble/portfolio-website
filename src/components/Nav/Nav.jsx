import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  )
}
