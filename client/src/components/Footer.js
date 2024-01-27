import React from 'react'
import '../styles/Footer.css'
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <FiInstagram />
        <FiTwitter />
        <FiFacebook />
        <IoLogoTiktok />
        </div>
        <p> &copy; 2024 bookstore.com </p>
    </div>
  )
}

export default Footer