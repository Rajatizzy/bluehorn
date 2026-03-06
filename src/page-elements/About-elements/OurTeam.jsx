import React from "react";
import "../About-elements/about.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import team from "../../assets/img/about-1.jpg";

const OurTeam = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-title text-center">
          <span className="sub-txt text-center">OUR TEAM</span>
          <h2 className="title text-animate text-center">
            Meet Our <span className="highlight"> Expert</span>
          </h2>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img src={team} alt="team" />
          </div>

          <div className="team-info">
            <h3>Rahul Sharma</h3>
            <h5>Solar Energy Specialist</h5>

            <p>
              Our experienced solar specialist ensures efficient solar EPC
              solutions for industries, commercial establishments and
              residential sectors.
            </p>

            <div className="team-social">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
