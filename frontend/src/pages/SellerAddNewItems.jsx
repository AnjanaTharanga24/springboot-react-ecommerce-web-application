import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/addItem.css";

export default function SellerAddNewItems() {
  return (
    <div>
      <Navbar />

      <div className="add-item-container container card p-4 shadow ">
        <form>
          <div className="form-group mb-3 fs-5">
            <label className="mb-3 " htmlFor="exampleInputEmail1">
              Item name
            </label>
            <input
              type="text"
              className="form-control fs-5"
              placeholder="Enter item name"
            />
          </div>

          <div className="form-group mb-3">
            <label className="mb-3 fs-5" htmlFor="exampleInputEmail1">
              Item price
            </label>
            <input
              type="number"
              className="form-control fs-5"
              placeholder="Enter item price"
            />
          </div>

          <div className="form-group mb-3">
          <label className="mb-3 fs-5" htmlFor="exampleInputEmail1">
              Item category
            </label>
          <select className="form-select fs-5" aria-label="Default select example">
            <option selected="">Select item category</option>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
            <option value={3}>Kids</option>
            <option value={4}>Accessories</option>

          </select>
          </div>

        

          <button type="submit" className="btn btn-primary mt-3">
          <i className="fas fa-plus me-2"></i>
            add item
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
