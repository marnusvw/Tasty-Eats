import React from 'react'
import styles from './HomePage.module.css';
import NavBar from '../../components/NavBar/NavBar'
import { useState, useEffect } from 'react';
import Recipes from '../../features/Data/data';
import logo from '../../assets/logo.png'
import RecipeCard from '../../components/Recipe/RecipeCard';




const HomePage = () => {
    const [recipes, setRecipes] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    // const fetchRandomRecipes = async () => {
    //   console.log(isLoading);
    //   const recipesFetched = await Recipes.getRecipes();
    //   console.log(recipesFetched);
    //   setRecipes(recipesFetched);
    //   console.log(isLoading);
    // };
    
    // useEffect(() => {    
    //   fetchRandomRecipes();
    //   }, []);
  return (
    <div className={styles.HomePage}>
        {/* {recipes.recipes?.map(recipe => {
          <li>{recipe.id}</li>
        })} */}
        {/* <img src='https://spoonacular.com/recipeImages/Ramen-Noodle-Coleslaw-556177.jpg'/> */}
          <h1>Wonderfully tasty meals</h1>
        <RecipeCard />
    </div>  
  )
}

export default HomePage