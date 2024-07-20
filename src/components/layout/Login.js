import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] =useState('')

  async function loginHandler(event) {
    event.preventDefault();
    try {
      await axios.post('http://localhost:4000/login', { email, password });
      alert('Login successful');
     setRedirect(true)
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed');
    }
  }
if (redirect) {
  return <Navigate to={'/'}/>
}
  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            src="https://i.pinimg.com/736x/56/5c/2a/565c2a824c7c184e326c751a0fb7e73e.jpg"
            alt="Airbnb logo"
            className="login_logo"
          />
        </Link>
        <div className="login_container">
          <h1>Welcome to Airbnb</h1>
          <form onSubmit={loginHandler}>
            <h5>Email</h5>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" className="login_signInButton">
              Login
            </button>
            <div>
              Don't have an account yet?
              <Link to="/register">Register now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
