import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";
import { API_OPTION, UPCOMING_MOVIE_API } from "../constant";

const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store?.movie?.upcomingMovies);
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const result = await fetch(UPCOMING_MOVIE_API, API_OPTION);
    const data = await result.json();
    dispatch(addUpcomingMovies(data?.results));
  };
};

export default useGetUpcomingMovies;
