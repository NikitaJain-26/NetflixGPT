import { useEffect } from "react";
import { API_OPTION } from "../constant";
import { useDispatch } from "react-redux";
import { addTrailorKey } from "../redux/moviesSlice";

const useGetMovieTrailor = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTrailor();
  }, []);

  const getTrailor = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTION
    );
    const json = await data?.json();
    const trailor = json?.results.filter((video) => video.type == "Trailer");
    dispatch(
      addTrailorKey(trailor.length ? trailor[0].key : json?.results[0].key)
    );
  };
};

export default useGetMovieTrailor;
