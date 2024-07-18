import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

export default function Login() {
    const navigate = useNavigate();

    const handleCancleLogin = (e) =>{
        e.preventDefault()
        navigate('/')
    }
  return (
    <div>
      <div className="card form-login-card shadow ">
        <div className="mb-4">
          <h1>Sign In</h1>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address / User name
            </label>
            <input type="email" className="form-control" id="email" placeholder="enter email or password" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" placeholder="enter password"/>
          </div>

          <div className="mt-4">
            <p>Don't have an account? <a href="/register">register</a></p>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            <button type="submit" className="btn btn-danger" onClick={handleCancleLogin}>
              Cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
