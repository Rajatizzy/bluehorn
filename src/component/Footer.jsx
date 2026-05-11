// src/components/Footer.jsx

import logo from "../assets/img/Blue_Horn.png";
// import logo from "../assets/img/Blue-Horn-Logo.png";
// import logo from "../assets/img/Blue-Horn-Solar-logo.png";
import { FaWhatsapp } from "react-icons/fa";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  // FaFacebookF,
  FaLinkedinIn,
  // FaTwitter,
  // FaInstagram,
} from "react-icons/fa";

const topContacts = [
  {
    title: "Support & Email",
    value: "gogreen@bluehorntechnologies.com",
    icon: <FaEnvelope />,
  },
  {
    title: "Customer Support",
    value: "+91 6293122232",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Our Location",
    value: "Unit 14B, Globsyn Crystals, Sector -5, Salt Lake, kolkata 700091",
    icon: <FaMapMarkerAlt />,
  },
];

const quickLinks = ["Home", "About Us", "Services", "Blog", "Contact Us"];

const services = [
  "Hybrid Energy",
  "Renewable Energy",
  "Solar Maintenance",
  "Solar PV Systems",
  "Solar Solutions",
];

const usefulLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Warranty",
  "Support",
  "Damage Policy",
];

const socials = [
  // <FaFacebookF />,
  <FaLinkedinIn />,
  // <FaTwitter />,
  // <FaInstagram />,
];

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        {/* FOOTER TOP (NOW 4 GRID ITEMS) */}
        <div className="footer-top">
          {/* BRAND SECTION */}
          <div className=" brand-item">
            <img src={logo} alt="Solor Logo" className="footer-logo" />

            <p className="py-3">
              Powering industries, businesses, and homes across India with clean
              solar energy.
            </p>

            <div className="socials">
              <h5>Social Link</h5>
              <a href="https://in.linkedin.com/company/bhtsolar">
                {socials.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </a>
            </div>
          </div>

          {/* CONTACT ITEMS */}
          {topContacts.map((item, i) => (
            <div className="top-item" key={i}>
              <span className="f-icn">{item.icon}</span>
              <div>
                <h5>{item.title}</h5>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CONTENT */}
        {/* <div className="footer-content">
          <div>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Useful Links</h4>
            <ul>
              {usefulLinks.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div> */}

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          Copyright © {new Date().getFullYear()} Bluehorn. All rights reserved.
        </div>
      </div>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/916293122232?text=Hello%20BlueHorn%20Team%2C%20I%20want%20to%20know%20more"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}
