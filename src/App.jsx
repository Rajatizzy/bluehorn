import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./component/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
// import Career from "./pages/Career";
import ServicePage from "./pages/ServicePage";
// ✅ ADD THESE
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";

import { useSplitText } from "./hook/useSplitText";
import useScrollReveal from "./hook/useScrollReveal";
import ScrollToTop from "./component/ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useSplitText();
  useScrollReveal();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    // <BrowserRouter basename={import.meta.env.BASE_URL}>
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/services/:slug" element={<ServicePage />} />
          {/* BLOG */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          {/* <Route path="/career" element={<Career />} /> */}
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
