import React from 'react'
//import {Link} from 'react-router-dom'
import BackgroundImage from '../assets/homebackground.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BackgroundImage})`, opacity:0.8 }}>
      <div className="headerContainer">
        <h1>BOOKS FOR EVERYONE</h1>
        <p>Find all your favourite books in one place</p>
        {/*<Link to="/shop">
          <button>
          DISCOVER MORE
          </button>
        </Link>
          */}
      </div>
    </div>
  )
}

export default Home