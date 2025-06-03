import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
   console.log('movie list', title, movies);
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 font-bold text-white">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex">
          {/* <div className="text-white">Scroll-Left</div> */}
          {movies &&
            movies?.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
          {/* <div className="text-white">Scroll-right</div> */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
