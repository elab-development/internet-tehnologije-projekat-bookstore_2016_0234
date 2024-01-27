import React from 'react';
import '../styles/Login.css'; 

function Login  () {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Login</h1>
        <p>Welcome back! Please log in to your account.</p>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;