import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { FaShoppingCart } from "react-icons/fa";
import Navbar from "../components/Navbar";
import cardImg1 from "../images/mens.png";
import ratingImg from "../images/rating.png";
import "../css/womens.css";
import axios from "axios";
import { UserContext } from "../components/UserContext";

export default function Mens() {
  const [mens, setMens] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getMensItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const cartRequest = {
        itemName: item.name,
        quantity: item.quantity
      };

      const response = await axios.post(`http://localhost:8080/buyer/${user.id}/addtocart`, cartRequest);
      console.log("Item added to cart : ", response.data);
      alert("Item added to cart successfully!");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    }
  };

  const getMensItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/sellers/items/male`);
      const mensWithQuantity = response.data.map(item => ({
        ...item,
        quantity: 0
      }));
      setMens(mensWithQuantity);
      console.log(mensWithQuantity);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange = (index, change) => {
    setMens(prevMens => {
      const newMens = [...prevMens];
      const newQuantity = newMens[index].quantity + change;
      
      if (newQuantity >= 0 && newQuantity <= 10) {
        newMens[index] = { ...newMens[index], quantity: newQuantity };
      } else if (newQuantity > 10) {
        alert("You can only add up to 10 items at once");
      } else {
        alert("Quantity cannot be less than 0");
      }
      
      return newMens;
    });
  };

  return (
    <div>
      <Navbar />

      <div className="row d-flex womens-bg">
        {mens.map((item, index) => (
          <div
            key={index}
            className="card womens-card shadow mb-4"
            style={{ height: "620px" }}
          >
            <img src={cardImg1} className="womens-item-img" alt={item.name} />
            <p className="card-title fs-3 mt-4">{item.name}</p>

            <div>
              <img src={ratingImg} className="rating-img" alt="rating" />
            </div>

            <div className="d-flex mt-3" style={{ marginLeft: "70px" }}>
              <div>
                <p className="fs-4">Quantity:</p>
              </div>

              <div className="" style={{ marginLeft: "50px" }}>
                <button
                  className="plus-btn"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleQuantityChange(index, 1)}
                >
                  +
                </button>
                <span className="fs-3" style={{ marginRight: "10px" }}>
                  {item.quantity}
                </span>
                <button 
                  className="minus-btn" 
                  onClick={() => handleQuantityChange(index, -1)}
                >
                  -
                </button>
              </div>
            </div>

            <div className="d-flex p-4 ms-3 ">
              <div>
                <button className="btn btn-dark" onClick={() => addToCart(item)} disabled={item.quantity === 0}>
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>

              <div className="">
                <p className="card-price">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}