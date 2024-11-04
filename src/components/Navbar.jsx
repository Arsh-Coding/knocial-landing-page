import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Navbar.module.css";
import Image from "../assets/MainLogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.logo}>
        <img src={Image} alt="Knocial Logo" height={"40px"} />
      </div>

      {/* Main navigation links for larger screens */}
      <ul className={Styles.navlinksDesktop}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      {/* Hamburger icon for smaller screens */}
      <div className={Styles.hamburger} onClick={toggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Sidebar for smaller screens */}
      <div className={`${Styles.sidebar} ${isOpen ? Styles.active : ""}`}>
        <button className={Styles.closeBtn} onClick={closeSidebar}>
          ✖
        </button>
        <ul className={Styles.navlinksMobile}>
          <li>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidebar}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeSidebar}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeSidebar}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
