import React from "react";
import styles from "./DropDownContent.module.css";
const DropDownContent = ({ children, open }) => {
  return (
    <div
      className={`${styles.dropdown_content_open} ${
        open ? styles.content_open : null
      }`}
    >
      {children}
    </div>
  );
};

export default DropDownContent;
