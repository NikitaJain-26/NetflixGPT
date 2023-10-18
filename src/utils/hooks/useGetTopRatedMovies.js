import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";
import { API_OPTION, TOP_RATED_MOVIE_API } from "../constant";

const useGetTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const result = await fetch(TOP_RATED_MOVIE_API, API_OPTION);
    const data = await result.json();
    dispatch(addTopRatedMovies(data?.results));
  };
};

export default useGetTopRatedMovies;
