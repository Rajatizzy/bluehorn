import React from "react";
import "../About-elements/about.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/img/about-1.jpg";
import img2 from "../../assets/img/about-1.jpg";
import img3 from "../../assets/img/about-1.jpg";

const testimonials = [
  {
    name: "Arita Benson",
    role: "Customer",
    img: img1,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "W. S. Gilbert",
    role: "Customer",
    img: img2,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "John Doe",
    role: "Customer",
    img: img3,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "John Doe",
    role: "Customer",
    img: img3,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="text-center mb-lg-5 mb-4">
          <span className="sub-txt text-center">TESTIMONIALS</span>
          <h2 className="title text-animate text-center">
            Words From Our <span className="highlight"> Customer</span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="client-img">
                  <img src={item.img} alt="" />
                </div>

                <h4>{item.name}</h4>
                <span>{item.role}</span>

                <div className="stars">★★★★★</div>

                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
