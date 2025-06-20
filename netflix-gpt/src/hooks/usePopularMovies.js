import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store?.movies?.popularMovies)
  useEffect(() => {
   !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const jsonData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    
    const data = await jsonData.json();
    dispatch(addPopularMovies(data.results));
  };
};

export default usePopularMovies;
