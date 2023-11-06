import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import movieDetailsReducer from "./movieDetailsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gptSearch: gptReducer,
    config: configReducer,
    movieDetails: movieDetailsReducer,
  },
});

export default appStore;
