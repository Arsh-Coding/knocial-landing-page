import React from "react";
import Gallery from "./Gallery";
import Styles from "../Styles/Services.module.css"
import SumServices from "./SumServices";
// import Milestones from "./MilesStone";
const Services = () => {
  return (
    <>
    <div className={Styles.Servicecontainer}>
      <h1 className={Styles.heading}>Services</h1>
    </div>
      <Gallery/>
      
      <SumServices/>
    </>
  );
};

export default Services;
