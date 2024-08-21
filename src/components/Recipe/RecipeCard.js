import React from "react";
import styles from "./RecipeCard.module.css";
import DOMPurify from 'dompurify';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import placeHolder from '../../assets/image_placeholder.png'


const RecipeCard = ({recipe, onRecipeSelect }) => {
  
  const sanitizedHTML = DOMPurify.sanitize(recipe.summary);
  const location = useLocation();
  const navigate = useNavigate();

  const baseUrl = location.pathname === '/' ? 'RecipesPage/' : '';
  
  return (
    <NavLink onClick={(recipe) => onRecipeSelect(recipe)} to={baseUrl + recipe.title}  className={styles.cardLink}>
       <div className={styles.recipeCard}>
    {recipe.image ? <img className={styles.recipeImage} src={recipe.image}/> : <img className={styles.recipeImage} src={placeHolder}/>}
      <h2>{recipe.title}</h2>
    <span className={styles.recipe_info}>
    <h3>Servings: {recipe.servings}</h3>
    <h3>Cook Time: {recipe.readyInMinutes} min</h3>
    </span>
   </div>
  </NavLink>
  )
  
};

export default RecipeCard;

