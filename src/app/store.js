import { combineReducers } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice'
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";

const reducers = {
    allRecipes: allRecipesReducer,
}
const rootReducer = combineReducers(reducers)

export const store = configureStore({
    reducer: rootReducer
})