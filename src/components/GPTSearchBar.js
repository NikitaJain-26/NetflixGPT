import { useRef } from "react";
import { BACKGROUND_IMAGE } from "../utils/constant";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const handleSearchClick = () => {
    
  };
  return (
    <div className="">
      <img
        src={BACKGROUND_IMAGE}
        className="absolute -z-10 -mt-8"
        alt="background image"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-5/12 bg-black mx-auto bg-opacity-80 mt-8 pl-2"
      >
        <input
          ref={searchText}
          type="search"
          className="px-2 py-1 mx-4 w-8/12 rounded-md"
          placeholder="What do you want to watch today?"
        />
        <button
          className="bg-red-800 px-6 my-3 rounded-md"
          onClick={() => handleSearchClick()}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
