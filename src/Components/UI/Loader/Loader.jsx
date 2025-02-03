import React from "react";
import styles from "./loader.module.scss";

const Loader = ({ size = 100 }) => {
  return (
    <div
      className={styles.loader_container}
      style={{ width: size, height: size }}
    >
      <div className={styles.logo_container}>
        <svg
          className={styles.logo}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            d="M0 100L5.71335 10.4492L42.9811 6.24476L0 100Z"
            fill="#FF5500"
          />
          <path
            d="M40.4688 28.0499L50.8683 5.63689L100 0L40.4688 28.0499Z"
            fill="#FF5500"
          />
          <path
            d="M30.0692 50.4629L37.8689 33.6532L71.7517 29.7836L30.0692 50.4629Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
