import React from "react";
import styles from "./RecipeCard.module.css";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import placeHolder from '../../assets/image_placeholder.png'


const RecipeCard = ({recipe }) => {
  
  
  const location = useLocation();

  const baseUrl = location.pathname === '/' ? 'RecipesPage/' : '';
  
  return (
    <NavLink to={`${baseUrl} + ${recipe.title}`}>
       <div className={styles.recipeCard}>
    {recipe.image ? <img className={styles.recipeImage} src={recipe.image}/> : <img className={styles.recipeImage} src={placeHolder}/>}
      <h2>{recipe.title}</h2>
    <span className={styles.recipe_info}>
    <h4>Servings: {recipe.servings}</h4>
    <h4>Cook Time: {recipe.readyInMinutes} min</h4>
    </span>
    <div>{recipe.dishTypes}</div>
   </div>
  </NavLink>
  )
  
};

export default RecipeCard;

