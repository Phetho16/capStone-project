// Register.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', {
        email,
        password
      });

      console.log(response.data);  // Log response for debugging
      
      alert('Registration successful');
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed');
    }
  }

  return (
    <>
      <div className="register">
        <Link to="/">
          <img
            src="https://i.pinimg.com/736x/56/5c/2a/565c2a824c7c184e326c751a0fb7e73e.jpg"
            alt="Airbnb logo"
            className="register_logo"
          />
        </Link>
        <div className="register_container">
          <h1>Register</h1>
          <form onSubmit={registerUser}>
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
            <button type="submit" className="register_signInButton">
              Register
            </button>
            <div>
              Already a member?
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
