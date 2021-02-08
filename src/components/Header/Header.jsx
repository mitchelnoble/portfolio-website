import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header-container">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  )
}
