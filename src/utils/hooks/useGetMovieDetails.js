import { useEffect } from "react";
import { API_OPTION, MOVIE_DETAILS_API } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetail } from "../redux/movieDetailsSlice";

const useGetMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  const movieDetails = useSelector((store) => store?.movieDetails?.movie);
  useEffect(() => {
    !movieDetails[movieId] && getDetails();
  }, []);

  const getDetails = async () => {
    const data = await fetch(MOVIE_DETAILS_API + movieId, API_OPTION);
    const json = await data?.json();
    dispatch(addMovieDetail({ id: movieId, details: json }));
  };
};

export default useGetMovieDetails;
