import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ imagePath, title, id }) => {
  return (
    <Link to={"/movie/" + id}>
      <div className="pr-2 mb-1 w-40">
        <img className="w-40 h-40" src={IMG_CDN_URL + imagePath} alt={title} />
      </div>
    </Link>
  );
};

export default MovieCard;
