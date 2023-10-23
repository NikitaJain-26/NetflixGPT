import { useSelector } from "react-redux";
import useGetNowPlayingMovies from "../utils/hooks/useGetNowPlayingMovies";
import useGetPopularMovies from "../utils/hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../utils/hooks/useGetTopRatedMovies";
import useGetUpcomingMovies from "../utils/hooks/useGetUpcomingMovies";
import GPTSearch from "./GPTSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const isGptSearch = useSelector((store) => store.gptSearch?.gptSearch);
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetUpcomingMovies();
  useGetTopRatedMovies();
  return (
    <div className="">
      {isGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
