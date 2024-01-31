import React, { useRef } from 'react';
import '../styles/Signup.css';
import SignupImage from '../assets/signup.jpg';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { UseStateContext } from '../context/user-context';

function Signup() {
  //const [email, setEmail]= useState('');
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const { setUser, setToken } = UseStateContext();

  const handleSignup = (event) => {
    event.preventDefault()
    const payload = {
      name: nameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      pass: passRef.current.value
    }
    axiosClient.post('/register', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token)
      })
      .catch(err=>{
        console.log(err);
        const response=err.response;
        if(response && response.status===422){
          console.log(response.data.errors);
        }
      })
  }

  return (
    <div className="signup-page">
      <div className="background" style={{ backgroundImage: `url(${SignupImage})` }}></div>
      <div className="signup-container">
        <form onSubmit={handleSignup}>
          <h1>Sign Up</h1>
          <label>E-mail</label>
          <input
            ref={emailRef}
            name="Email"
            placeholder="Enter email..."
            type="email"
          />
          <label>First name</label>
          <input
            ref={nameRef}
            name="firstname"
            placeholder="Enter your first name..."
            type="text"
          />
          <label>Last name</label>
          <input
            ref={lastNameRef}
            name="lastname"
            placeholder="Enter your last name..."
            type="text"
          />
          <label>Password</label>
          <input
            ref={passRef}
            name="password"
            placeholder="Enter password..."
            type="password"
          />
          <button type="submit">Sign Up</button>
          <div>
            <button type="button" className="login">
              <Link to="/login">Already have an account? Sign In</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;