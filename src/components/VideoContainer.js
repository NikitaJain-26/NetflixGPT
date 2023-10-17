import { useSelector } from "react-redux";
import useGetMovieTrailor from "../utils/hooks/useGetMovieTrailor";

const VideoContainer = ({ movieId }) => {
  useGetMovieTrailor(movieId);
  const trailorKey = useSelector((store) => store.movie?.trailorKey);
  console.log(trailorKey);
  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailorKey + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
