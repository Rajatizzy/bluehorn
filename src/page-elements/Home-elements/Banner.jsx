import Slider from "react-slick";
import { Link } from "react-router-dom";
import banner1 from "../../assets/img/blu0.jpg";
// import banner2 from "../../assets/img/banner2.jpg";
// import banner3 from "../../assets/img/banner3.jpg";

function Banner() {
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const carouselData = [
    {
      id: 1,
      subtitle: "Welcome to Blue Horn Technologies ",
      // title: "Powering the Future With Renewable.",
      title: (
        <>End-to-End Solar EPC Solutions for Industries, Businesses & Homes </>
      ),
      description:
        "Blue Horn Technologies designs, builds, and maintains solar plants at fixed service fees.",
      image: banner1,
      link: "/contact",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <section className="ban">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div className="item" key={item.id}>
            <div className="ban-sec">
              <img src={item.image} className="bg-zoom" alt={item.title} />
              <div className="container">
                <div className=" ban-sec-txt  text-white">
                  <h5 className="sub-txt text-white">{item.subtitle}</h5>
                  <h2 className="hero-h1 text-animate ">{item.title}</h2>
                  <p className="h1-para fade-animate-up">{item.description}</p>

                  <div className="hero-btns mt-4">
                    <Link to="/about">
                      <button className="animated-button fade-animate-up">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="arr-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>

                        <span className="text">Explore More</span>

                        <span className="circle"></span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="arr-1"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </button>
                    </Link>

                    <a href="#frm">
                      {/* <button className="animated-button outline-btn">
                        Contact
                      </button> */}
                      <button class="animated-button fade-animate-up outline-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="arr-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span class="text">Contact</span>
                        <span class="circle"></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="arr-1"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Banner;
