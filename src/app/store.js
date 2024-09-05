import {configureStore} from '@reduxjs/toolkit'
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice'
import allRecipesReducer from "../features/allRecipes/allRecipesSlice";
import mealTypeSlice from '../features/MealType/mealTypeSlice';
import searchTermSlice from '../features/searchTerm/searchTermSlice';


export default configureStore({
    reducer: {
        allRecipes: allRecipesReducer,
        type: mealTypeSlice,
        search: searchTermSlice
    }
})