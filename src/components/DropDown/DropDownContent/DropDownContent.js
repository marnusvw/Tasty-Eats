import React from "react";
import styles from "./DropDownContent.module.css";
import { NavLink } from "react-router-dom";
import DropDownItem from "../DropDownItem/DropDownItem";
const DropDownContent = ({ path, children, open }) => {
  return (
    <div>
      {<NavLink to={path}
      className={`${styles.dropdown_content_closed} ${
        open ? styles.content_open : null
      }`}
    >
      {children?.map(item => <DropDownItem path={path} item={item}/>)}
    </NavLink>}
    </div>
  );
};

export default DropDownContent;
