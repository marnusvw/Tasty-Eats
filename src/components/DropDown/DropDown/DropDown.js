import React, { useState } from "react";
import DropDownButton from "../DropDownButton/DropDownButton";
import DropDownContent from "../DropDownContent/DropDownContent";
import styles from "./DropDown.module.css";
const DropDown = ({ buttonText, content }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen((open) => !open);
  };



  return (
    <div className={styles.dropdown} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <DropDownButton open={open}>
        {buttonText}
      </DropDownButton>
       <DropDownContent open={open}>{content}</DropDownContent>
    </div>
  );
};

export default DropDown;
