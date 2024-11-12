// components/Contact.js
import React from "react";

import waicon from "../assets/whatsapp.png";
import Styles from "../Styles/Wa.module.css";
const Contact = () => {
  
  return (
    <div>
      <a href="https://wa.me/918264988840">
      <img
        className={Styles.waiconEdit}
        src={waicon}
        alt="Send WhatsApp Message"
        // onClick={handleSendMessage}
        style={{
          cursor: "pointer",
          width: "50px",
          height: "50px",
        }}
      />
      </a>
    </div>
  );
};
export default Contact;
