import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";
import logo from "../assets/img/Blue_Horn_Logo__HD.png";
import logo2 from "../assets/img/Blue_Horn_Logo__HD.png";

import {
  FaChevronDown,
  FaLinkedinIn,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

import { IoCall } from "react-icons/io5";

const Headerele = [
  { path: "/", pathname: "Home" },
  { path: "/about", pathname: "About" },

  {
    pathname: "Services",
    dropdown: [
      { path: "/services/energy-audits", name: "Energy Analysis" },
      { path: "/services/finance-liaison", name: "Finance & Liaison" },
      {
        path: "/services/operation-maintenance",
        name: "Operation & Maintenance",
      },
      { path: "/services/design-consultation", name: "Design & Consultation" },
      { path: "/services/construction-pmc", name: "Construction & PMC" },
      {
        path: "/services/credits-esg-consultation",
        name: "Credits & ESG Consultation",
      },
    ],
  },

  { path: "/blog", pathname: "Blog" },
];

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [openService, setOpenService] = useState(null);
  const location = useLocation(); // ✅ route detect

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ✅ MOBILE CLOSE */
  const closeMenu = () => {
    const offcanvasEl = document.getElementById("mobileMenu");
    if (!offcanvasEl) return;

    const offcanvas =
      window.bootstrap?.Offcanvas.getOrCreateInstance(offcanvasEl);

    offcanvas.hide();
  };

  /* ✅ ROUTE CHANGE → DESKTOP DROPDOWN CLOSE */
  useEffect(() => {
    document.querySelectorAll(".dropdown").forEach((el) => {
      el.classList.remove("show");
      const menu = el.querySelector(".dropdown-menu");
      if (menu) menu.classList.remove("show");
    });
  }, [location]);

  return (
    <header className={sticky ? "header sticky" : "header"}>
      <div className="container">
        {/* TOPBAR */}
        <div className="topbar">
          <div className="container-lg">
            <div className="row align-items-center py-2">
              <div className="col-md-6 topbar-left">
                <IoCall className="me-2" />
                +91 6293122232
                <span className="mx-3">|</span>
                <FaEnvelope className="me-2" />
                gogreen@bluehorntechnologies.com
              </div>

              <div className="col-md-6 text-md-end topbar-right">
                <a
                  href="https://in.linkedin.com/company/bhtsolar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icn-top me-5"
                >
                  <FaLinkedinIn />
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
                  <li
                    key={i}
                    className={`nav-item ${item.dropdown ? "dropdown" : ""}`}
                    onMouseEnter={(e) => {
                      if (item.dropdown) {
                        e.currentTarget.classList.add("show");
                        const menu =
                          e.currentTarget.querySelector(".dropdown-menu");
                        if (menu) menu.classList.add("show");
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (item.dropdown) {
                        e.currentTarget.classList.remove("show");
                        const menu =
                          e.currentTarget.querySelector(".dropdown-menu");
                        if (menu) menu.classList.remove("show");
                      }
                    }}
                  >
                    {item.dropdown ? (
                      <>
                        <span className="nav-link dropdown-toggle">
                          {item.pathname}
                        </span>

                        <ul className="dropdown-menu">
                          {item.dropdown.map((sub, index) => (
                            <li key={index}>
                              <NavLink className="dropdown-item" to={sub.path}>
                                {sub.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        {item.pathname}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <a href="/#frm">
              <button className="animated-button fade-animate-up">
                <span className="text">Contact Us</span>
              </button>
            </a>
          </div>
        </nav>

        {/* ================= MOBILE NAVBAR ================= */}

        <nav className="navbar navbar-light d-lg-none">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={logo2} alt="logo" className="logo mobile-logo" />
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
                <NavLink to="/" onClick={closeMenu}>
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
                      {item.dropdown ? (
                        <>
                          <span
                            className={`nav-link mobile-service-toggle ${
                              openService === i ? "active" : ""
                            }`}
                            onClick={() =>
                              setOpenService(openService === i ? null : i)
                            }
                          >
                            {item.pathname}
                            <FaChevronDown
                              className={openService === i ? "rotate-icon" : ""}
                            />
                          </span>

                          <ul
                            className={`mobile-submenu ${
                              openService === i ? "show-submenu" : ""
                            }`}
                          >
                            {item.dropdown.map((sub, index) => (
                              <li key={index}>
                                <NavLink
                                  to={sub.path}
                                  className="nav-link"
                                  onClick={closeMenu}
                                >
                                  {sub.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                          }
                          onClick={closeMenu}
                        >
                          {item.pathname}
                        </NavLink>
                      )}
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
