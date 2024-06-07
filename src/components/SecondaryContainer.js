import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies);
  return (
    moviesList && (
      <div className="bg-black w-screen">
        <div className="-mt-44 relative z-30 pl-12">
          <MovieList
            title={"Now Playing"}
            movies={moviesList?.nowPlayingMovies}
          />
          <MovieList
            title={"Popular Movies"}
            movies={moviesList?.popularMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
