import React from "react";
import { useParams } from "react-router";
import VideoContainer from "./VideoContainer";
import useGetMovieDetails from "../utils/hooks/useGetMovieDetails";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const { id } = useParams();
  const movieDetails = useSelector((store) => store?.movieDetails?.movie);
  useGetMovieDetails(id);

  if (!movieDetails) return;
  return (
    <div className="bg-black text-white px-4">
      <VideoContainer movieId={id} />
      <div className="flex py-2 font-bold text-xl">
        <h2 className="">Movie Title: </h2>
        <h2 className="px-1"> {movieDetails[id]?.original_title}</h2>
      </div>
      <div className="flex">
        <h2 className="pr-2 font-bold">Genres:</h2>
        {movieDetails[id]?.genres.map((genre) => genre.name).join(", ")}
      </div>
      <div className="flex">
        <h2 className="pr-2 font-bold">Description: </h2>
        {movieDetails[id]?.overview}
      </div>
      <div className="flex">
        <h2 className="pr-2 font-bold">Relaease Date: </h2>
        {movieDetails[id]?.release_date}
      </div>
      <div className="flex">
        <h2 className="pr-2 font-bold">Status: </h2>
        {movieDetails[id]?.status}
      </div>
    </div>
  );
};

export default MovieDetails;
