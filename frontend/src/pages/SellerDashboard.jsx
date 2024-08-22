import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/sellerDashboard.css";
import { Link } from "react-router-dom";

export default function SellerDashboard() {
  return (
    <div className="sd-dashboard">
      <Navbar />

      <div className="d-flex justify-content-center sd-main-content">
        <div className="sd-card sd-my-items">
          <div className="sd-card-content">
            <i className="fas fa-box-open sd-card-icon"></i>
            <h1 className="sd-card-title">My items</h1>
          </div>
        </div>

        <Link to="/seller/add-new-items" style={{ textDecoration: 'none' }}>
          <div className="sd-card sd-new-items">
            <div className="sd-card-content">
              <i className="fas fa-plus-circle sd-card-icon"></i>
              <h1 className="sd-card-title">Add new items</h1>
            </div>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
