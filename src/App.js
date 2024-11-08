import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Milestones from "./components/MilesStone";
import ServerRentalModel from "./components/ServerRentalModal";
import ProductsBenefits from "./components/ProductsBenefits";
import Services from "./components/Services";
import Contact from "./components/Contact";
import WhatsAppCall from "./components/WhatsAppCall";
import "./App.css";

const App = () => {
  return (
    <Router>
      <WhatsAppCall/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About Section Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/about/milestones" element={<Milestones />} />
        <Route
          path="/about/server-rental-model"
          element={<ServerRentalModel />}
        />
        <Route path="/about/products-benefits" element={<ProductsBenefits />} />

        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
