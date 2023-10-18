import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { API_OPTION, NOW_PLAYING_MOVIE_API } from "../constant";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const result = await fetch(NOW_PLAYING_MOVIE_API, API_OPTION);
    const data = await result.json();
    dispatch(addNowPlayingMovies(data?.results));
  };
};

export default useGetNowPlayingMovies;
