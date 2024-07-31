import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import '../css/profile.css'
import profileImage from '../images/profile2.jpg'
import { UserContext } from '../components/UserContext'
import axios from 'axios'

export default function UserProfile() {
 const { user } = useContext(UserContext);
 console.log(user);

  return (
    <div className='user-profile'>
        <Navbar/>
        <div className=" d-flex profile-card ">
        <div className="shadow profile-image-card ">
          <img src={profileImage} className="profile-image" />
          <p className="profile-name">{user.username}</p>
          <div className="p-4">
            <Link to='/user-profile-update'>
            <button className="btn btn-primary edit-btn ">Edit profile</button>
            </Link>
            <button className="btn btn-danger delete-btn" >
              Delete account
            </button>
          </div>
        </div>
        <div className="d-flex shadow profile-details-card  text-start">
            <div className="main-text fs-2">
                <div className="p-1">
                    <label>Name</label>
                </div>
                <div className="p-1">
                    <label>Username</label>
                </div>
                <div className="p-1">
                    <label>Date of birth</label>
                </div>
                <div className="p-1">
                    <label>Gender</label>
                </div>
                <div className="p-1">
                    <label>Role</label>
                </div>
                <div className="p-1">
                    <label>Mobile</label>
                </div>
                <div className="p-1">
                    <label>Email</label>
                </div>
                
            </div>
            <div className="value-text fs-2">
                <div className="p-1">
                    <label >{user.name}</label>
                </div>
                <div className="p-1">
                    <label>{user.username}</label>
                </div>
                <div className="p-1">
                    <label>{user.dob}</label>
                </div>
                <div className="p-1">
                    <label>{user.gender}</label>
                </div>
                <div className="p-1">
                    <label> {user.roles && user.roles.map(role => role.name)}</label>
                </div>
                <div className="p-1">
                    <label>{user.number}</label>
                </div>
                <div className="p-1">
                    <label>{user.email}</label>
                </div>
                <div className="p-1">
                    <label></label>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
