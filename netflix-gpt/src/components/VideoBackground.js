import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieid }) => {
  const trailer = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieid);

  return (
    <div>
      <iframe
        className="mt-[50%] md:mt-0 w-screen h-screen bg-gradient-to-b from-black"
        src={`https://www.youtube.com/embed/${trailer?.key}?si=s9SsorZtPuDniBoM?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
