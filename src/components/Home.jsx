import React from "react";
import styles from "../Styles/Home.module.css";
import myImage from "../assets/Digital Data.gif";
import RevenueImage from "../assets/revenue.webp";
import TypingText from "./TypingText";
import Description from "./Description";
import { Link } from "react-scroll";
import Numbers from "./Numbers";
import BoardOfDirectors from "./BoardOfDirectors";
import ListBoardMembers from "./ListBoardMembers";
// import Footer from "./Footer";

const Home = () => {
  const phrases = [
    "Server Solutions",
    "Digital Marketing",
    "Development Services",
    "Training Programs",
  ];

  return (
    <>
      <div className={styles.container}>
        <img className={styles.background} src={myImage} alt="background.gif" />
        <div className={styles.content}>
          <div className={styles.KnocialIndia}>
            Information Technology (IT) services
          </div>
          <h1 className={styles.mainHeading}>
            At Knocial, we provide solutions <br /> that drive your success:{" "}
            <span className={styles.inlineTyping}>
              <TypingText
                texts={phrases}
                speed={100}
                delayBetweenTexts={1000}
              />
            </span>
          </h1>
          <p className={styles.description}>
            {/* Description text here */}
            <Link to="description" smooth={true} duration={500}>
              <button className={styles.exploreButton}>Explore</button>
            </Link>
          </p>
        </div>
      </div>
      <div id="description">
        <Description />
      </div>
      <Numbers />
      <BoardOfDirectors />
      <div className={styles.revenueModel}>
        <h2 className={styles.titlerevenue}>Our Revenue Representation</h2>
        <img className={styles.revenue} src={RevenueImage} alt="Revenue" />
      </div>
      <ListBoardMembers />
    </>
  );
};

export default Home;
