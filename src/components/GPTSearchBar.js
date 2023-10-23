import { useRef } from "react";
import {
  API_OPTION,
  BACKGROUND_IMAGE,
  SEARCH_MOVIE_API,
} from "../utils/constant";
import { openai } from "../utils/openAi";
import { useDispatch } from "react-redux";
import { addMovieResult } from "../utils/redux/gptSlice";
import { getMovieDetails } from "../utils/getMovieDetails";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleSearchClick = async () => {
    const query =
      "Act as Movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated. like the example resukt ahead. Example Result: Gadar, Fukrey, Golmaal, Hera pheri, OMG";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const searchResult = chatCompletion.choices[0]?.message?.content.split(",");
    const promiseArray = searchResult.map((movie) => getMovieDetails(movie));
    const tmbdResult = await Promise.all(promiseArray);
    dispatch(
      addMovieResult({ movieNames: searchResult, movieList: tmbdResult })
    );
  };

  return (
    <div className="">
      <img
        src={BACKGROUND_IMAGE}
        className="fixed -z-10 -mt-8"
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
