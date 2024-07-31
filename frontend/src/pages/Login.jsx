import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import axios from "axios";
import {UserContext} from "../components/UserContext";

export default function Login() {
   const [username , setUsername] = useState('');
   const [password , setPassword] = useState('');
   const {setUser} = useContext(UserContext);
   const navigate = useNavigate();

   const handleSubmit = async (e) =>{
    e.preventDefault()
       try {
        const response = await axios.post('http://localhost:8080/login' ,{
          username,
          password
        })
        setUser(response.data.user)
    
        navigate('/')
       } catch (error) {
         console.log("login error : " , error)
       }
   }

    const handleCancleLogin = (e) =>{
        e.preventDefault()
        navigate('/')
    }
  return (
    <div className="login-page">
      <div className="card form-login-card shadow ">
        <div className="mb-4">
          <h1>Sign In</h1>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label ">
              Email address / User name
            </label>
            <input type="text" className="form-control login-form-control" id="email" placeholder="enter email or password" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control login-form-control" id="password" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="mt-4">
            <p>Don't have an account? <a href="/register">register</a></p>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
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
