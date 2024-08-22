import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredRecipes, selectAllRecipes } from "./allRecipesSlice";
import Spinner from "../../components/spinner";
import RecipeCard from "../../components/Recipe/RecipeCard";
import styles from "./allRecipes.module.css";
import { useParams } from "react-router-dom";
import { selectMealType, setMealTypes } from "../MealType/mealTypeSlice";

const AllRecipes = ({ onChangeType}) => {
  const dispatch = useDispatch()
  const {type} = useParams()
  const allRecipes = useSelector(selectAllRecipes);
  const { isLoading } = useSelector((state) => state.allRecipes);

  useEffect(() => {
    if (type !== ''){
      dispatch(setMealType(type))
    }
  },[dispatch, type])

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={styles.recipes_container}>
      {allRecipes.map((recipe) => (
        <div>
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default AllRecipes;
