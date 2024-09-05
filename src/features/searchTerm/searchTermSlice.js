import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => action.payload ? (state = action.payload) : (state = ""),
    clearSearchTerm: (state) => (state = ""),
  },
});

export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;

export const selectSearchTerm = (state) => state.search;

export default searchTermSlice.reducer;
