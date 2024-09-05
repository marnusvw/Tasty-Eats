import React from "react";
import styles from "./NavBar.module.css";
import DropDown from "../DropDown/DropDown/DropDown";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { selectSearchTerm } from "../../features/searchTerm/searchTermSlice";
import { useSelector } from "react-redux";
import SearchBar from "../Search/SearchBar";
const recipesContent = ["Breakfast", "Lunch", "Dinner"];
const quickMealsContent = [
  "30 Minute Dinners",
  "Easy Chicken",
  "Easy Vegetarian",
  "Quick & Healthy",
];

const sundayContent = ["Sunday Chicken", "Sunday Roasts", "Soups"];

const dietContent = [
  "Vegetarian",
  "Keto",
  "vegan",
  "gluten free",
  "low fodmap",
];
const NavBar = () => {
    const searchTerm = useSelector(selectSearchTerm)
  return (
    <div className={styles.Navbar}>
      <div className={styles.Nav}>
        <div className={styles.NavBar}>
          <NavLink to="/">
            <img className={styles.logo} src={logo} />
          </NavLink>
          <DropDown
            path="RecipesPage"
            buttonText="Recipes"
            content={recipesContent}
          />
          <DropDown
            path="Quick and Easy"
            buttonText="Quick & Easy"
            content={quickMealsContent}
          />
          <DropDown
            path="Sunday Meals"
            buttonText="Sunday Meals"
            content={sundayContent}
          />
          <DropDown
            path="Diet Meals"
            buttonText="Diet Meals"
            content={dietContent}
          />
        </div>
        <Link
          target="_blank"
          to="https://github.com/marnusvw/Tasty-Eats/tree/master"
        >
          Github Repository
        </Link>
      </div>
      <div className={styles.searchBar}>
        <SearchBar term={searchTerm}/>
      </div>
    </div>
  );
};
export default NavBar;
