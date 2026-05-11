import { FaCheckCircle } from "react-icons/fa";
import img1 from "../../assets/img/about-1.jpg";
import img2 from "../../assets/img/about-2.jpg";
import { Link } from "react-router-dom";
// import "./about.css";

const AboutSection = () => {
  return (
    <section className="about-sec">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT IMAGES */}
          <div className="col-lg-6">
            <div className="about-images">
              <img src={img1} className="about-img-main reveal-left" alt="" />
              <img src={img2} className="about-img-small reveal-left" alt="" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <span className="sub-txt">ABOUT US</span>
            <h2 className="title text-animate">
              Where Engineering Expertise Meets{" "}
              <span className="highlight">Clean Energy Innovation</span>
            </h2>

            <p
              className="para  mb-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              At Blue Horn Technologies, solar energy is more than a service, it
              is a commitment. We engineer, finance, construct, and maintain
              solar plants across residential, commercial, and industrial
              segments through a fee model that eliminates hidden mark-ups.
              Rooted in transparency and driven by expertise, every project we
              undertake is a step toward a cleaner, more energy-independent
              future.
              <br />
              <br />
              <strong style={{ fontSize: "22px" }}>
                We are motivated by one vision, turning every brown and dusty
                rooftop into something green and clean for generations to come.
              </strong>
            </p>

            {/* <div className="about-list">
              <p>
                <FaCheckCircle /> Fixed-Service fees EPC Model
              </p>
              <p>
                <FaCheckCircle /> End-to-End Project Delivery
              </p>
              <p>
                <FaCheckCircle /> Multi-Sector Solar Expertise
              </p>
              <p>
                <FaCheckCircle /> Lifelong Client Partnerships
              </p>
            </div> */}

            <Link to="/about">
              <button className="animated-button fade-animate-up">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span className="text">Read More</span>

                <span className="circle"></span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
