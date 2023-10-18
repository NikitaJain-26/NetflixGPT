import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (movies == null) return;
  return (
    <div>
      <VideoTitle title={movies[0]?.title} overview={movies[0]?.overview} />
      <VideoContainer movieId={movies[0]?.id} />
    </div>
  );
};

export default MainContainer;
