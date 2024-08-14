import React, { useState } from "react";
import "../css/register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    dob: "",
    gender: "",
    role: "",
    number: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/register", user);
      console.log(response.data);
      alert("Registration successful");
      navigate('/login');
    } catch (error) {
      console.log("register error : ", error);
      alert("Registration failed. Please try again.");
    }
  };

  const handleCancelRegistration = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="register-container">
    <div className="register-card">
      <h1 className="register-header">Signup form</h1>
      <form onSubmit={handleSubmit}>
        <label className="register-label" htmlFor="fullName">Full name</label>
        <input className="register-input" type="text" id="fullName" placeholder="Enter full name" name="name" value={user.name} onChange={handleChange} required />
  
        <div className="mb-3">
            <label htmlFor="userName" className="register-label  ">User name</label>
            <input type="text" className="register-input" id="userName" placeholder="Enter user name" name="username" value={user.username} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="register-label ">Date of Birth</label>
            <input type="date" className="register-input" id="dob" name="dob" value={user.dob} onChange={handleChange} required />
          </div>
        <div className="mb-4">
        <label htmlFor="dob" className="register-label ">Gender</label>
        <div className="register-radio-group">
          <label className="register-radio-label">
            <input className="register-radio-input" type="radio" name="gender" value="MALE" checked={user.gender === 'MALE'} onChange={handleChange} required />
            Male
          </label>
          <label className="register-radio-label">
            <input className="register-radio-input" type="radio" name="gender" value="FEMALE" checked={user.gender === 'FEMALE'} onChange={handleChange} />
            Female
          </label>
          <label className="register-radio-label">
            <input className="register-radio-input" type="radio" name="gender" value="OTHER" checked={user.gender === 'OTHER'} onChange={handleChange} />
            Other
          </label>
        </div>
        </div>
       
  
        <select className="register-select" name="role" value={user.role} onChange={handleChange} required>
          <option value="">Select a role</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
  
        <div className="mb-3">
            <label htmlFor="contactNumber" className="register-label ">Contact number</label>
            <input type="tel" className="register-input" id="contactNumber" placeholder="Enter contact number" name="number" value={user.number} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="register-label ">Email address</label>
            <input type="email" className="register-input" id="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="register-label ">Password</label>
            <input type="password" className="register-input" id="password" placeholder="Enter password" name="password" value={user.password} onChange={handleChange} required />
          </div>
         
  
        <label className="register-checkbox-label">
          <input className="register-checkbox-input" type="checkbox" required />
          I agree to the terms and conditions
        </label>
  
        <button className="register-button register-button-primary" type="submit">Register</button>
        <button className="register-button register-button-secondary" type="button" onClick={handleCancelRegistration}>Cancel</button>
      </form>
    </div>
  </div>
  );
}