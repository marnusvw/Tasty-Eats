import { createSlice } from "@reduxjs/toolkit";

export const mealTypeSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setMealTyoe: (state, action) => (action.payload ? state = action.payload : state = ''),
    clearMealTyoe: (state) => (state = ""),
  },
});

export const { setMealTyoe, clearMealTyoe } = mealTypeSlice.actions;

export const selectMealTyoe = (state) => state.search;

export default mealTypeSlice.reducer;