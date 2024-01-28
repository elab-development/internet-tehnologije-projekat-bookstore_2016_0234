import React, {useState} from 'react';
import '../styles/Login.css';
import LoginImage from '../assets/login.jpg'; 
import {Link} from 'react-router-dom';


function Login  () {
    // State to manage form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login
  //const handleLogin = (event) => {
    //event.preventDefault();
    // Perform your login logic here
    //console.log('Logging in with username:', username, 'and password:', password);
    // You can make an API call or perform any authentication logic here
  //};
  return (
    <div className="login">
      <div className="leftSide">
        
        <form>
          <h1>Log in</h1>
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
           <div>
            <button type="button" className="signup">
              <Link to="/Signup">
                Sign Up
              </Link>
            </button>
            <button type="button" className="forgot">
              <Link to="/forgot-password">
                Forgot Password
              </Link>
            </button>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="rightSide" style={{ backgroundImage: `url(${LoginImage})` }}></div>
    </div>
  );
};

export default Login;