import React, { useState } from "react";
import {
  FaGlobe,
  FaCalculator,
  FaBolt,
  FaCloudRain,
  FaHandHoldingUsd,
} from "react-icons/fa";

const aboutFaqData = [
  {
    icon: <FaGlobe />,
    question: "Is solar feasible for my business?",
    answer:
      "Yes! Solar energy is a highly versatile and effective power source suitable for any and all businesses, regardless of the industry you operate in.  ",
  },
  {
    icon: <FaCalculator />,
    question: "Cost, Space & Life? ",
    answer:
      "These factors vary according to the specific capacity and design of your system. However, you have the flexibility to start with a smaller installation to match your current space or budget and still reap significant financial benefits immediately.",
  },
  {
    icon: <FaBolt />,
    question: "Zero Electricity Expenses?",
    answer:
      "Achieving zero expenses is possible in certain cases and configurations. In most standard installations, a well-engineered solar plant successfully saves businesses approximately 50% of their total electricity expenses.  ",
  },
  {
    icon: <FaCloudRain />,
    question: "Reliable in Rains?",
    answer:
      "Absolutely. Solar technology is designed to be resilient and continues to produce electricity even during overcast conditions or throughout the monsoon season.  ",
  },
  {
    icon: <FaHandHoldingUsd />,
    question: "Finance options Available? ",
    answer:
      "Yes, there are many avenues to fund your transition to green energy. We offer various financial models, including CAPEX, OPEX (RESCO), and EMI options tailored to suit your specific business budget.  ",
  },
  {
    icon: <FaHandHoldingUsd />,
    question: "What is the expected financial return?  ",
    answer:
      "Solar is a high-yield investment with an Internal Rate of Return (IRR) usually exceeding 20% yearly. Depending on the type and size of the plant, most clients recover their initial capital investment within 2 to 4 years.  ",
  },
];

export default function AboutFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="aboutfaq-wrapper">
      <div className="container">
        <div className="aboutfaq-header text-center">
          <h5 className="sub-txt text-center">FAQ</h5>
          <h2 className="title text-animate text-center">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
        </div>

        <div className="aboutfaq-list">
          {aboutFaqData.map((item, index) => (
            <div
              key={index}
              className={`aboutfaq-item ${
                activeIndex === index ? "aboutfaq-active" : ""
              }`}
            >
              <div
                className="aboutfaq-question"
                onClick={() => toggleFaq(index)}
              >
                <span className="aboutfaq-qleft">
                  <span className="aboutfaq-qicon">{item.icon}</span>
                  {item.question}
                </span>

                <span className="aboutfaq-toggle">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="aboutfaq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
