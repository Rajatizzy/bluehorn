import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import img from "../assets/img/cta-image.jpg";

const CTA = () => {
  return (
    <div className="container">
      <div className="cta-box">
        <img src={img} alt="cta" />

        <div className="cta-content">
          <a href="tel:+919876543210" className="frdf">
            <div className="cta-icon">
              <FaPhoneAlt />
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
