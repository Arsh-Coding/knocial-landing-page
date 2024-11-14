// Loading.js
import React from "react";
import styles from "../Styles/loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.loaderText}>
        {/* <span className={styles.heading}>Knocial</span> */}
      </span>
      <div class={styles.spinner}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
      <span className={styles.load}></span>
    </div>
  );
};

export default Loading;
