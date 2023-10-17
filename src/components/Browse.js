import useGetMovies from "../utils/hooks/useGetMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useGetMovies();
  return (
    <div className="bg-black text-white">
      <MainContainer />
    </div>
  );
};

export default Browse;
