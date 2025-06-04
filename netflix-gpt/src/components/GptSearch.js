import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchPage from "./GPTSearchPage";
import { BG_URL } from "../utils/images";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const gptResult = useSelector((store) => store?.gptSearch?.gptMovies);
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover w-screen" src={BG_URL} alt="bg" />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GPTSearchBar />
        {gptResult && <GPTSearchPage />}
      </div>
    </>
  );
};

export default GptSearch;
