import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="levaStrana">
            <img src={Logo} />

        </div>
        <div className="desnaStrana">
            <Link to="/">HOME</Link>
            
            <Link to="/contact">CONTACT</Link>
            
        </div>
    </div>
  )
}

export default Navbar