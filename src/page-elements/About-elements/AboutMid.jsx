import { FaCheckCircle } from "react-icons/fa";
import img1 from "../../assets/img/about-1.jpg";
import img2 from "../../assets/img/about-2.jpg";
// import "./about.css";

const AboutMid = () => {
  return (
    <section className="about-sec">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT IMAGES */}
          <div className="col-lg-6">
            <div className="about-images">
              <img src={img1} className="about-img-main reveal-left" alt="" />
              <img src={img2} className="about-img-small reveal-left" alt="" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <span className="sub-txt">ABOUT US</span>
            <h2 className="title text-animate">
              Engineering a Cleaner and{" "}
              <span className="highlight">Greener Tomorrow</span>
            </h2>

            <p className="para " data-aos="fade-up" data-aos-duration="1200">
              Founded in 2019, Blue Horn Technologies is a premier Solar EPC
              company dedicated to delivering tailor-made solar and energy
              storage solutions across residential, commercial, and industrial
              segments. Built on a foundation of transparency and engineering
              excellence, we operate on a unique fixed-cost model that ensures
              every rupee is invested in quality, not markups.
              <br />
              <br />
              This vision has been shaped by our CEO and Founder, Anuj Agarwal,
              an MBA from SIBM Pune with an entrepreneurial background in
              Logistics and Event Management. His experience of building
              profitable businesses across industries brought a sharp commercial
              lens to the renewable energy space, reinforcing our belief that
              solar energy must deliver real, measurable value to every client
              we serve.
              <br />
              <br />
              Today, Blue Horn Technologies has evolved into a horizontally
              integrated solar company, offering end-to-end services spanning
              project feasibility, design, finance, procurement, installation,
              commissioning, and lifelong operation and maintenance. With an
              active EPC portfolio across eastern India and a robust partner
              network comprising industry leaders like Adani Renewables,
              Havells, Waaree, Schneider Electric, and ABB, we bring the best of
              technology and expertise to every project we undertake.
              <br />
              <br />
              Solar energy today is the most economically viable and responsible
              energy choice available. With payback periods as low as two to
              three years, accelerated depreciation benefits, and a 25-year
              plant life, the case for going solar has never been stronger. At
              Blue Horn Technologies, we make that transition seamless, precise,
              and worthwhile for every client we serve."
            </p>

            {/* <div className="about-list">
              <p>
                <FaCheckCircle /> Fixed-Cost EPC Model
              </p>
              <p>
                <FaCheckCircle /> End-to-End Project Delivery
              </p>
              <p>
                <FaCheckCircle /> Multi-Sector Solar Expertise
              </p>
              <p>
                <FaCheckCircle /> Lifelong Client Partnerships
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMid;
