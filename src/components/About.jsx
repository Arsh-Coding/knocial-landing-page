import React from "react";
import indiaAmblem from "../assets/indiaAmblem.png";
import logo from "../assets/Knocial Logo.png";
import style from "../Styles/About.module.css";
import Milestones from "./MilesStone";
import ServerRentalModel from "./ServerRentalModal";
import ProductsBenefits from "./ProductsBenefits";

const About = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.logo}>
          <img src={logo} alt="Knocial Logo" />
        </div>
      </header>

      <main className={style.content}>
        <h1 className={style.companyName}>
          KNOCIAL INDIA LIMITED | नॉशियल इंडिया लिमिटेड
        </h1>
        <h2 className={style.values}>
          INTEGRITY (अखंडता) | PROSPERITY (समृद्धि) | DIGNITY (गरिमा)
        </h2>
        <p className={style.established}>Established in 2014</p>
      </main>

      <footer className={style.footer}>
        <img src={indiaAmblem} alt="Government Seal" className={style.seal} />
        <p>
          Registered under Ministry of Corporate Affairs (Government of India) |
          CIN U74999HR2020PLC090598
        </p>
      </footer>
      <div className={StyleSheet.expretise}>
        <h1>Our Expertise</h1>
        <p>
          At Knocial India Limited, we are dedicated to providing a
          comprehensive range of innovative solutions designed to empower
          businesses in today’s digital landscape. Our services span across
          custom software development, cloud computing, and digital
          transformation strategies tailored to help companies of all sizes
          streamline their operations and achieve their objectives. We
          specialize in developing scalable applications, optimizing IT
          infrastructure, and delivering robust data analytics solutions to
          provide actionable insights. Additionally, our expert team offers
          end-to-end consulting in cybersecurity, ensuring that our clients’
          data is secure and compliant with industry standards. With a
          commitment to integrity, prosperity, and dignity, we go beyond just
          offering services; we partner with our clients to foster long-term
          growth and success. Whether you are looking to modernize legacy
          systems or launch cutting-edge digital platforms, Knocial India
          Limited is here to help you every step of the way.
        </p>
      </div>
      <Milestones/>
      <ServerRentalModel/>
      <ProductsBenefits/>
    </div>
  );
};

export default About;
