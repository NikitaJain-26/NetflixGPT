import { useRef, useState } from "react";
import { BACKGROUND_IMAGE, gptExample, gptQuery } from "../utils/constant";
import { openai } from "../utils/openAi";
import { useDispatch, useSelector } from "react-redux";
import { addMovieResult } from "../utils/redux/gptSlice";
import { getMovieDetails } from "../utils/getMovieDetails";
import { langConstant } from "../utils/strings";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.config.lang);
  const handleSearchClick = async () => {
    setIsLoading(true);
    const query = gptQuery + searchText.current.value + gptExample;
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
    setIsLoading(false);
  };

  return (
    <div className="">
      <img
        src={BACKGROUND_IMAGE}
        className="fixed -z-10 -mt-8 h-screen object-cover md:h-auto"
        alt="background image"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-5/12 bg-black md:mx-auto mt-2 bg-opacity-80 md:mt-8 mb-4 pl-1 md:pl-2"
      >
        <input
          ref={searchText}
          type="search"
          className="px-2 py-1 mx-4 md:w-8/12 rounded-md"
          placeholder={langConstant[lang].searchPlaceHolder}
        />
        <button
          className="bg-red-800 px-6 my-3 rounded-md"
          onClick={() => handleSearchClick()}
        >
          {langConstant[lang].searchLabel}
          {isLoading && (
            <svg
              aria-hidden="true"
              className="inline w-5 h-5 ml-2 pb-1 mb-1 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
