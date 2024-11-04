import React from "react";
import styles from "../Styles/BoardDirectors.module.css";
import BoardMember from "./BoardMembers";
import Chairman from "../assets/Chairman Raman Sir.jpg";
import CF from "../assets/Chief Finance Officer.jpg";
import BM from "../assets/Board Member.jpg";
import MD from "../assets/Managing Director.jpg";

const boardMembers = [
  {
    name: "RRaman V Grover",
    title: "Chairman & Founder",
    image: Chairman, // Replace with the actual path or URL of the image
  },
  {
    name: "Sardar Ali",
    title: "Managing Director",
    image: MD,
  },
  {
    name: "Gurpreet Singh",
    title: "Chief Finance Officer",
    image: CF,
  },
  {
    name: "Jarnail Singh",
    title: "Board Member",
    image:BM,
  },
];

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Board of Directors</h1>
      <div className={styles.boardContainer}>
        {boardMembers.map((member, index) => (
          <BoardMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default App;
