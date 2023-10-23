import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchResults = () => {
  const { movieNames, gptMovieResult } = useSelector(
    (store) => store.gptSearch
  );
  console.log(movieNames, gptMovieResult);
  if (!movieNames && !gptMovieResult) return;
  return (
    <div className="text-white bg-black bg-opacity-90 mx-5 my-4">
      {movieNames.map((movie, index) => (
        <MovieList title={movie} movies={gptMovieResult[index]} />
      ))}
    </div>
  );
};

export default GPTSearchResults;
