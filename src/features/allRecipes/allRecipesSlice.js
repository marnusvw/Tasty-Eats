import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Recipes from "../Data/data";

export const loadRecipes = createAsyncThunk("allRecipes/loadRecipes", async () => {
  const allRecipes = await Recipes.getRanadomRecipes();
  return allRecipes;
});

const initialState = [];

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [loadRecipes.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadRecipes.fulfilled]: (state, action) => {
      state.recipes = action.payload;
      console.log("Hello")
      state.isLoading = false;
      state.hasError = false;
    },
    [loadRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

export const selectAllRecipes = (state) => state.allRecipes.recipes

export function getFilteredRecipes(recipes, searchTerm) {
  return recipes?.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default allRecipesSlice.reducer