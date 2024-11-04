import React from "react";
import styles from "../Styles/BoardDirectors.module.css";

const BoardMember = ({ name, title, image }) => {
  return (
    <div className={styles.boardMember}>
      <div className={styles.logo}>KNOCIAL</div>
      <img src={image} alt={{name}} className={styles.memberPhoto} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default BoardMember;
