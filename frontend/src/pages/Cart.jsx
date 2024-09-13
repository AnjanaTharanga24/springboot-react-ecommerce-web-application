import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  return (
    <div>
      <Navbar />

      <div className=" mt-5" style={{ marginLeft: "500px" , marginBottom:"-200px"}}>
        <div className="d-flex p-3">
          <div className="">
            <p className="fs-3">Item name</p>
          </div>

          <div className="" style={{ marginLeft: "110px" }}>
            <p className="fs-3 me-5">Category</p>
          </div>
          <div className="" style={{ marginLeft: "110px" }}>
            <p className="fs-3 me-5">Quantity</p>
          </div>
          <div style={{ marginLeft: "100px" }}>
            <p className="fs-3 " >Price</p>
          </div>
        </div>

        <div className="d-flex  p-3 mb-3" style={{width:"990px" , backgroundColor:"rgb(211, 219, 203)"}}>
          <div  style={{ marginLeft: "20px" }}>
            <p className="fs-4">clothes</p>
          </div>
          <div style={{ marginLeft: "220px" }}>
          <p className="fs-4">male</p>
          </div>
          <div className="" style={{ marginLeft: "190px" , marginTop:"-4px"}}>
                <button
                  className="plus-btn"
                  style={{ marginRight: "10px" }}
                >
                  +
                </button>
                <span className="fs-5" style={{ marginRight: "10px" }}>
                  10
                </span>
                <button 
                  className="minus-btn" 
                  
                >
                  -
                </button>
              </div>

              <div className="fs-4" style={{ marginLeft: "130px" }}>
                <p>200 $</p>
              </div>
        </div>

        <div className="d-flex  p-3 mb-3" style={{width:"990px" , backgroundColor:"rgb(211, 219, 203)"}}>
          <div  style={{ marginLeft: "20px" }}>
            <p className="fs-4">clothes</p>
          </div>
          <div style={{ marginLeft: "220px" }}>
          <p className="fs-4">male</p>
          </div>
          <div className="" style={{ marginLeft: "190px" , marginTop:"-4px"}}>
                <button
                  className="plus-btn"
                  style={{ marginRight: "10px" }}
                >
                  +
                </button>
                <span className="fs-5" style={{ marginRight: "10px" }}>
                  10
                </span>
                <button 
                  className="minus-btn" 
                  
                >
                  -
                </button>
              </div>

              <div className="fs-4" style={{ marginLeft: "130px" }}>
                <p>200 $</p>
              </div>
        </div>
        <div className="d-flex  p-3 mb-3" style={{width:"990px" , backgroundColor:"rgb(211, 219, 203)"}}>
          <div  style={{ marginLeft: "20px" }}>
            <p className="fs-4">clothes</p>
          </div>
          <div style={{ marginLeft: "220px" }}>
          <p className="fs-4">male</p>
          </div>
          <div className="" style={{ marginLeft: "190px" , marginTop:"-4px"}}>
                <button
                  className="plus-btn"
                  style={{ marginRight: "10px" }}
                >
                  +
                </button>
                <span className="fs-5" style={{ marginRight: "10px" }}>
                  10
                </span>
                <button 
                  className="minus-btn" 
                  
                >
                  -
                </button>
              </div>

              <div className="fs-4" style={{ marginLeft: "130px" }}>
                <p>200 $</p>
              </div>
        </div>

       

      </div>

      <Footer />
    </div>
  );
}
