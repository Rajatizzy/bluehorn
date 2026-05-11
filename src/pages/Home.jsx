import { Helmet } from "react-helmet-async";

import { useEffect, useState } from "react";

import Banner from "../page-elements/Home-elements/Banner";

import "../page-elements/Home-elements/home-css/home.css";

import AboutSection from "../page-elements/Home-elements/AboutSection";

import ServiceSlider from "../page-elements/Home-elements/ServiceSlider";

import WorkProcess from "../page-elements/Home-elements/WorkProcess";

import VideoSection from "../page-elements/Home-elements/VideoSection";

import EnergyProgress from "../page-elements/Home-elements/EnergyProgress";

import WhyChooseUs from "../page-elements/Home-elements/WhyChooseUs";

import StatsBar from "../page-elements/Home-elements/StatsBar";

import SolarCalculator from "../page-elements/Home-elements/SolarCalculator";

import CaseStudies from "../page-elements/Home-elements/CaseStudies";

import ClientCarousel from "../page-elements/Home-elements/ClientCarousel";

import CTA from "../component/CTA";

const Home = () => {
  const [seo, setSeo] = useState({});

  useEffect(() => {
    fetch("https://dsks.co.in/blue/wp-json/wp/v2/pages?slug=home")
      .then((res) => res.json())

      .then((data) => {
        if (data.length > 0) {
          setSeo({
            title: data[0].yoast_head_json?.title,

            description: data[0].yoast_head_json?.description,
          });
        }
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>

        <meta name="description" content={seo.description} />
      </Helmet>

      <Banner />

      <AboutSection />

      <StatsBar />

      <ServiceSlider />

      <EnergyProgress />

      <WorkProcess />

      <WhyChooseUs />

      <CTA />

      <VideoSection />

      <ClientCarousel />

      <CaseStudies />

      <SolarCalculator />
    </>
  );
};

export default Home;
