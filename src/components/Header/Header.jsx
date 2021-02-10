import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Header.css'

export default function Header() {
  return (
      <Link to="/" className="name-link">
    <div className="header-container">
        <h1 className="my-first-name">
          M I T C H E L
          </h1>
        <h1 className="my-last-name">
          N O B L E
          </h1>
    </div>
      </Link>
  )
}
