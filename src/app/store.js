import {configureStore} from '@reduxjs/toolkit'
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice'
import allRecipesReducer from "../features/allRecipes/allRecipesSlice";
import searchReducer from '../features/searchTerm/searchTermSlice'


export default configureStore({
    reducer: {
        allRecipes: allRecipesReducer,
        search: searchReducer
    }
})