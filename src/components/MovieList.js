import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title, movies);
  if (!movies.length > 0) return;
  return (
    <div className="p-4">
      <div>
        <h1 className="text-3xl font-bold text-white">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies &&
            movies?.map((movie) => (
              <MovieCard posterPath={movie?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
