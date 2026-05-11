import { Helmet } from "react-helmet-async";

import { useEffect, useState } from "react";

import AboutBanner from "../page-elements/About-elements/AboutBanner";

import AboutMid from "../page-elements/About-elements/AboutMid";

import StatsBar from "../page-elements/Home-elements/StatsBar";

import CTA from "../component/CTA";

import "../page-elements/About-elements/about.css";

import TestimonialSlider from "../page-elements/About-elements/TestimonialSlider";

import OurTeam from "../page-elements/About-elements/OurTeam";

import AboutProduct from "../page-elements/About-elements/AboutProduct";

import AboutFaq from "../page-elements/About-elements/AboutFaq";

import WhySolarSection from "../page-elements/About-elements/WhySolarSection";

const Contact = () => {
  const [seo, setSeo] = useState({});

  useEffect(() => {
    fetch("https://dsks.co.in/blue/wp-json/wp/v2/pages?slug=about")
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

      <AboutBanner />

      <AboutMid />

      <AboutProduct />

      <AboutFaq />

      <WhySolarSection />

      <CTA />

      <StatsBar />
    </>
  );
};

export default Contact;
