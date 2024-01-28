import React, { useState } from 'react';
import '../styles/Signup.css';
import SignupImage from '../assets/login.jpg'; // Replace with your signup background image
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail]= useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="signup-page">
      <div className="background" style={{ backgroundImage: `url(${SignupImage})` }}></div>
      <div className="signup-container">
        <form>
          <h1>Sign Up</h1>
          <label htmlFor="email">Username</label>
          <input
            name="Email"
            placeholder="Enter email..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="username">Username</label>
          <input
            name="username"
            placeholder="Enter username..."
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            placeholder="Enter password..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <div>
            <button type="button" className="login">
              <Link to="/login">Log In</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;