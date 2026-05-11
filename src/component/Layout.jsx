import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import OutlineHeading from "../page-elements/Home-elements/OutlineHeading";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <OutlineHeading />
      <Footer />
    </>
  );
};

export default Layout;
