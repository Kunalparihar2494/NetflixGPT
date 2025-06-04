import React, { useRef } from "react";
import { translations } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/huggingApi";
import { API_OPTIONS } from "../utils/constant";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const languageKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async(movie) => {
    const url = 'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1';
    const data = await fetch(url,API_OPTIONS)
    const jsonData = await data.json();

    return jsonData?.results;
  }

  const handleSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies from the query " +
      searchText.current.value +
      " only give names of 5 movies, comma separated like the example result ahead. Example Result: Gadar, Sholay, Koi Mil Gaya. Only Give Movie Names No Extra String.";

    const chatCompletion = await client.chatCompletion({
      provider: "novita",
      model: "deepseek-ai/DeepSeek-R1",
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
    });

    const movies = chatCompletion.choices[0].message?.content.replace(/<think>[\s\S]*?<\/think>/g, "").trim().split(',');

    const promiseArray = movies.map(movie => searchMovieTMDB(movie))

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGPTMovieResult({movieName: movies, movieResult: tmdbResults}));

  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={translations.search_placeholder[languageKey]}
        />
        <button
          onClick={handleSearchClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {translations.search_button[languageKey]}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
