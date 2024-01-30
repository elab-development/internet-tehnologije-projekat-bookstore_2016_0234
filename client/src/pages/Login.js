import React, { useRef } from 'react';
import '../styles/Login.css';
import LoginImage from '../assets/login.jpg';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { UseStateContext } from '../context/user-context';


function Login() {
  // State to manage form inputs
  //const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const emailRef = useRef();
  const passRef = useRef();

  const { setUser, setToken } = UseStateContext();

  const handleLogin = (event) => {
    event.preventDefault();
    const payload = {
      email: emailRef.current.value,
      pass: passRef.current.value
    }
    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token)
      })
      .catch(err => {
        console.log(err);
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      })

  };
  return (
    <div className="login">
      <div className="leftSide">

        <form onSubmit={handleLogin}>
          <h1>Log in</h1>
          <label htmlFor="email">Username</label>
          <input
            ref={emailRef}
            name="email"
            placeholder="Enter email..."
            type="email"
          />
          <label htmlFor="password">Password</label>
          <input
            ref={passRef}
            name="password"
            placeholder="Enter password..."
            type="password"
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
        </form>
      </div>
      <div className="rightSide" style={{ backgroundImage: `url(${LoginImage})` }}></div>
    </div>
  );
};

export default Login;