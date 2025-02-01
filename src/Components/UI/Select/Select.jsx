import React, { useEffect, useRef, useState } from "react";
import styles from "./select.module.scss";

const Select = ({ options, defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectRef}
      className={`${styles.select_container} ${isOpen && styles.open}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.select}>{defaultValue || "Выберите значение"}</div>
      {isOpen && (
        <ul className={styles.select_list}>
          {options.map((option) => (
            <li
              key={option}
              className={styles.select_list__item}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
