// src/BoardMembers.js
import React from "react";
import styles from "../Styles/ListBoard.module.css"; // Import the CSS module file
import image from "../assets/Logo.png"

const members = [
  { name: "RRaman V Grover", position: "Chairman & Founder" },
  { name: "Sardar Ali", position: "Managing Director" },
  { name: "Gurpreet Singh", position: "Chief Finance Officer" },
  { name: "Prabhjeet Kaur", position: "Chief Marketing Officer" },
  { name: "Neha Grover", position: "Chief Legal Officer" },
  { name: "Jarnail Singh", position: "Board Member" },
  { name: "Tanvi Shehbaz", position: "Board Member" },
  { name: "Burhaan Basit Posslay", position: "Board Member" },
  { name: "Anant Preet Kaur", position: "Board Member" },
];

const BoardMembers = () => {
  return (
    <div className={styles.boardContainer}>
      <h1 className={styles.boardTitle}>Board of Members</h1>
      <table className={styles.boardTable}>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className={styles.boardRow}>
              <td className={styles.logoCell}>
                <strong>Knocial</strong>
              </td>
              <td className={styles.memberName}>{member.name}</td>
              <td className={styles.memberPosition}>{member.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className={styles.footer}>
        <img src={image} alt="" />
      </footer>
    </div>
  );
};

export default BoardMembers;
