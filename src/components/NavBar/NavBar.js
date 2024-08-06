import React from "react";
import styles from './NavBar.module.css'
import DropDown from "../DropDown/DropDown/DropDown";
import logo from '../../assets/logo.png'
import { Link, NavLink } from "react-router-dom";

const recipesContent = [
    'breakfast', 'lunch', 'dinner'
];
const quickMealsContent = [
    '30 Minute Dinners', 'Easy Chicken', 'Easy Vegetarian', 'Quick & Healthy' 
];

const sundayContent = [
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
                <DropDown path='Quick and Easy' buttonText="Quick & Easy" content={quickMealsContent}/>
                <DropDown path='Sunday Meals' buttonText="Sunday Meals" content={sundayContent}/>
                <DropDown path='Diet Meals' buttonText="Diet Meals" content={dietContent}/>
             
        </div>
    )
}
export default NavBar;