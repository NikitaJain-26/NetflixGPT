import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movie: {},
  },
  reducers: {
    addMovieDetail: (state, action) => {
      state.movie[action.payload.id] = action.payload.details;
    },
  },
});

export const { addMovieDetail } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
