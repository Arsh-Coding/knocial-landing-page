import React from "react";
import Gallery from "./Gallery";
import Styles from "../Styles/Services.module.css"
import SumServices from "./SumServices";
import { useNavigate } from "react-router-dom";
import { sendMessage } from "./services/WhatsAppApi";
// import Milestones from "./MilesStone";
const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={Styles.Servicecontainer}>
        <h1 className={Styles.heading}>Services</h1>

        <Gallery />
        <SumServices />
        <div className={Styles.buttonContainer}>
        <button
          className={Styles.serviceButton}
          onClick={() => navigate("/contact")}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>{" "}
          Schedule a Meeting
        </button>
        <button
          className={Styles.serviceButton}
          onClick={sendMessage}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>{" "}
          Request a Plan
        </button>
        </div>
      </div>
    </>
  );
};

export default Services;
