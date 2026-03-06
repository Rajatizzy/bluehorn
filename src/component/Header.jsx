import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../assets/img/Blue_Horn.png";

import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Headerele = [
  { path: "/", pathname: "Home" },
  { path: "/about", pathname: "About" },
  { path: "/product", pathname: "Product" },
  { path: "/contact", pathname: "Contact Us" },
];

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={sticky ? "header sticky" : "header"}>
      <div className="container">
        {/* ================= TOPBAR ================= */}
        <div className="topbar">
          <div className="container-lg">
            <div className="row align-items-center py-2">
              <div className="col-md-6 topbar-left">
                <IoCall className="me-2" /> +91 9876543210
                <span className="mx-3">|</span>
                <FaEnvelope className="me-2" /> info@example.com
              </div>

              <div className="col-md-6 text-md-end topbar-right">
                <a href="#" className="icn-top me-3">
                  <FaFacebookF />
                </a>
                <a href="#" className="icn-top me-3">
                  <FaTwitter />
                </a>
                <a href="#" className="icn-top">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP NAVBAR ================= */}
        <nav className="navbar navbar-expand-lg bg-col d-none d-lg-block">
          <div className="container-lg">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="logo" className="logo" />
            </NavLink>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                {Headerele.map((item, i) => (
                  <li className="nav-item" key={i}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      {item.pathname}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <NavLink to="/contact">
              <button className="animated-button">
                <span className="text">Contact Us</span>
              </button>
            </NavLink>
          </div>
        </nav>

        {/* ================= MOBILE NAVBAR ================= */}
        <nav className="navbar navbar-light d-lg-none">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="logo" style={{ maxHeight: "50px" }} />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
            >
              <FaBars />
            </button>

            <div className="offcanvas offcanvas-end" id="mobileMenu">
              <div className="offcanvas-header">
                <NavLink to="/">
                  <img src={logo} alt="logo" style={{ maxHeight: "45px" }} />
                </NavLink>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav mx-auto">
                  {Headerele.map((item, i) => (
                    <li className="nav-item" key={i}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        {item.pathname}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
