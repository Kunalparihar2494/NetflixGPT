import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log('movies-',movies)
  return (
    movies.nowPlayingMovies && (
      <div className="-mt-[20%] md:-mt-[0%] bg-black pl-[4%]">
        <div className="-mt-[19%] relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        </div>
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"UP Coming"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
