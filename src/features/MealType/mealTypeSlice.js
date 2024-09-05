import { createSlice } from "@reduxjs/toolkit";

export const mealTypeSlice = createSlice({
  name: "type",
  initialState: "",
  reducers: {
    setMealType: (state, action) => (action.payload ? state = action.payload : state = ''),
    clearMealType: (state) => (state = ""),
  },
});

export const { setMealType, clearMealType } = mealTypeSlice.actions;

export const selectMealType = (state) => state.type;

export default mealTypeSlice.reducer;