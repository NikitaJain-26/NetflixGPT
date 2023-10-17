import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../redux/moviesSlice";
import { API_OPTION, MOVIE_API } from "../constant";

const useGetMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const result = await fetch(MOVIE_API, API_OPTION);
    const data = await result.json();
    dispatch(addMovies(data?.results));
  };
};

export default useGetMovies;
