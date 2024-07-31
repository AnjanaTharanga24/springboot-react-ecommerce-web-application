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
      navigate('/login'); // Redirect to login page after successful registration
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
    <div className="register-page">
      <div className="card form-card shadow">
        <div className="mb-4">
          <h1>Signup form</h1>
        </div>
      
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full name</label>
            <input type="text" className="form-control register-form-control" id="fullName" placeholder="Enter full name" name="name" value={user.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">User name</label>
            <input type="text" className="form-control register-form-control" id="userName" placeholder="Enter user name" name="username" value={user.username} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input type="date" className="form-control register-form-control" id="dob" name="dob" value={user.dob} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input register-form-control" type="radio" name="gender" id="male" value="MALE" checked={user.gender === 'MALE'} onChange={handleChange} required />
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input register-form-control" type="radio" name="gender" id="female" value="FEMALE" checked={user.gender === 'FEMALE'} onChange={handleChange} />
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input register-form-control" type="radio" name="gender" id="other" value="OTHER" checked={user.gender === 'OTHER'} onChange={handleChange} />
                <label className="form-check-label" htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="userRole" className="form-label">User Role</label>
            <select className="form-select register-form-control" id="userRole" name="role" value={user.role} onChange={handleChange} required>
              <option value="" className="dropdown-options">Select a role</option>
              <option value="buyer" className="dropdown-options">Buyer</option>
              <option value="seller" className="dropdown-options">Seller</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">Contact number</label>
            <input type="tel" className="form-control register-form-control" id="contactNumber" placeholder="Enter contact number" name="number" value={user.number} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control register-form-control" id="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control register-form-control" id="password" placeholder="Enter password" name="password" value={user.password} onChange={handleChange} required />
          </div>
          <div className="mb-3 form-check mt-3">
            <input type="checkbox" className="form-check-input" id="termsCheck" required />
            <label className="form-check-label" htmlFor="termsCheck">I agree to the terms and conditions</label>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn btn-primary">Register</button>
            <button type="button" className="btn btn-danger" onClick={handleCancelRegistration}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}