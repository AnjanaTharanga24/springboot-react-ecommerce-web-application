import React, { useContext, useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../components/UserContext"; // Adjust this path if needed

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    console.log("Dropdown toggled. New state:", !dropdownOpen); // Debug log
  };

  const roleNames = user?.roles?.map(role => role.name) || [];
  console.log("user role names: ", roleNames); // Log user role names for debugging

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark"
        style={{
          boxShadow: "0 4px 20px rgba(255, 255, 255, 0.)",
        }}
      >
        <div className=" ">
          <div className="navbar-collapse ">
            <ul className="nav-title" style={{ marginRight: "100px" }}>
              <li className="">
                <a className="nav-link text-white fs-4 mt-3" href="#">
                  Shopping Cart
                </a>
              </li>
            </ul>

            <div className="d-flex navbar-items">
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

            <div className="d-flex left-icon" style={{ marginLeft: "700px" }}>
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
                  <a href="#" className="text-white p-2 cart-icon">
                    <i className="fas fa-shopping-cart shopping-cart"></i>
                  </a>

                  <div
                    className="text-white user-icon d-flex align-items-center me-2"
                    onClick={toggleDropdown}
                  >
                    <i className="fas fa-user fs-5"></i>
                    <span className="username text-white fs-5">
                      {user.username}
                    </span>
                    <span className="dropdown-arrow text-white fs-5">▼</span>
                    {dropdownOpen && (
                      <div className="dropdown-content show">
                        <ul className="list-unstyled m-0 p-0">
                          <li>
                            <Link to="/user-profile" className="dropdown-item text-dark">
                              My profile
                            </Link>
                          </li>
                          {roleNames.includes("seller") && (
                            <li>
                              <Link to="/seller/dashboard" className="dropdown-item text-dark">
                                Seller Dashboard
                              </Link>
                            </li>
                          )}
                          {roleNames.includes("buyer") && (
                            <li>
                              <Link to="/buyer/profile" className="dropdown-item text-dark">
                                Buyer Profile
                              </Link>
                            </li>
                          )}
                          <li>
                            <Link to="/" onClick={handleLogout} className="dropdown-item text-dark">
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
