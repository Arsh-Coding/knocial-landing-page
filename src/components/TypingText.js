import React, { useState, useEffect } from "react";
import styles from "../Styles/Typing.module.css";

const TypingText = ({ texts, speed, delayBetweenTexts }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [finalText, setFinalText] = useState(texts[0]); // Last fully typed-out word
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    if (!isDeleting && charIndex < currentText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (isDeleting && charIndex > 0) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (!isDeleting && charIndex === currentText.length) {
      setFinalText(currentText); // Update finalText when fully typed
      setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length); // Loop to next text
    }
  }, [charIndex, isDeleting, index, speed, texts, delayBetweenTexts]);

  return (
    <p className={styles.typingtext}>
      <span className={styles.finalText}>{finalText}</span>
      <span className={styles.dynamicText}>{displayedText}</span>
    </p>
  );
};

export default TypingText;
