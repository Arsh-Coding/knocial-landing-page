
import React from "react";
import styles from "../Styles/Numbers.module.css";
import trophyIcon from "../assets/Awards.webp";
import networkIcon from "../assets/Network Installations.webp";
import statesIcon from "../assets/States Covered.webp";
import handshakeIcon from "../assets/HappyClients.webp";
import customersIcon from "../assets/HappyPeople.webp";

const statsData = [
  { label: "Satisfied Customers", value: "99.1%", icon: customersIcon },
  { label: "Awards Won", value: "489", icon: trophyIcon },
  { label: "Network Installations", value: "21498", icon: networkIcon },
  { label: "States Covered", value: "14", icon: statesIcon },
  { label: "Happy Clients", value: "721", icon: handshakeIcon },
];

const Numbers = () => {
  return (
    <div className={styles.numbersContainer}>
      <div className={styles.header}>
        <p>
          These are our Numbers <span className={styles.datedata}>(As on 31 Mar 2024)</span>
        </p>
      </div>
      <h2 className={styles.title}>The Stage Has Been Set</h2>
      <div className={styles.stats}>
        {statsData.map((stat, index) => (
          <div className={styles.statCard} key={index}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
            <img src={stat.icon} alt={stat.label} className={styles.statIcon} />
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <p>KNOCIAL</p>
      </div>
    </div>
  );
};

export default Numbers;
