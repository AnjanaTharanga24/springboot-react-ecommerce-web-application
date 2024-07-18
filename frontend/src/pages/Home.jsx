import React from "react";
import Navbar from "../components/Navbar";
import "../css/home.css";

export default function Home() {
  return (
    <div className="App">
      <Navbar />

      <div className=" d-flex">
        <div className="card shadow card-one col-lg-4 ">
          
        </div>

        <div className="">
          <div className="d-flex">
            <div className="card shadow card-two col-lg-4 ">
              
            </div>
            <div className="card shadow card-two col-lg-4 ">
              
            </div>
          </div>
          <div className="d-flex card-sec-two">
            <div className="card shadow card-two col-lg-4 ">
              
            </div>
            <div className="card shadow card-two col-lg-4 ">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
