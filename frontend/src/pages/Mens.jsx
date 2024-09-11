import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { FaShoppingCart } from "react-icons/fa";
import Navbar from "../components/Navbar";
import cardImg1 from "../images/mens.png";
import ratingImg from "../images/rating.png";
import "../css/womens.css";
import axios from "axios";

export default function Mens() {
  const [mens, setMens] = useState([]);
  let [quantity, setQuantity] = useState(0);

  useEffect(() => {
    getMensItems();
  }, []);
  const getMensItems = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/sellers/items/male`
      );
      setMens(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlusButton = () => {
    let i = quantity + 1;
    if (i > 10) {
      alert("you can only add only 10 items at once ");
    } else {
      setQuantity(i);
    }
  };

  const handleMinusButton = () => {
    let i = quantity - 1;
    if (i < 0) {
      alert("Quantity cannot be less than 0");
    } else {
      setQuantity(i);
    }
  };
  return (
    <div>
      <Navbar />

      <div className="row d-flex womens-bg">
        {mens.map((item, index) => (
          <div
            key={index}
            className=" card womens-card shadow mb-4"
            style={{ height: "620px" }}
          >
            <img src={cardImg1} className="womens-item-img" />
            <p className="card-title fs-3 mt-4">{item.name}</p>

            <div>
              <img src={ratingImg} className="rating-img" />
            </div>

            <di className="d-flex mt-3" style={{ marginLeft: "70px" }}>
              <div>
                <p className="fs-4 ">Quantity:</p>
              </div>

              <div className="" style={{ marginLeft: "50px" }}>
                <button
                  className=" plus-btn"
                  style={{ marginRight: "10px" }}
                  onClick={handlePlusButton}
                >
                  +
                </button>
                <span className="fs-3" style={{ marginRight: "10px" }}>
                  {quantity}
                </span>
                <button className=" minus-btn" onClick={handleMinusButton}>
                  -
                </button>
              </div>
            </di>

            <div className="d-flex p-4 ms-3 ">
              <div>
                <button className="btn btn-dark ">
                  <FaShoppingCart /> Add to Cart{" "}
                </button>
              </div>

              <div className="">
                <p className="card-price ">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
