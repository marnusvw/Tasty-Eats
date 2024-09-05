import {configureStore} from '@reduxjs/toolkit'
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice'
import allRecipesReducer from "../features/allRecipes/allRecipesSlice";
import mealTypeSlice from '../features/MealType/mealTypeSlice';


export default configureStore({
    reducer: {
        allRecipes: allRecipesReducer,
        type: mealTypeSlice
    }
})