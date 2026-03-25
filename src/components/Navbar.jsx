import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <div className="logo">
          <a href="https://saran612.me/" target="_blank" rel="noopener noreferrer">Saran</a>
        </div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#figma">Figma</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
