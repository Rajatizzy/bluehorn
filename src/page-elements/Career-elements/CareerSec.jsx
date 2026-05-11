import React, { useRef, useState } from "react";
import { FaRocket, FaLeaf, FaUsers } from "react-icons/fa";
import "./career.css";

const CareerSec = () => {
  const formRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (value) => {
    setSelectedOption(value);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const courses = [
    "Solar Basics Course",
    "Installation Guide",
    "Safety Training",
  ];

  const roles = [
    "Sales",
    "Technician",
    "Site Incharge",
    "Safety Incharge",
    "Designer",
    "Service",
    "Maintenance",
    "Procurement",
    "Project Management",
  ];

  return (
    <div className="career-page">
      {/* WHY US */}
      <section className="why-section">
        <div className="container text-center">
          <h2 className="title text-animate text-center">
            Why Join <span className="highlight">BlueHorn?</span>
          </h2>

          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <div className="why-card">
                <div className="why-icon">
                  <FaRocket />
                </div>
                <h4>Career Growth</h4>
                <p>
                  Accelerate your career with hands-on experience in real solar
                  projects. Learn from industry experts, gain practical
                  exposure, and unlock new opportunities in the renewable energy
                  sector.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="why-card">
                <div className="why-icon">
                  <FaLeaf />
                </div>
                <h4>Make an Impact</h4>
                <p>
                  Be part of India’s clean energy revolution. Contribute to
                  sustainable development by working on solar solutions that
                  reduce carbon footprint and create a greener future.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="why-card">
                <div className="why-icon">
                  <FaUsers />
                </div>
                <h4>Collaborative Culture</h4>
                <p>
                  Work in a supportive and dynamic environment where innovation,
                  teamwork, and learning are encouraged. Grow with a passionate
                  team that values creativity and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="container career">
        <h5 className="sub-txt text-center">Career</h5>
        <h2 className="title text-animate text-center">
          Courses & <span className="highlight">Training</span>
        </h2>
        {/* <h2 className="title text-center">Courses & Training</h2> */}

        <div className="row mt-4">
          {courses.map((course, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="course-card text-center">
                <h5>{course}</h5>
                <button
                  className="btn-yellow"
                  onClick={() => handleSelect(course)}
                >
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="container  text-center">
        <h2 className="title text-animate text-center">
          Courses & <span className="highlight">Opportunities</span>
        </h2>

        <div className="row mt-4">
          {roles.map((role, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="role-card" onClick={() => handleSelect(role)}>
                {role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section ref={formRef} className="apply-section">
        <div className="container">
          <div className="form-box text-center">
            <h2 className="title text-animate text-center">
              Apply / <span className="highlight">Enroll Now</span>
            </h2>

            <form className="row g-3 mt-4">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <select
                  className="form-control"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="">Select Course / Role</option>

                  {/* Courses */}
                  {courses.map((c, i) => (
                    <option key={i}>{c}</option>
                  ))}

                  {/* Roles */}
                  {roles.map((r, i) => (
                    <option key={i}>{r}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-12">
                <input type="file" className="form-control" />
              </div>

              <div className="col-md-12">
                <button className="btn-submit">Submit Application</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerSec;
