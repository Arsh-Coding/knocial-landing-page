import React, { useState } from "react";
import styles from "../Styles/Gallery.module.css"; // Import the CSS file for styling
import s1 from "../assets/Server Maintenance.png";
import s8 from "../assets/Training.jpg";
import s2 from "../assets/web development.webp";
import s3 from "../assets/Web Hoisting.png";
import s4 from "../assets/States Covered.webp";
import s5 from "../assets/Search Engine Optimization (SEO.png";
import s6 from "../assets/social media marketing.png";
import s7 from "../assets/Server Maintenance.png";
const images = [
  { src: s1, alt: "The Woods", caption: "Server Maintainence" },
  { src: s2, alt: "The Coast", caption: "Web Development" },
  { src: s3, alt: "Mountain Lake", caption: "Web Hoisting" },
  { src: s4, alt: "Northern Lights", caption: "States Covered" },
  { src: s5, alt: "Autumn Hills", caption: "SEO - Search Engine Optimisation" },
  { src: s6, alt: "Snowy Peaks", caption: "social media marketing" },
  { src: s7, alt: "Snowy Peaks", caption: "Server Maintainence" },
  { src: s8, alt: "Snowy Peaks", caption: "Training" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slideshowcontainer}>
      <div className={styles.mySlides}>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <div className={styles.text}>{images[currentIndex].caption}</div>
      </div>
      {/* Next and previous buttons */}
      <button className={styles.prev} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={styles.next} onClick={nextSlide}>
        &#10095;
      </button>

      {/* Thumbnail row */}
      <div className={styles.thumbnailrow}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${styles.thumbnail} ${
              index === currentIndex ? styles.activeThumbnail : ""
            }`}
            onClick={() => selectSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
