import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <div className="navbar">
        <div className="levaStrana">
            <img src={Logo} />

        </div>
        <div className="desnaStrana">
            <Link to="/">HOME</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/cart"><FiShoppingCart size={30} /></Link>
        </div>
    </div>
  )
}

export default Navbar