import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/addItem.css";
import axios from "axios";
import { UserContext } from "../components/UserContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function SellerAddNewItems() {
  const [item, setItem] = useState({
    name: "",
    price: null,
    itemCategory: "",
  });

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (item.name === "" || item.price === 0 || item.itemCategory === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:8080/sellers/${user.id}/items`,
        item
      );
      setItem(response.data);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Item added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(response.data);
    } catch (error) {
      console.log("error while add item : " + error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add item. Please try again.",
      });
    }
  };

  const handleCancle = (e)=>{
      e.preventDefault();
      navigate('/seller/dashboard');
  }
  return (
    <div className="add-item-page">
      <Navbar />
      <div>
        <div className="add-item-container container card shadow ">
          <form>
            <div className="form-group mb-3">
              <label className="mb-3 fs-5">Item name</label>
              <input
                type="text"
                className="form-control fs-5"
                placeholder="Enter item name"
                name="name"
                value={item.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label className="mb-3 fs-5">Item price</label>
              <input
                type="number"
                className="form-control fs-5"
                placeholder="Enter item price"
                name="price"
                value={item.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label className="mb-3 fs-5" htmlFor="exampleInputEmail1">
                Item category
              </label>
              <select
                className="form-select fs-5"
                aria-label="Default select example"
                name="itemCategory"
                value={item.itemCategory}
                onChange={handleChange}
                required
              >
                <option value="">Select item category</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="kids">Kids</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            <div className="d-flex">
              <button
                type="submit"
                className="btn btn-primary mt-3"
                onClick={handleSubmit}
              >
                <i className="fas fa-plus me-2"></i>
                add item
              </button>

              <button
                type="submit"
                className="btn btn-danger mt-3"
                style={{ marginLeft: "480px" }}
                onClick={handleCancle}
              >
                cancle
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
