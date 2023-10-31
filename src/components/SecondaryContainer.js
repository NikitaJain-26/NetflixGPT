import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { langConstant } from "../utils/strings";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movie?.nowPlayingMovies
  );
  const lang = useSelector((store) => store.config.lang);
  const popularMovies = useSelector((store) => store?.movie?.popularMovies);
  const topRatedMovies = useSelector((store) => store?.movie?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store?.movie?.upcomingMovies);
  return (
    <div className="bg-black">
      <div className="-mt-60">
        {nowPlayingMovies && (
          <MovieList
            title={langConstant[lang].nowPlaying}
            movies={nowPlayingMovies}
          />
        )}
        {popularMovies && (
          <MovieList
            title={langConstant[lang].popular}
            movies={popularMovies}
          />
        )}
        {topRatedMovies && (
          <MovieList
            title={langConstant[lang].topRated}
            movies={topRatedMovies}
          />
        )}
        {upcomingMovies && (
          <MovieList
            title={langConstant[lang].upcoming}
            movies={upcomingMovies}
          />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
