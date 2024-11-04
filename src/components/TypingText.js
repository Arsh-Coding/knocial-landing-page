import React, { useState, useEffect } from "react";

const TypingText = ({ texts, speed, delayBetweenTexts }) => {
  const [displayedText, setDisplayedText] = useState("");
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
      setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length); // Loop to next text
    }
  }, [charIndex, isDeleting, index, speed, texts, delayBetweenTexts]);

  return <p style={{ fontSize: "1.5rem", color: "white"}}>{displayedText}</p>;
};

export default TypingText;
