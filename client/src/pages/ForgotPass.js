import React from 'react';
import '../styles/ForgotPass.css';
import forgotPassImage from '../assets/forgotPass.jpg';
import {Link} from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="forgot-password">
    <div className="leftSide" style={{ backgroundImage: `url(${forgotPassImage})` }}>
    </div>
    <div className="rightSide">
      <h1>Forgot Password</h1>
      <p>
        Enter your email address below, and we'll send you a link to reset your password.
      </p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
        <button type="submit">Reset Password</button>
      </form>
      <p>
        Remember your password? <Link to="/login">Back to Login</Link>
      </p>
    </div>
  </div>
);
}

export default ForgotPassword;