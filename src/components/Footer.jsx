import React from "react";
import { Link } from "react-router-dom";
import style from "../Styles/Footer.module.css"; // Adjust the path to your CSS file if needed
import logo from "../assets/Logo.png"; // Import the logo if it's in your assets folder

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerSection}>
        <img src={logo} alt="Knocial Logo" className={style.footerLogo} />
        <p className={style.footerDescription}>
          knocial provides customised IT solutions for businesses to maximize
          benefits, drive traffic, generate leads, and give wings to businesses.
          We specialize in designs, developments, and digital marketing.
        </p>
      </div>
      <div className={style.footerSection}>
        <h3>Useful Links</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Our Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
      </div>

      <div className={style.footerSection}>
        <h3>Useful Links</h3>
        <ul>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/">Disclaimer</Link>
          </li>
        </ul>
      </div>

      <div className={style.footerSection}>
        <h3>Contact Us</h3>
        <p>
          <strong>Location</strong>
          909-910, Imperial Tower, CP 67, Mohali, Punjab 160062, INDIA
        </p>
        <p>
          <strong>Contact Details</strong>
          <br />
          <a href="tel:+9191919191">+91 9191919191</a>
          <br />
          <a href="mailto:knocialpvtltd@gmail.com">knocialpvtltd@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
