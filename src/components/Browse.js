import useGetNowPlayingMovies from "../utils/hooks/useGetNowPlayingMovies";
import useGetPopularMovies from "../utils/hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../utils/hooks/useGetTopRatedMovies";
import useGetUpcomingMovies from "../utils/hooks/useGetUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetUpcomingMovies();
  useGetTopRatedMovies();
  return (
    <div className="">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
