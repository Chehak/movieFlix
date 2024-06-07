import React from "react";
import { useSelector } from "react-redux";
import VideoBackgroud from "./VideoBackgroud";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  return (
    <div>
      <VideoTitle
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />
      <VideoBackgroud videoId={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;
