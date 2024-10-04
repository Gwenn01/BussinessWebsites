import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./partition/Header";
import Footer from "./partition/Footer";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import About from "../pages/About";
const Layout = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
