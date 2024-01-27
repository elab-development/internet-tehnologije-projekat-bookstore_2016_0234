import React, {useState} from 'react';
import '../styles/Login.css';
import LoginImage from '../assets/homebackground.jpg'; 

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
        <form >
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
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="rightSide" style={{ backgroundImage: `url(${LoginImage})` }}></div>
    </div>
  );
};

export default Login;