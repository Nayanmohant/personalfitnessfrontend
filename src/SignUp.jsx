import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [age, agechange] = useState("");
  const [weight, weightchange] = useState("");
  const [height, heightchange] = useState("");
  

  const [fitnessgoals, fitnessgoalschange] = useState("");
  const [password, passwordchange] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    // Create an object with form data
    const signupobj = { name, email, age ,  weight, height, fitnessgoals, password };

    try {
      // Send a POST request to the backend
      const response = await fetch('http://localhost:4500/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupobj),
      });

      const data = await response.json();

      if (response.ok) {
        // Display success alert
        alert(data.message || 'Signup successful!');
      } else {
        // Display error alert
        alert(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      // Handle fetch errors
      alert('An error occurred. Please try again later.');
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className='addUser'>
      <h3>SIGNUP</h3>
      <form className='addUserform' onSubmit={handlesubmit}>
        <div className='input1'>
          <label htmlFor="name">Name:</label>
          <input
            value={name}
            onChange={(e) => namechange(e.target.value)}
            type="text"
            id='name'
            placeholder='Enter your name'
          />

          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => emailchange(e.target.value)}
            type="email"
            id='email'
            placeholder='Enter your email'
          />

          <label htmlFor="age">Age:</label>
          <input
            value={age}
            onChange={(e) => agechange(e.target.value)}
            type="text"
            id='age'
            placeholder='Enter your age'
          />

          <label htmlFor="weight">Weight:</label>
          <input
            value={weight}
            onChange={(e) => weightchange(e.target.value)}
            type="text"
            id='weight'
            placeholder='Enter your weight'
          />

<label htmlFor="height">Height:</label>
          <input
            value={height}
            onChange={(e) => heightchange(e.target.value)}
            type="text"
            id='height'
            placeholder='Enter your height'
          />

<label htmlFor="fitnessgoals">Fitness goals:</label>
          <input
            value={fitnessgoals}
            onChange={(e) => fitnessgoalschange(e.target.value)}
            type="text"
            id='fitnessgoals'
            placeholder='Enter your fitnessgoals'
          />


          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => passwordchange(e.target.value)}
            type="password"
            id='password'
            placeholder='Password'
          />

          <button type='submit' className='btn btn-danger rounded shadow'>
            Sign Up
          </button>
        </div>
      </form>
      <div className='signup'>
        <p>Already have an account?</p>
        <Link to={'/login'}>
          <button className='btn btn-primary w-50%' type='button'>LOGIN</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;