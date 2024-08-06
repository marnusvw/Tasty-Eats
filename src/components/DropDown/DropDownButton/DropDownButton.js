import React from "react";
import styles from "./DropDownButton.module.css";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const DropDownButton = ({ path, children, open }) => {
  return (
    <NavLink to={path}
     
      className={`${styles.dropdown_btn} ${open ? styles.btn_open : null}`}
    >
      {children}
      <span className={styles.toggle_icon}>
        {open ? <FaChevronDown /> : <FaChevronLeft />}
      </span>
    </NavLink>
  );
};

export default DropDownButton;
