import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchResults = () => {
  const { movieNames, gptMovieResult } = useSelector(
    (store) => store.gptSearch
  );
  if (!movieNames && !gptMovieResult) return;
  return (
    <div className="text-white bg-black bg-opacity-90 md:mx-5 md:my-4">
      {movieNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={gptMovieResult[index]} />
      ))}
    </div>
  );
};

export default GPTSearchResults;
