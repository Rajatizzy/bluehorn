import Header from "../component/Header";
import Footer from "../component/Footer";
import OutlineHeading from "../page-elements/Home-elements/OutlineHeading";
import AboutBanner from "../page-elements/About-elements/AboutBanner";
import AboutSection from "../page-elements/Home-elements/AboutSection";
import WorkProcess from "../page-elements/Home-elements/WorkProcess";
import StatsBar from "../page-elements/Home-elements/StatsBar";
import CTA from "../component/CTA";
import WhyChooseUs from "../page-elements/Home-elements/WhyChooseUs";
import "../page-elements/About-elements/about.css";
import TestimonialSlider from "../page-elements/About-elements/TestimonialSlider";
import OurTeam from "../page-elements/About-elements/OurTeam";

const Contact = () => {
  return (
    <>
      <Header />
      <AboutBanner />
      <AboutSection />
      <WhyChooseUs />
      <div className="workprocess-space">
        <WorkProcess />
      </div>
      <CTA />
      <StatsBar />
      <TestimonialSlider />
      <OurTeam />
      <OutlineHeading />
      <Footer />
    </>
  );
};

export default Contact;
