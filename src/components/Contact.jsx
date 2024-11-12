// src/components/RequestForm.js
import React, { useState, useEffect } from "react";
import styles from "../Styles/RequestForm.module.css";
import WhatsAppCall from "./WhatsAppCall";

const RequestForm = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100); // Delay for smoother effect
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    region: "",
    industry: "",
    help: "",
    consent: false,
    receiveUpdates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };
  return (
    <div className={`${styles.container} ${isLoaded ? styles.loaded : ""}`}>
      <h1 className={styles.title}>Request for Services</h1>
      <p className={styles.description}>
        We've driven growth and purposeful transformation across every industry
        and we're excited to build on your belief. Tell us a bit more about
        yourself, so we can get the ball rolling.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldGroup}>
          <label>First name*</label>
          <input
            type="text"
            name="firstName"
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label>Last name*</label>
          <input type="text" name="lastName" required onChange={handleChange} />
        </div>
        <div className={styles.fieldGroup}>
          <label>Email*</label>
          <br />
          <input type="email" name="email" required onChange={handleChange} />
        </div>
        <div className={styles.fieldGroup}>
          <label>Organization*</label>
          <input
            type="text"
            name="organization"
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label>Region*</label>
          <br />
          <select name="region" required onChange={handleChange}>
            <option value="" disabled>
              Select your region
            </option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        <div className={styles.fieldGroup}>
          <label>Industry*</label>
          <br />
          <select name="industry" required onChange={handleChange}>
            <option value="" disabled>
              Select your industry
            </option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className={styles.fieldGroup}>
          <label>How can we help you?*</label>
          <textarea
            name="help"
            maxLength="1500"
            onChange={handleChange}
            required
          />
        </div>

        <button className={styles.submitButton}>Send</button>
      </form>
      <WhatsAppCall />
    </div>
  );
};

export default RequestForm;
