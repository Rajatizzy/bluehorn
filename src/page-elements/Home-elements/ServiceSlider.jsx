import img1 from "../../assets/img/service-2.jpg";
import img2 from "../../assets/img/blu.jpg";
import img3 from "../../assets/img/service-4.jpg";
import img4 from "../../assets/img/blu2.jpg";
import img5 from "../../assets/img/blu6.jpg";
import img6 from "../../assets/img/blu3.jpg";
import {
  FaChartLine,
  FaHandshake,
  FaDraftingCompass,
  FaHardHat,
  FaLeaf,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Energy Analysis",
    desc: "Thorough assessment of your energy consumption to identify the most effective solar solution.",
    img: img1,
    icon: <FaChartLine />, // analysis / audit
  },
  {
    title: "Liaison and Finance",
    desc: "End-to-end financial guidance and stakeholder coordination to ensure a seamless project journey.",
    img: img2,
    icon: <FaHandshake />, // coordination + finance partnership
  },
  {
    title: "Design and Consultation",
    desc: "Precision-engineered solar system designs tailored to your site, scale, and energy requirements.",
    img: img3,
    icon: <FaDraftingCompass />, // engineering design
  },
  {
    title: "PMC and Commissioning",
    desc: "Professional project management and safe, quality-driven installation from groundbreaking to commissioning.",
    img: img4,
    icon: <FaHardHat />, // construction supervision
  },
  {
    title: "Credits and ESG Consultation",
    desc: "Strategic guidance on carbon credits, renewable energy trading, and achieving top ESG ratings.",
    img: img5,
    icon: <FaLeaf />, // sustainability / ESG
  },
  {
    title: "Operation and Maintenance",
    desc: "Lifelong plant monitoring and maintenance partnerships ensuring consistent and efficient energy generation.",
    img: img6,
    icon: <FaTools />, // maintenance
  },
];
const ServiceSlider = () => {
  return (
    <section className="service-slider-wrapper">
      <div className="container">
        <h5 className="sub-txt text-center">Our services</h5>

        <h2 className="title text-animate text-center">
          Solar Solutions Engineered from{" "}
          <span className="highlight">Start to Finish</span>
        </h2>

        {/* <p className="para text-center">
          Blue Horn Technologies brings together technical expertise, financial
          acumen, and a client-first approach to guide you through every stage
          of your solar journey, from the first assessment to lifelong
          operation.
        </p> */}

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.img} alt={service.title} />

              <div className="icon">{service.icon}</div>

              <div className="content">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
