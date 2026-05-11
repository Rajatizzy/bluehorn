// src/components/WhyChooseUs.jsx

import { FaDollarSign, FaCogs, FaUsers, FaChartLine } from "react-icons/fa";

const features = [
  {
    title: "Fixed-Cost Model",
    desc: "We are the only Solar EPC company that offers services at a fixed cost, eliminating hidden markups entirely.",
    icon: <FaDollarSign />,
  },
  {
    title: "End-to-End Expertise",
    desc: "From energy audit to lifelong maintenance, we manage every stage of your solar project with precision.",
    icon: <FaCogs />,
  },
  {
    title: "Client-First Approach",
    desc: "Every decision we make is guided by what delivers maximum value and long-term benefit to our clients.",
    icon: <FaUsers />,
  },
  {
    title: "Proven Track Record",
    desc: "With successful installations across multiple sectors, our portfolio stands as a testament to our engineering excellence.",
    icon: <FaChartLine />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">
        {/* <span className="small-title">⚡ WHY CHOOSE US</span>
        <h2>Providing Solar Energy Solutions</h2> */}
        <h5 className="sub-txt text-center">Why Choose Us</h5>
        <h2 className="title text-animate text-center">
          Where Quality, Transparency and{" "}
          <span className="highlight">Expertise Meet</span>
        </h2>

        {/* <p
          className="para text-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Choosing the right Solar EPC partner is a decision that impacts your
          energy future for decades. At Blue Horn Technologies, we combine
          technical expertise, <br /> financial transparency, and a client-first
          approach to deliver solar solutions that consistently outperform
          expectations.
        </p> */}

        <div className="why-grid">
          {features.map((item, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{item.icon}</div>

              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
