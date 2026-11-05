import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/services" className='link'>Services</Link>
        <Link to="/contact" className='link'>Contact</Link>
        <Link to="/member" className='link'>Members</Link>

    </nav>
  )
}

export default Navbar