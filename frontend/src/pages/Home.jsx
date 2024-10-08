import React from "react";
import Navbar from "../components/Navbar";
import "../css/home.css";
import cardOneImage from "../images/women.png";
import cardTwoImage from "../images/mens.png";
import cardThreeImage from "../images/kids.png";
import cardFourImage from "../images/cosmetics.png.png";
import cardFiveImage from "../images/accessories.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App home">
      <Navbar />

      <div className=" d-flex justify-content-center">
        <div className="card card-one col-lg-4">
          <div className="">
            <div className="card-one-title">
              <p>Women' Fashion</p>
            </div>

            <div className=" card-one-paragraph">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Libero, aperiam expedita! Saepe officiis mollitia omnis velit
                enim, consequuntur, illo provident sapiente amet explicabo,
                blanditiis maiores asperiores obcaecati repellat sed
                repudiandae.
              </p>
              <Link to="/womens-fashion">
              <button className="btn btn-success card-one-button">
                SHOP NOW
              </button>
              </Link>
            </div>
            <img src={cardOneImage} alt="Example" className="card-img-top " />
          </div>
        </div>

        <div className="">
          <div className="d-flex">
            <div className="card  card-two col-lg-4 ">
              <div className="">
                <div className="card-two-title">
                  <p>Men's Fashion</p>
                </div>

                <div className=" card-two-paragraph">
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    {" "}
                  </p>
                   <Link to="/mens-fashion">
                  <button className="btn btn-success card-two-button">
                    SHOP NOW
                  </button>
                  </Link>
                </div>
                <img
                  src={cardTwoImage}
                  alt="Example"
                  className="card2-img-top "
                />
              </div>
            </div>
            
            <div className="card  card-two col-lg-4 ">
              <div className="">
                <div className="card-two-title">
                  <p>Kid's Fashion</p>
                </div>

                <div className=" card-two-paragraph">
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas{" "}
                  </p>
                  <Link to="/kids-fashion">
                  <button className="btn btn-success card-two-button">
                    SHOP NOW
                  </button>
                  </Link>
                </div>
                <img
                  src={cardThreeImage}
                  alt="Example"
                  className="card3-img-top "
                />
              </div>
            </div>{" "}
          </div>

          <div className="d-flex card-sec-two">
            <div className="card  card-two col-lg-4 ">
              <div className="">
                <div className="card-four-title">
                  <p>Cosmetics</p>
                </div>

                <div className=" card-two-paragraph">
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas{" "}
                  </p>

                  <Link to="/cosmetics">
                  <button className="btn btn-success card-two-button">
                    SHOP NOW
                  </button>
                  </Link>
                </div>
                <img
                  src={cardFourImage}
                  alt="Example"
                  className="card4-img-top "
                />
              </div>
            </div>{" "}
            <div className="card card-two col-lg-4 ">
              <div className="">
                <div className="card-five-title">
                  <p>Accessories</p>
                </div>

                <div className=" card-two-paragraph">
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas{" "}
                  </p>

                  <Link to="/accessories-fashion">
                  <button className=" btn btn-success card-two-button">
                    SHOP NOW
                  </button>
                  </Link>
                </div>
                <img
                  src={cardFiveImage}
                  alt="Example"
                  className="card5-img-top "
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
