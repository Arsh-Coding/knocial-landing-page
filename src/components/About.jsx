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
      <Milestones/>
      <ServerRentalModel/>
      <ProductsBenefits/>
    </div>
  );
};

export default About;
