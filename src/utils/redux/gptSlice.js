import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptSearch: false,
    gptMovieResult: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    addMovieResult: (state, action) => {
      state.gptMovieResult = action.payload.movieList;
      state.movieNames = action.payload.movieNames;
    },
  },
});

export const { toggleGptSearch, addMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
