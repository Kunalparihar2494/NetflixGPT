import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store?.movies?.trailerVideo)
  const getMovieVideo = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/" +
      movieid +
      "/videos?language=en-US";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    dispatch(
      addTrailerVideo(filterData.length ? filterData[0] : json.results[0])
    );
  };

  useEffect(() => {
    !movieTrailer && getMovieVideo();
  },[]);
};

export default useMovieTrailer;
