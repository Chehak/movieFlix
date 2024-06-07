import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerMovie } from "../utils/movieSlice";

const useMovieTrailer = (videoId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    videoId && fetchMovie();
  }, [videoId]);

  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + videoId + "/videos",
      API_OPTIONS
    );
    const movie = await data.json();
    const finalBackgroundMovie = movie?.results[1];
    dispatch(addTrailerMovie(finalBackgroundMovie));
  };
};

export default useMovieTrailer;
