// src/components/ServiceSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/img/service-2.jpg";
import img2 from "../../assets/img/service-3.jpg";
import img3 from "../../assets/img/service-4.jpg";
import img4 from "../../assets/img/service-5.jpg";
import {
  FaSolarPanel,
  FaLeaf,
  FaBolt,
  FaChargingStation,
} from "react-icons/fa";

const services = [
  {
    title: "On-Grid Rooftop (Solar + Grid)",
    desc: "Harness solar power while staying connected to the grid.",
    img: img1,
    icon: <FaBolt />,
  },
  {
    title: "Hybrid Rooftop/Ground (Solar + Grid + Batteries) ",
    desc: "Solar power with battery backup for uninterrupted energy supply.",
    img: img2,
    icon: <FaSolarPanel />,
  },
  {
    title: "Ground Mounted (Utility Scale Solar) ",
    desc: "High-capacity solar installations engineered for large-scale power generation.",
    img: img3,
    icon: <FaLeaf />,
  },
  // {
  //   title: "EV Charging",
  //   desc: "Fast and smart EV charging stations powered by renewable energy.",
  //   img: img4,
  //   icon: <FaChargingStation />,
  // },
];

const ServiceSlider = () => {
  return (
    <section className="service-slider-wrapper">
      <div className="container">
        <h5 className="sub-txt text-center">Our services</h5>
        <h2 className="title text-animate text-center">
          Solar Solutions Engineered{" "}
          <span className="highlight">for Every Need</span>
        </h2>

        <p
          className="para  text-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Blue Horn Technologies brings together technical expertise, financial
          acumen, and a client-first approach to deliver solar solutions that go
          beyond installation. <br /> Every system we design is a long-term
          investment in energy independence and operational efficiency.
        </p>
        <div className="service-sec">
          <Swiper
            spaceBetween={30}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-card">
                  <img src={service.img} alt={service.title} />

                  <div className="icon">{service.icon}</div>

                  <div className="content">
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
