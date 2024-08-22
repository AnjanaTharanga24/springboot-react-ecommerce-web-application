import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/addItem.css";
import axios from "axios";
import { UserContext } from "../components/UserContext";

export default function SellerAddNewItems() {
  const [item, setItem] = useState({
    name: "",
    price: 0,
    itemCategory: "",
  });

  const {user} = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
        const response = await axios.post(`http://localhost:8080/sellers/${user.id}/items`, item)
        setItem(response.data)
        console.log(response.data)
    } catch (error) {
        console.log("error while add item : " + error)
    }
  }

  return (
    <div>
      <Navbar />

      <div className="add-item-container container card p-4 shadow ">
        <form >
          <div className="form-group mb-3">
            <label className="mb-3 fs-5">Item name</label>
            <input
              type="text"
              className="form-control fs-5"
              placeholder="Enter item name"
              name="name"
              value={item.name}
              onChange={handleChange}
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
            >
              <option value="">Select item category</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="kids">Kids</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>
            <i className="fas fa-plus me-2"></i>
            add item
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
