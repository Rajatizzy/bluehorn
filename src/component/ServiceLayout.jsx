import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../data/servicesData";
import PageBanner from "./PageBanner";
import "../component/service.css";
import helpImg from "../assets/img/about-1.jpg";
import helpImg1 from "../assets/img/service-2.jpg";
// import OutlineHeading from "../page-elements/Home-elements/OutlineHeading";

import { FaWhatsapp, FaCheckCircle, FaChevronDown } from "react-icons/fa";

const ServiceLayout = ({ service }) => {
  const { slug } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  // safety check
  if (!service) return null;

  return (
    <>
      <PageBanner title={service.title} image={service.banner} />

      <section className="service-page">
        <div className="container">
          <div className="row">
            {/* LEFT SIDEBAR */}

            <div className="col-lg-4">
              <div className="service-sidebar">
                <ul className="service-menu">
                  {Object.entries(services).map(([key, item]) => (
                    <li key={key} className={slug === key ? "active" : ""}>
                      <Link to={`/services/${key}`}>{item.title}</Link>
                    </li>
                  ))}
                </ul>

                {/* Help Card */}

                <div className="service-help-card">
                  <div className="help-image">
                    <img src={helpImg1} alt="help" />
                  </div>

                  <a
                    href="https://wa.me/916293122232?text=Hello%20I%20need%20professional%20help"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="help-icon-circle"
                  >
                    <FaWhatsapp />
                  </a>

                  <div className="help-content">
                    <h6>Get Professional Help</h6>
                    <p className="help-phone">
                      <a
                        href="https://wa.me/916293122232?text=Hello%20I%20need%20professional%20help"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (+91) 62931 22232
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="col-lg-8">
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid new-po mb-4"
              />

              <p className="para" data-aos="fade-up" data-aos-duration="1200">
                {service.description1}
              </p>
              <p
                className="para pt-2"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {service.description2}
              </p>

              {/* Benefits */}
              <h4 className="title pb-4 pt-3">
                {service.benefitsTitle.split(service.benefitsHighlight)[0]}
                <span className="highlight">{service.benefitsHighlight}</span>
                {service.benefitsTitle.split(service.benefitsHighlight)[1]}
              </h4>

              <div className="benefits-grid">
                {service.benefits?.map((item, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon">
                      <FaCheckCircle />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              {/* Planning Section */}

              <div className="planning-wrapper">
                <div className="planning-grid">
                  <div className="planning-image">
                    <img src={service.planningImage} alt="planning" />
                  </div>

                  <div className="planning-content">
                    <h4 className="title">{service.planningTitle}</h4>

                    <p>{service.planningText}</p>

                    <ul className="planning-list">
                      {service.planningList?.map((item, index) => (
                        <li key={index}>
                          <FaCheckCircle className="plan-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}

              <div className="faq-section">
                <h3 className="title mb-4">
                  Frequently Asked <span className="highlight">Questions</span>
                </h3>
                {service.faq?.map((item, index) => (
                  <div key={index} className="faq-item">
                    <div
                      className={`faq-question ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                    >
                      {item.question}
                      <FaChevronDown />
                    </div>

                    {activeIndex === index && (
                      <div className="faq-answer">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solar-process-section">
        <div className="container">
          <div className="solar-process-grid">
            {/* LEFT IMAGE */}

            <div className="solar-process-image">
              <img src={helpImg1} alt="Solar Process" />
            </div>

            {/* RIGHT CONTENT */}

            <div className="solar-process-content">
              <h2 className="title text-animate">
                {service.howItWorksTitle}{" "}
                <span className="highlight">{service.howItWorksHighlight}</span>
              </h2>

              <p
                className="para mb-4"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {service.howItWorksIntro}
              </p>
              <div className="solar-process-steps">
                {service.solarSteps?.map((step, index) => (
                  <div className="solar-step-item" key={index}>
                    <span className="solar-step-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h5>{step.title}</h5>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-zone-section">
        <div className="container">
          <div className="industry-zone-header">
            <span className="sub-txt">Clients We Serve</span>
            <h2 className="title text-animate">
              Serving diverse <span className="highlight">industries</span>
            </h2>
            {/* <p
              className="para mb-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            ></p> */}
          </div>

          <div className="industry-zone-grid">
            {service.industriesData?.map((item, index) => (
              <div className="industry-zone-card" key={index}>
                <img src={item.image} alt={item.title} />

                <div className="industry-zone-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceLayout;
