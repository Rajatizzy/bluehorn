import productImg from "../../assets/img/about-blue.png";
// import productImg from "../../assets/img/collage-side.png";
import productImg1 from "../../assets/img/blu4.jpg";

const AboutProduct = () => {
  return (
    <section className="about-product-section">
      <div className="container">
        <div className="about-product-grid">
          {/* Content */}
          <div className="product-content">
            <span className="sub-txt">About Our Product</span>

            <h2 className="title text-animate">
              Smart Solar Energy <span className="highlight">Solutions</span>
            </h2>

            <p className="para " data-aos="fade-up" data-aos-duration="1200">
              We offer a wide range of customised solar solutions designed to
              meet the unique energy needs of residential, commercial, and
              industrial clients, available in both CAPEX and OPEX (RESCO)
              models. Whether it is for Industries, Businesses & Homes, every
              solution is engineered for maximum performance and long-term
              returns.
              <br />
              <br />
              Our turn-key solar installations are designed to be a highly
              profitable investment, typically offering a capital payback within
              3–4 years and a yearly return on investment exceeding 20%. Beyond
              saving 30% to 50% on electricity expenses, our systems allow
              businesses to claim 40% accelerated depreciation benefits. Every
              installation is handled by a technical team with over 15 years of
              experience, ensuring high-quality engineering for On-Grid,
              Off-Grid, and Hybrid systems that remain reliable even during the
              monsoon season.
            </p>

            {/* <p className="para " data-aos="fade-up" data-aos-duration="1400">
              From consultation and system design to installation and
              maintenance, our product offers a complete solar ecosystem that
              helps reduce electricity costs while supporting a cleaner future.
            </p> */}
          </div>

          {/* Image */}
          <div className="product-image">
            <div className="about-pr">
              <img
                src={productImg}
                className="about-img-main reveal-right"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
