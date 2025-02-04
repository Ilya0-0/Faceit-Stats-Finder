import React from "react";
import styles from "./statBox.module.scss";

const StatBox = ({ children, className = "" }) => {
  return (
    <article className={`${styles.statBox} ${className}`}>{children}</article>
  );
};

export default StatBox;
