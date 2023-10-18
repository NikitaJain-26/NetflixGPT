import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movie?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store?.movie?.popularMovies);
  const topRatedMovies = useSelector((store) => store?.movie?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store?.movie?.upcomingMovies);
  return (
    <div className="bg-black">
      <div className="-mt-60">
        {nowPlayingMovies && (
          <MovieList title={"Now playing"} movies={nowPlayingMovies} />
        )}
        {popularMovies && (
          <MovieList title={"Popular"} movies={popularMovies} />
        )}
        {topRatedMovies && (
          <MovieList title={"Top rated"} movies={topRatedMovies} />
        )}
        {upcomingMovies && (
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
