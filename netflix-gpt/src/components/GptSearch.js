import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchPage from "./GPTSearchPage";
import { BG_URL } from "../utils/images";
import { useSelector } from "react-redux";

const GptSearch = () => {
    const gptResult = useSelector((store) => store?.gptSearch?.gptMovies);
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="bg"
        />
      </div>
      <GPTSearchBar />
      {gptResult && 
      <GPTSearchPage /> }
      
    </div>
  );
};

export default GptSearch;
