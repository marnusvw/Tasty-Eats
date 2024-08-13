import { combineReducers } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice'
import { allRecipesSlice } from "../features/allRecipes/allRecipesSlice";

const reducers = {
    allRecipes: allRecipesSlice,
}
const rootReducer = combineReducers(reducers)

export const store = configureStore({
    reducer: rootReducer
})