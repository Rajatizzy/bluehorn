import React from "react";
import "../Contact-elements/contact.css";

const ContactMapForm = () => {
  return (
    <section className="contact-map-section">
      {/* Google Map */}
      <iframe
        className="contact-map"
        src="https://www.google.com/maps?q=London&output=embed"
        loading="lazy"
      ></iframe>

      {/* Form Card */}
      <div className="contact-form-wrapper">
        <span className="sub-txt text-center">CONTACT NOW</span>
        <h2 className="contact-small-title text-animate mb-4">
          Get In Touch With Us
        </h2>

        <form className="contact-form">
          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder="Name" />
            </div>

            <div className="col-md-6">
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder="Phone" />
            </div>

            <div className="col-md-6">
              <input type="text" placeholder="Subject" />
            </div>
          </div>

          <textarea placeholder="Write a Message"></textarea>

          <button type="submit">Submit Now</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMapForm;
