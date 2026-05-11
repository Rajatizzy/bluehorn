import React from "react";

import { Helmet } from "react-helmet-async";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { services } from "../data/servicesData";

import ServiceLayout from "../component/ServiceLayout";

const ServicePage = () => {
  const { slug } = useParams();

  const [seo, setSeo] = useState({});

  const service = services[slug];

  useEffect(() => {
    fetch(`https://dsks.co.in/blue/wp-json/wp/v2/pages?slug=${slug}`)
      .then((res) => res.json())

      .then((data) => {
        if (data.length > 0) {
          setSeo({
            title: data[0].yoast_head_json?.title,

            description: data[0].yoast_head_json?.description,
          });
        }
      });
  }, [slug]);

  if (!service) {
    return <h2 className="text-center py-5">Service Not Found</h2>;
  }

  return (
    <>
      <Helmet>
        <title>{seo.title || `${service.title} | Bluehorn`}</title>

        <meta
          name="description"
          content={
            seo.description ||
            service.description ||
            `${service.title} services by Bluehorn`
          }
        />
      </Helmet>

      <ServiceLayout service={service} />
    </>
  );
};

export default ServicePage;
