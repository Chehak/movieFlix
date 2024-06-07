import { useDispatch } from "react-redux";
import {
  API_OPTIONS,
  NOW_PLAYING_MOVIES,
  POPULAR_MOVIES,
} from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};

export default useNowPlayingMovies;
