import React, { useState } from "react";
import DropDownButton from "../DropDownButton/DropDownButton";
import DropDownContent from "../DropDownContent/DropDownContent";
import styles from "./DropDown.module.css";

const DropDown = ({ path, buttonText, content }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((open) => !open);
  };



  return (
    <div className={styles.dropdown} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <DropDownButton path={path} open={open}>
        {buttonText}
      </DropDownButton>
       <DropDownContent path={path} open={open}>{content}</DropDownContent>
    </div>
  );
};

export default DropDown;
