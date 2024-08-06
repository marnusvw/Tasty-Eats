import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Recipes from "../../features/Data/data";

const RecipesPage = () => {
  const { type } = useParams();
  const [recipesType, setRecipesType] = useState({});

  // const getRecipes = async (type) => {
  //   const recipesFetched = await Recipes.getRecipesByType(type);
  //   setRecipesType(recipesFetched);
  // };

  // useEffect(() => {
  //   getRecipes();
  // }, [type]);
  return (
  <div>
    Recipes Page
  </div>);
};

export default RecipesPage;
