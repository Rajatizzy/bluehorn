// src/components/SolarCalculator.jsx
import { useState } from "react";
import solarVideo from "../../assets/img/WhatsApp_Bot_Motion_Graphicsmp_.mp4";

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
    <section className="solar-section" id="frm">
      <div className="container">
        <div className="solar-box">
          <div className="row">
            <div className="col-md-6">
              {/* LEFT CONTENT */}
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
                  Ready to explore solar for your home or business? Watch how
                  solar can transform your energy future.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              {/* RIGHT VIDEO */}
              <div className="solar-video">
                <video autoPlay muted loop playsInline controls>
                  <source src={solarVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
