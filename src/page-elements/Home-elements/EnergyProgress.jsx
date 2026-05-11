import {
  FaIndustry,
  FaBuilding,
  FaHospital,
  FaSchool,
  FaHotel,
  FaHome,
} from "react-icons/fa";

const sectors = [
  { title: "Industries", icon: <FaIndustry /> },
  { title: "Commercial Establishments", icon: <FaBuilding /> },
  { title: "Healthcare Centres", icon: <FaHospital /> },
  { title: "Hotel", icon: <FaHotel /> },
  { title: "Education Institute", icon: <FaSchool /> },
  { title: "Residential & Housing Society", icon: <FaHome /> },
];

export default function EnergyProgress() {
  return (
    <section className="energy-progress">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-md-5">
            <span className="sub-txt">Where We Install</span>
            <h2 className="title text-animate">
              Solar EPC Solutions Across{" "}
              <span className="highlight">Every Sector</span>
            </h2>

            <p className="para" data-aos="fade-up" data-aos-duration="1200">
              At Blue Horn Technologies, we bring our solar EPC expertise to a
              wide spectrum of industries, delivering customised energy
              solutions that are engineered to meet the unique operational
              demands and energy requirements of each sector.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="col-md-7">
            <div className="sector-grid">
              {sectors.map((item, i) => (
                <div className="sector-card" key={i}>
                  {item.icon}
                  <h4>{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
