import React, { useState, useEffect } from "react";
import styles from "../Styles/Numbers.module.css";
import trophyIcon from "../assets/Awards.webp";
import networkIcon from "../assets/Network Installations.webp";
import statesIcon from "../assets/States Covered.webp";
import handshakeIcon from "../assets/HappyClients.webp";
import customersIcon from "../assets/HappyPeople.webp";

const Numbers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: trophyIcon, caption: "" },
    { src: networkIcon, caption: "" },
    { src: customersIcon, caption: "" },
    { src: handshakeIcon, caption: "" },
    { src: statesIcon, caption: "" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3500); // Change slides every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]); // Only re-run effect if slides length changes

  return (
    <>
      <h1 className={styles.headingNumbers}>Spotlight on Knocial</h1>
    <div className={styles.container}>
      <div className={styles.slideshowContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.mySlides} ${styles.fade}`}
            style={{ display: index === currentSlide ? "block" : "none" }}
          >
            <div className={styles.numbertext}>{`${index + 1} / ${
              slides.length
            }`}</div>
            <img
              className={styles.imageComp}
              src={slide.src}
              alt={`Slide ${index + 1}`}
            />
            <div className={styles.text}>{slide.caption}</div>
          </div>
        ))}

        <button className={styles.prev} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={styles.next} onClick={nextSlide}>
          &#10095;
        </button>

        <div className={styles.dotContainer}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentSlide === index ? styles.active : ""
              }`}
              onClick={() => setSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className={styles.card}>
        <p className={styles.cardtitle}>KNOCIAL</p>
        <p className={styles.smalldesc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
          officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
          eum nihil itaque!
        </p>
        <div className={styles.gocorner}>
          <div className={styles.goarrow}>→</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Numbers;
