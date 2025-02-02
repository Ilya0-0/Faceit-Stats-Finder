import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div className={styles.header_logo}>
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </div>
    </header>
  );
};

export default Header;
