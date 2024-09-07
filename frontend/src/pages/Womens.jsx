import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cardImg1 from "../images/women.png";
import ratingImg from "../images/rating.png";
import "../css/womens.css";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
export default function Womens() {
  const [womens, setWomens] = useState([]);

  useEffect(() => {
    getWomensItems();
  }, []);

  const getWomensItems = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/sellers/items/female`
      );
      setWomens(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />

      <div className=" d-flex womens-bg ">
        {womens.map((item, index) => (
          <div key={index} className=" card womens-card shadow">
            <img src={cardImg1} className="womens-item-img" />
            <p className="card-title fs-3 mt-4">{item.name}</p>

            <div>
              <img src={ratingImg} className="rating-img" />
            </div>

            <div className="d-flex p-4 mt-3 ms-3 ">
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
