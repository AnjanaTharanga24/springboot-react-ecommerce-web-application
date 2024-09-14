import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

export default function Cart() {
  return (
    <div>
      <Navbar />

      <div
        className=" mt-5"
        style={{ marginLeft: "400px", marginBottom: "-200px" }}
      >
        <div className="d-flex p-3">
          <div className="">
            <p className="fs-3">Item name</p>
          </div>

          <div className="" style={{ marginLeft: "180px" }}>
            <p className="fs-3 me-5">Category</p>
          </div>
          <div className="" style={{ marginLeft: "110px" }}>
            <p className="fs-3 me-5">Quantity</p>
          </div>
          <div style={{ marginLeft: "100px" }}>
            <p className="fs-3 ">Price</p>
          </div>
        </div>

        <div className="d-flex">
          <div
            className="d-flex  p-1  mb-3"
            style={{ width: "940px", backgroundColor: "rgb(211, 219, 203)"  }}
          >

            <div className="d-flex mt-3">
            <div className="" style={{ marginLeft: "20px" }}>
              <p
                className="fs-4  "
                style={{ width: "200px", textAlign: "start" }}
              >
                clothes
              </p>
            </div>
            <div style={{ marginLeft: "125px" }}>
              <p className="fs-4">male</p>
            </div>
            <div
              className=""
              style={{ marginLeft: "190px", marginTop: "-4px" }}
            >
              <button className="plus-btn" style={{ marginRight: "10px" , borderColor: "rgb(211, 219, 203)"}}>
                +
              </button>
              <span className="fs-5" style={{ marginRight: "10px" }}>
                10
              </span>
              <button className="minus-btn" style={{ borderColor: "rgb(211, 219, 203)" }}>-</button>
            </div>

            <div className="fs-4" style={{ marginLeft: "145px" }}>
              <p>200 $</p>
            </div>
            </div>
            


          </div>
          <div>
            <button className="remove-btn fs-2 text-danger ms-3 " style={{height: "74px",width: "65px", borderColor: "rgb(211, 219, 203)"}}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="d-flex  p-1  mb-3"
            style={{ width: "940px", backgroundColor: "rgb(211, 219, 203)"  }}
          >

            <div className="d-flex mt-3">
            <div className="" style={{ marginLeft: "20px" }}>
              <p
                className="fs-4  "
                style={{ width: "200px", textAlign: "start" }}
              >
                clothes
              </p>
            </div>
            <div style={{ marginLeft: "125px" }}>
              <p className="fs-4">male</p>
            </div>
            <div
              className=""
              style={{ marginLeft: "190px", marginTop: "-4px" }}
            >
              <button className="plus-btn" style={{ marginRight: "10px" , borderColor: "rgb(211, 219, 203)"}}>
                +
              </button>
              <span className="fs-5" style={{ marginRight: "10px" }}>
                10
              </span>
              <button className="minus-btn" style={{ borderColor: "rgb(211, 219, 203)" }}>-</button>
            </div>

            <div className="fs-4" style={{ marginLeft: "145px" }}>
              <p>200 $</p>
            </div>
            </div>
            


          </div>
          <div>
            <button className="remove-btn fs-2 text-danger ms-3 " style={{height: "74px",width: "65px", borderColor: "rgb(211, 219, 203)"}}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        
      </div>

      <Footer />
    </div>
  );
}
