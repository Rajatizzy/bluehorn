import React, { useState } from "react";
import case1 from "../../assets/img/0.5.png";
import case2 from "../../assets/img/3.png";
import case3 from "../../assets/img/6.png";
import case4 from "../../assets/img/8.png";
import case5 from "../../assets/img/10.png";
import case6 from "../../assets/img/11.png";
import case7 from "../../assets/img/12.png";
import case8 from "../../assets/img/13.png";
import case9 from "../../assets/img/15.png";
import case10 from "../../assets/img/17.png";
import case11 from "../../assets/img/19.png";
import case12 from "../../assets/img/20.png";
import case13 from "../../assets/img/21.png";
import case14 from "../../assets/img/24.png";
import case15 from "../../assets/img/30.png";
import case16 from "../../assets/img/98.png";
import case17 from "../../assets/img/120.png";
import case18 from "../../assets/img/300.png";
import case19 from "../../assets/img/551.png";

const projects = [
  // Residential
  {
    title: "Mr. Dhandaria, Salt Lake, Kolkata",
    tech: "The inaugural residential venture that marked the beginning of our journey in sustainable living.",
    type: "Residential",
    img: case9,
  },
  {
    title: "Mr. Tulsiyan, Ballygunge, Kolkata",
    tech: "A specialized structural design engineered to withstand high-velocity winds on a luxury high-rise.",
    type: "Residential",
    img: case2,
  },
  {
    title: "Mr. Suthar, Vadodra, Gujarat",
    tech: "Extending our professional solar expertise to residential projects across the national landscape.",
    type: "Residential",
    img: case3,
  },
  {
    title: "Mr. Kedia",
    tech: "A flagship residential installation serving as a sustainable benchmark for the local neighborhood.",
    type: "Residential",
    img: case2,
  },

  // Commercial
  {
    title: "Volt by PS Group, Russel Street",
    tech: "A landmark commercial installation pairing renewable energy with an iconic city skyline view.",
    type: "Commercial",
    img: case4,
  },
  {
    title: "Jiva by PS Group, Beliaghata",
    tech: "Powering a premium residential ecosystem with clean, sustainable energy solutions.",
    type: "Commercial",
    img: case9,
  },
  {
    title: "Morvee Hotel, Chetla",
    tech: "An architectural 40ft solar structure that doubles as a functional rooftop cafe space.",
    type: "Commercial",
    img: case13,
  },
  {
    title: "Don Bosco School, Kharagpur",
    tech: "Advanced lithium battery integration providing a seamless, eco-friendly alternative to traditional UPS systems.",
    type: "Commercial",
    img: case15,
  },
  {
    title: "Pulse Diagnostics, Lansdowne",
    tech: "Integrating high-standard healthcare facilities with long-term environmental sustainability.",
    type: "Commercial",
    img: case7,
  },
  {
    title: "Halwasia Petrol Pump, Chowringhee",
    tech: "A strategic solar installation at one of the city’s most prominent central fueling stations.",
    type: "Commercial",
    img: case2,
  },
  {
    title: "Rani Sati Mandir, Odisha",
    tech: "A meaningful collaboration proving that traditional institutions can lead the way in modern sustainability.",
    type: "Commercial",
    img: case4,
  },
  {
    title: "Invictus by PS Group, Elgin",
    tech: "Delivering high-capacity green power to meet the sophisticated needs of luxury HNI residences.",
    type: "Commercial",
    img: case8,
  },
  {
    title: "The Rise by Gangotri Group",
    tech: "Enhancing modern urban living through a dedicated residential solar power network.",
    type: "Commercial",
    img: case11,
  },
  {
    title: "Pulse Diagnostics, Behala",
    tech: "Strengthening the synergy between medical diagnostic excellence and green energy reliability.",
    type: "Commercial",
    img: case14,
  },
  {
    title: "Calcutta Sportsboat Manufacturers",
    tech: "A specialized emergency solar setup designed for critical medical equipment on a mobile vessel.",
    type: "Commercial",
    img: case1,
  },
  {
    title: "Rungta Industries, New Alipore",
    tech: "Facilitating corporate environmental responsibility for leading industrial players through solar adoption.",
    type: "Commercial",
    img: case5,
  },
  {
    title: "The Crown by NPR Group",
    tech: "A commitment to providing clean, decentralized energy for a high-density residential community.",
    type: "Commercial",
    img: case6,
  },
  {
    title: "Surface Story",
    tech: "Pioneering the green movement as the first interior design showroom in the city to run on solar.",
    type: "Commercial",
    img: case10,
  },
  {
    title: "Disaster Relief Force (MK Enterprise)",
    tech: "Empowering essential emergency services with reliable and portable solar energy solutions.",
    type: "Commercial",
    img: case12,
  },

  {
    title: "Bihani Academy, Joka",
    tech: "Modernizing educational infrastructure with lithium-backed solar power for uninterrupted learning.",
    type: "Commercial",
    img: case5,
  },

  // Industrial
  {
    title: "Mica Mold, Jamshedpur",
    tech: "A high-efficiency industrial setup that has successfully reduced the client’s electricity overhead to zero.",
    type: "Industrial",
    img: case12,
  },
  {
    title: "Jamshedpur Rolling Flour Mills",
    tech: "Scaling renewable energy to meet the heavy-duty power demands of the industrial milling sector.",
    type: "Industrial",
    img: case17,
  },
  {
    title: "Prabhu Wheels & Axel",
    tech: "Aligning heavy manufacturing processes with global green initiatives through renewable energy.",
    type: "Industrial",
    img: case16,
  },
  {
    title: "NDR Warehousing, Kolkata",
    tech: "Boosting the profitability of a listed logistics giant by significantly cutting carbon emissions.",
    type: "Industrial",
    img: case19,
  },
  {
    title: "Eastern Railways (WhiteShark)",
    tech: "Playing a pivotal role in the large-scale decarbonization of India’s railway infrastructure.",
    type: "Industrial",
    img: case18,
  },
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("Residential");

  const filteredProjects = projects.filter((item) => item.type === activeTab);

  return (
    <section className="case-wrap">
      <div className="container">
        <p className="sub-txt text-center">Our Work</p>

        <h2 className="title text-center">
          Real Projects, Real Impact, Real Returns
        </h2>

        <div className="case-tabs">
          <button
            className={activeTab === "Residential" ? "active" : ""}
            onClick={() => setActiveTab("Residential")}
          >
            Residential
          </button>

          <button
            className={activeTab === "Commercial" ? "active" : ""}
            onClick={() => setActiveTab("Commercial")}
          >
            Commercial
          </button>

          <button
            className={activeTab === "Industrial" ? "active" : ""}
            onClick={() => setActiveTab("Industrial")}
          >
            Industrial
          </button>
        </div>

        <div className="case-grid">
          {filteredProjects.map((p, i) => (
            <div className="case-box" key={i}>
              <img src={p.img} alt={p.title} />

              <div className="overlay">
                <h3>{p.title}</h3>

                <span>{p.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
