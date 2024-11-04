import React from "react";

const milestones = [
  {
    year: "2014",
    text: "Company launched as Knocial India IT Services (partnership firm) on 22th Dec 2014.",
  },
  {
    year: "2015",
    text: "Tied up with two major clients in the IT Industry and company becomes a private limited.",
  },
  {
    year: "2018",
    text: "85+ major clients / 7 major states covered in India & many other achievements.",
  },
  {
    year: "2020",
    text: "Company becomes Public limited (02th Nov 2020) and Headquarters established in the heart of the city Gurugram",
  },
  {
    year: "2022",
    text: "170+ major clients / fresher recruitment spread to 700+ reputed colleges / started expanding into different forays of IT.",
  },
  {
    year: "2023",
    text: "4 major Investors tie up with Knocial / Special board resolution passed for Data Center.",
  },
  {
    year: "2024",
    text: "Growing in new sectors Education, Health, Immigration, FMCG, Entertainment, Real Estate.",
  },
];

const Milestones = () => {
  // Inline styles
  const styles = {
    milestonesContainer: {
      textAlign: "center",
      marginLeft: "25px",
      backgroundColor: "#f4f4f4",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    heading1: {
      color: "#fff",
      backgroundColor: "#000",
      padding: "10px",
      marginBottom: "10px",
    },
    heading2: {
      fontWeight: "normal",
      marginBottom: "20px",
    },
    list: {
      listStyleType: "none",
      padding: "0",
    },
    listItem: {
      textAlign: "left",
      fontSize: "18px",
      margin: "10px 0",
    },
    footer: {
      marginTop: "20px",
      fontSize: "20px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.milestonesContainer}>
      <h1 style={styles.heading1}>Milestones in Our Journey</h1>
      <h2 style={styles.heading2}>
        The Only impossible journey is the one you never begin
      </h2>
      <ul style={styles.list}>
        {milestones.map((milestone, index) => (
          <li key={index} style={styles.listItem}>
            <strong>{milestone.year}</strong> - {milestone.text}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Milestones;
