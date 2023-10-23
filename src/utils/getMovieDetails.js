import { API_OPTION, SEARCH_MOVIE_API } from "./constant";

export const getMovieDetails = async (movieName) => {
  const data = await fetch(
    SEARCH_MOVIE_API + movieName + "&include_adult=false&page=1",
    API_OPTION
  );
  const json = await data.json();
  return json?.results;
};
