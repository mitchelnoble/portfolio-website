import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Nav.css';

export default function Nav() {
  return (
    <div className="nav-container">
      <Link to="/About" className="about-link">About</Link>
      <Link to="/ProjectDetail" className="projects-link">Projects</Link>
      <Link to="/Contact" className="contact-link">Contact</Link>
    </div>
  )
}
