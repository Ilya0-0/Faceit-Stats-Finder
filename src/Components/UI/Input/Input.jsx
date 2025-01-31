import React from "react";
import styles from "./input.module.scss";

const Input = ({ label, id, onChange, ...props }) => {
  return (
    <div className={styles.input_container}>
      <input
        {...props}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
        placeholder=" "
        id={id}
      />
      <label className={styles.input_label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.input_magnifier}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
    </div>
  );
};

export default Input;
