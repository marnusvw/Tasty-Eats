import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../MealType/mealTypeSlice";
import Recipes from "../Data/data";

export const loadRecipes = createAsyncThunk("allRecipes/loadRecipes", async (type) => {
  const allRecipes = await Recipes.getRecipes(type);
  return allRecipes;
});


export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    id: '',
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

export const getSelectedRecipe = (state) => {
  const allRecipes = selectAllRecipes(state);


}

export const getFilteredRecipes = (state) =>  {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default allRecipesSlice.reducer