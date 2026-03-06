import React from "react";
import case1 from "../../assets/img/pet.webp";

const projects = [
  {
    title: "IOCL Petrol Pump",
    tech: "On-Grid Plant at Landmark IOCL Petrol Pump. Opp. Birla Planetarium",
    img: case1, // solar petrol station
  },
  {
    title: "Morvee Hotel",
    tech: "On-Grid Solar Plant at Morvee Hotel, Kolkata. Special 40ft Structure designed.",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", // hotel exterior
  },
  {
    title: "Mica Mold",
    tech: "On-Grid, DG Synced Solar Plant at Mica Mold, Jamshedpur",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd", // factory / industrial site
  },
];

export default function CaseStudies() {
  return (
    <section className="case-wrap">
      <div className="container">
        <p class="sub-txt text-center">Our Work</p>
        <h2 className="title text-animate text-white">
          Real Projects, Real Impact, Real Returns
        </h2>

        <div className="case-grid">
          {projects.map((p, i) => (
            <div className="case-box" key={i}>
              <img src={p.img} alt="" />

              <div className="overlay">
                <h3>{p.title}</h3>
                <span>{p.tech}</span>

                <div className="btns">
                  <button>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
