// src/components/SolarCalculator.jsx

import { useState } from "react";

export default function SolarCalculator() {
  const [form, setForm] = useState({
    type: "",
    name: "",
    email: "",
    phone: "",
    bill: "",
    capacity: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Calculation Submitted 🚀");
  };

  return (
    <section className="solar-section">
      <div className="container ">
        <div className="solar-box">
          {/* LEFT */}
          <div className="solar-left">
            <span className="sub-txt">Get In Touch</span>
            <h2 className="title text-animate">
              Let's Build Something{" "}
              <span className="highlight">Green Together</span>
            </h2>
            <p
              className="para pt-3"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Ready to explore solar for your home or business? Leave your
              details and our experts will schedule a free site visit at your
              convenience.
            </p>
          </div>

          {/* RIGHT FORM */}
          <form className="solar-form" onSubmit={handleSubmit}>
            <select name="type" onChange={handleChange}>
              <option value="">—Please choose an option—</option>
              <option value="home">Home</option>
              <option value="business">Business</option>
            </select>

            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Our Average Monthly Bill?"
              name="bill"
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Required Solar Plant Capacity (in kW)"
              name="capacity"
              onChange={handleChange}
            />

            <button type="submit">Calculate</button>
          </form>
        </div>
      </div>
    </section>
  );
}
