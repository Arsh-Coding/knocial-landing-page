// components/Contact.js
import React from "react";

import { sendMessage } from "./services/WhatsAppApi";
import waicon from "../assets/whatsapp.png";
import Styles from "../Styles/Wa.module.css";
const Contact = () => {
  const handleSendMessage = () => {
    sendMessage();
  };
  return (
    <div>
      <img
        className={Styles.waiconEdit}
        src={waicon}
        alt="Send WhatsApp Message"
        onClick={handleSendMessage}
        style={{
          cursor: "pointer",
          width: "50px",
          height: "50px",
        }}
      />
    </div>
  );
};
export default Contact;
