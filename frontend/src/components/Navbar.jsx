import React, { useContext, useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);

  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <button
            data-mdb-collapse-init=""
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="#">
                  Shopping Cart
                </a>
              </li>
            </ul>

            <div className="d-flex nav-content">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white fs-5" href="#">
                    Home
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white fs-5" href="#">
                    Men's
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white fs-5" href="#">
                    Women's
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white fs-5" href="#">
                    Kids
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center left-icon">
              {!user && (
                <>
                  <Link to="/login">
                    <button
                      data-mdb-ripple-init=""
                      type="button"
                      className="btn btn-success me-3"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button
                      data-mdb-ripple-init=""
                      type="button"
                      className="btn btn-primary me-3"
                    >
                      Sign up
                    </button>
                  </Link>
                </>
              )}

              {user && (
                <>
                  <a href="#" className="text-white me-3" onClick={toggleDropdown}>
                    <i className="fas fa-user fs-5"></i>
                    <span className="username text-white fs-5">{user.username}</span>
                    <span className="dropdown-arrow text-white fs-4">▼</span>
                    {dropdownOpen && (
                  <div className="dropdown-content show">
                     <Link to="/student-profile">
                      My profile
                    </Link>
                    <Link to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                   
                  </div>
                  
                )}
                  </a>
                  <a href="#" className="text-white p-2">
                    <i className="fas fa-shopping-cart fs-5"></i>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
