import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";
import { API_OPTION, POPULAR_MOVIE_API } from "../constant";

const useGetPopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store?.movie?.popularMovies);
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const result = await fetch(POPULAR_MOVIE_API, API_OPTION);
    const data = await result.json();
    dispatch(addPopularMovies(data?.results));
  };
};

export default useGetPopularMovies;
