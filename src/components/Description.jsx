import React from "react";
import styles from "../Styles/Desc.module.css";
import teamImage from "../assets/knocial office.jpeg"; // replace with the path to your image

const Description = () => {
  return (
    <>
      <div className={styles.scrollingTextContainer}>
        <div className={styles.scrollingText}>
          <h1>
            | Hosting Services | Cloud Computing | Server Maintenance | Search
            Engine Optimization (SEO) | Social Media Marketing | Content
            Marketing | Custom Software Development | Web Development |
            Customized Workshops | Digital Marketing Training | Mobile App
            Development | Technical Training |
          </h1>
        </div>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.content}>
          <h2>About Us</h2>
          <p>
            Knocial is a reputed and trusted IT Solutions provider that works
            with the sole objective of taking your business to newer heights of
            growth and prosperity through innovative and tailored web solutions
            in development, marketing, and training programs. With our
            commitment to excellence, our team is your go-to partner while
            navigating the digital landscape.
          </p>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>8K</h3>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className={styles.statItem}>
              <h3>250+</h3>
              <p>TEAM MEMBERS</p>
            </div>
            <div className={styles.statItem}>
              <h3>5K+</h3>
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={teamImage} alt="Team high-fiving" />
        </div>
      </div>
    </>
  );
};

export default Description;
