import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchPage = () => {
  const gptResult = useSelector((store) => store?.gptSearch?.gptMovies);
  const { movieResult, movieName } = gptResult;
  if(!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {
        movieName.map((movie,index) => (
          <MovieList key={index} 
          title={movie}
          movies={movieResult[index]} />
        ))
      }
    </div>
  ) ;
};

export default GPTSearchPage;
