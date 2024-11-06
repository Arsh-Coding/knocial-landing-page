import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Navbar.module.css";
import Image from "../assets/MainLogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.logo}>
        <img src={Image} alt="Knocial Logo" height={"40px"} />
      </div>
      <span className={Styles.logotitle}>KNOCIAL India Ltd</span>

      {/* Main navigation links for larger screens */}
      <ul className={Styles.navlinksDesktop}>
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* About Us dropdown */}
        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span className={Styles.heading}>About Us</span>
          <ul
            className={`${Styles.dropdownMenu} ${
              isDropdownOpen ? Styles.active : ""
            }`}
          >
            <li className={Styles.linkthis}>
              <Link to="/about">Overview</Link>
            </li>
            <li className={Styles.linkthis}>
              <Link to="/about/milestones">Milestones</Link>
            </li>
            <li className={Styles.linkthis}>
              <Link to="/about/server-rental-model">Server Rental Model</Link>
            </li>
            <li className={Styles.linkthis}>
              <Link to="/about/products-benefits">Products & Benefits</Link>
            </li>
          </ul>
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
      <div
        ref={sidebarRef}
        className={`${Styles.sidebar} ${isOpen ? Styles.active : ""}`}
      >
        <button className={Styles.closeBtn} onClick={closeSidebar}>
          ✖
        </button>
        <ul className={Styles.navlinksMobile}>
          <li>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>

          {/* About Us dropdown in mobile */}
          <li>
            <span onClick={toggleDropdown}>About Us</span>
            {isDropdownOpen && (
              <ul className={Styles.dropdownMenuMobile}>
                <li>
                  <Link to="/about" onClick={closeSidebar}>
                    Overview
                  </Link>
                </li>
                <li>
                  <Link to="/about/milestones" onClick={closeSidebar}>
                    Milestones
                  </Link>
                </li>
                <li>
                  <Link to="/about/server-rental-model" onClick={closeSidebar}>
                    Server Rental Model
                  </Link>
                </li>
                <li>
                  <Link to="/about/products-benefits" onClick={closeSidebar}>
                    Products & Benefits
                  </Link>
                </li>
              </ul>
            )}
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
