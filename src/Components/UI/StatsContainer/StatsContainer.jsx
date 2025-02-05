import React from "react";
import styles from "./statsContainer.module.scss";

const StatsContainer = ({ className = " ", children }) => {
  return (
    <div className={`${styles.statsContainer} ${className}`}>{children}</div>
  );
};

export default StatsContainer;
