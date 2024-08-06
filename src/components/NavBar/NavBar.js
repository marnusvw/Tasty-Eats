import React from "react";
import styles from './NavBar.module.css'
import DropDown from "../DropDown/DropDown/DropDown";
import logo from '../../assets/logo.png'
import { Link, NavLink } from "react-router-dom";

const recipesContent = [
    'breakfast', 'lunch', 'dinner'
];
const quickMealsContent = [
    '30 Dinute Dinners', 'Easy Chicken', 'Easy Vegetarian', 'Quick & Healthy' 
];

const roastContent = [
    'Sunday Chicken', 'Sunday Roasts', 'Soups'
]

const dietContent = [
    'Vegetarian', 'Keto', 'vegan', 'gluten free', 'low fodmap'
]
const NavBar = () => {
    
   
    return (
        <div className={styles.NavBar}>
                <NavLink  to='/' ><img className={styles.logo}  src={logo}/></NavLink>
                <DropDown path='RecipesPage' buttonText="Recipes" content={recipesContent}/>
                <DropDown path='RecipesPage' buttonText="Quick & Easy" content={quickMealsContent}/>
                <DropDown path='RecipesPage' buttonText="Sunday Meals" content={roastContent}/>
                <DropDown path='RecipesPage' buttonText="Diet Meals" content={dietContent}/>
             
        </div>
    )
}
export default NavBar;