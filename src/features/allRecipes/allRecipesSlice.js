import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import Recipes from "../Data/data";

export const loadRecipes = createAsyncThunk("allRecipes/loadRecipes", async (type) => {
  const allRecipes = await Recipes.getRecipes(type);
  console.log("Hello")
  console.log(allRecipes)
  return allRecipes;
});


export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false, 
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadRecipes.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    })
    .addCase(
    loadRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
      console.log("Hello")
      state.isLoading = false;
      state.hasError = false;
    })
    .addCase(
    loadRecipes.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    })
  }
});

export const selectAllRecipes = (state) => state.allRecipes.recipes

export const getFilteredRecipes = (state) =>  {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default allRecipesSlice.reducer