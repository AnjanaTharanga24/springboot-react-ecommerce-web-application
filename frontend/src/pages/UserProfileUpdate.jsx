import React from "react";
import "../css/updateProfile.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function UserProfileUpdate() {
  return (
    <div className="register-page ">
      <div>
        <Navbar/>
      </div>
      <div className="card form-card">
        <div className="mb-2 mt-3">
          <h1>Update User</h1>
        </div>

        <form className="text-start update-form ">
          <div className="mb-3">
            <label className="form-label">
              Full name
            </label>
            <input
              type="text"
              className="form-control register-form-control"
              id="fullName"
              placeholder="Enter full name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              User name
            </label>
            <input
              type="text"
              className="form-control register-form-control"
              id="userName"
              placeholder="Enter user name"
              name="username"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control register-form-control"
              id="dob"
              name="dob"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input register-form-control"
                  type="radio"
                  name="gender"
                  id="male"
                  value="MALE"
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input register-form-control"
                  type="radio"
                  name="gender"
                  id="female"
                  value="FEMALE"
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input register-form-control"
                  type="radio"
                  name="gender"
                  id="other"
                  value="OTHER"
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">
              User Role
            </label>
            <select
              className="form-select register-form-control"
              id="userRole"
              name="role"
            >
              <option value="" className="dropdown-options">
                Select a role
              </option>
              <option value="buyer" className="dropdown-options">
                Buyer
              </option>
              <option value="seller" className="dropdown-options">
                Seller
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Contact number
            </label>
            <input
              type="tel"
              className="form-control register-form-control"
              id="contactNumber"
              placeholder="Enter contact number"
              name="number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control register-form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control register-form-control"
              id="password"
              placeholder="Enter password"
              name="password"
            />
          </div>
          <div className="mb-3 form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsCheck"
              required
            />
            <label className="form-check-label">
              I agree to the terms and conditions
            </label>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <button type="button" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </form>

        
      </div>
      <Footer/>
    </div>
  );
}
