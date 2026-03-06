import React from "react";
import "../Contact-elements/contact.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import img1 from "../../assets/img/about-1.jpg";
import img2 from "../../assets/img/about-1.jpg";
import img3 from "../../assets/img/about-1.jpg";
import img4 from "../../assets/img/about-1.jpg";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="container">
        <div className="text-center mb-lg-5 mb-4">
          <span className="sub-txt text-center">CONTACT DETAILS</span>
          <h2 className="title text-animate text-center">
            Happy to Answer All{" "}
            <span className="highlight">Your Questions</span>
          </h2>
        </div>

        <div className="row g-4">
          {/* Address */}
          <div className="col-xl-3 col-md-6 col-lg-6">
            <div className="contact-card">
              <img src={img1} alt="" />
              <span className="icon-box1">
                <FaMapMarkerAlt />
              </span>

              <div className="contact-content">
                <h5>Our Addresses:</h5>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  123, Lorem Ipsum, Street no,
                  <br />
                  City, Country 123456
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-xl-3 col-md-6 col-lg-6">
            <div className="contact-card">
              <img src={img2} alt="" />
              <span className="icon-box1">
                <FaEnvelope />
              </span>

              <div className="contact-content">
                <h5>Emails:</h5>

                <a href="mailto:info@domainname.com">info@domainname.com</a>
                <br />

                <a href="mailto:sales@domainname.com">sales@domainname.com</a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="col-xl-3 col-md-6 col-lg-6">
            <div className="contact-card">
              <img src={img3} alt="" />
              <span className="icon-box1">
                <FaPhoneAlt />
              </span>

              <div className="contact-content">
                <h5>Phones:</h5>

                <a href="tel:+91123456789">(+0) 123 456 789</a>
                <br />

                <a href="tel:+91456123789">(+1) 456 123 789</a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="col-xl-3 col-md-6 col-lg-6">
            <div className="contact-card">
              <img src={img4} alt="" />

              <div className="contact-content">
                <h5>Follow Us:</h5>

                <div className="social-icons">
                  <a href="#">
                    <FaFacebookF />
                  </a>

                  <a href="#">
                    <FaTwitter />
                  </a>

                  <a href="#">
                    <FaLinkedinIn />
                  </a>

                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
