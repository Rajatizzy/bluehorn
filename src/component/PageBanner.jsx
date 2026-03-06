import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

const PageBanner = ({ title, image }) => {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container text-white">
        <h1>{title}</h1>

        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span> / </span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
