import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading"; // Import Loading component
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase loading animation (e.g., API call or asset load)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Clean up timeout on component unmount
  }, []);

  return (
    <Router>
      {loading ? (
        <Loading /> // Show Loading component when loading is true
      ) : (
        <>
          <WhatsAppCall />
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
            <Route
              path="/about/products-benefits"
              element={<ProductsBenefits />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
