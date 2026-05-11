import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import img from "../assets/img/blu6.jpg";

const CTA = () => {
  return (
    <div className="container">
      <div className="cta-box">
        <img src={img} alt="cta" />

        <div className="cta-content">
          <a
            href="https://wa.me/916293122232"
            target="_blank"
            rel="noopener noreferrer"
            className="frdf"
          >
            <div className="cta-icon">
              <FaWhatsapp />
            </div>
          </a>

          <div>
            <h4>Ready to Make the Switch to Solar?</h4>
            <p className="para">
              Connect with us for a free consultation and take the first step
              toward energy independence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
