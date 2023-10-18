import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ imagePath, title }) => {
  return (
    <div className="pr-2 mb-1 w-40">
      <img className="w-40 h-40" src={IMG_CDN_URL + imagePath} alt={title} />
    </div>
  );
};

export default MovieCard;
