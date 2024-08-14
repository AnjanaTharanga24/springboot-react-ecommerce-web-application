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
    <div className="login-container">
    <div className="login-card">
      <h1 className="login-header">Sign In</h1>
      <form>
        <label className="login-label" htmlFor="email">
          Email address / User name
        </label>
        <input className="login-input" type="text" id="email" placeholder="Enter email or username" value={username} onChange={(e) => setUsername(e.target.value)} />
  
        <label className="login-label" htmlFor="password">
          Password
        </label>
        <input className="login-input" type="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  
        <div className="login-footer">
          <p>Don't have an account? <a className="login-link" href="/register">Register</a></p>
        </div>
  
        <button className="login-button login-button-primary" type="submit" onClick={handleSubmit}>
          Sign in
        </button>
        <button className="login-button login-button-secondary" type="button" onClick={handleCancleLogin}>
          Cancel
        </button>
      </form>
    </div>
  </div>
  );
}
