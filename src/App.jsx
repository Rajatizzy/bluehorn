import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";

import About from "./pages/About";
import Contact from "./pages/Contact";
// import Product from "./pages/Product";

import { useSplitText } from "./hook/useSplitText";
import useScrollReveal from "./hook/useScrollReveal";

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
    <BrowserRouter basename="/bluehorn">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Future Routes */}

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/product" element={<Product />} /> */}

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
