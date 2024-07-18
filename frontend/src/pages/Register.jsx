import React from "react";
import "../css/register.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const CancleRegistration = (e) => {
        e.preventDefault()
        navigate('/')
    }
  return (
    <div>
      <div className="card form-card shadow ">
        <div className="mb-4">
        <h1>Signup form</h1>
        </div>
      
        <form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full name
            </label>
            <input type="text" className="form-control" id="fullName" />
          </div>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              User name
            </label>
            <input type="text" className="form-control" id="userName" />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input type="date" className="form-control" id="dob" />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="userRole" className="form-label">
              User Role
            </label>
            <select className="form-select" id="userRole">
              <option value="">Select a role</option>
              <option value="customer">Customer</option>
              <option value="manager">Seller</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">
              Contact number
            </label>
            <input type="text" className="form-control" id="contactNumber" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3 form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label " htmlFor="exampleCheck1">
              I agree to the terms and conditions
            </label>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <button type="submit" className="btn btn-danger" onClick={CancleRegistration}>
              Cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
