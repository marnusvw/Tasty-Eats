import React from "react";
import styles from "./DropDownButton.module.css";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
const DropDownButton = ({ children, open }) => {
  return (
    <div
     
      className={`${styles.dropdown_btn} ${open ? styles.btn_open : null}`}
    >
      {children}
      <span className={styles.toggle_icon}>
        {open ? <FaChevronDown /> : <FaChevronLeft />}
      </span>
    </div>
  );
};

export default DropDownButton;
