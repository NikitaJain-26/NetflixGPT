import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: null,
    trailorKey: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addTrailorKey: (state, action) => {
      state.trailorKey = action.payload;
    },
  },
});

export const { addMovies, addTrailorKey } = movieSlice.actions;
export default movieSlice.reducer;
