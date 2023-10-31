export const USER_AVATAR =
  "https://occ-0-4344-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOW_PLAYING_MOVIE_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIE_API =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIE_API =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIE_API =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const SEARCH_MOVIE_API =
  "https://api.themoviedb.org/3/search/movie?query=";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPENAIKEY = process.env.REACT_APP_OPENAPI_KEY;

export const gptQuery =
  "Act as Movie recommendation system and suggest some movies for the query : ";
export const gptExample =
  "only give me names of 5 movies, comma seperated. like the example resukt ahead. Example Result: Gadar, Fukrey, Golmaal, Hera pheri, OMG";
