import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import client from "../../assets/img/client4.avif";
import client1 from "../../assets/img/client5.avif";
import client2 from "../../assets/img/client6.avif";
import client3 from "../../assets/img/client7.avif";
import client4 from "../../assets/img/client8.avif";
import client5 from "../../assets/img/client9.avif";
import client6 from "../../assets/img/client10.avif";
import client7 from "../../assets/img/client11.avif";

const clients = [
  client,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
];

export default function ClientCarousel() {
  return (
    <section className="client-section">
      <div className="container">
        <p class="sub-txt text-center">Our Partners</p>
        <h2 className="title text-animate text-center mb-4 pb-lg-4">
          Built on Strong{" "}
          <span className="highlight">Industry Partnerships</span>
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          autoplay={{ delay: 2000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            992: { slidesPerView: 5 },
          }}
        >
          {clients.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="client-card">
                <img src={logo} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
