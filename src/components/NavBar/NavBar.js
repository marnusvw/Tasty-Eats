import React from "react";
import styles from '../../styles/NavBar.module.css'
import DropDown from "../DropDown/DropDown/DropDown";
import { useState } from "react";

const NavBar = () => {
   
    return (
        <div className={styles.NavBar}>
                <DropDown buttonText="Recipes" content={<p>Recipes</p>}/>
                <DropDown buttonText="Quick Meals" content={<a href="https:www.youtube.com">Click Me</a>}/>
                <DropDown buttonText="Sunday Meals" content={<p>Sunday Meals</p>}/>
                <DropDown buttonText="Diet Meals" content={<p>Diet Meals</p>}/>
             
        </div>
    )
}
export default NavBar;