import React from "react";
import { VIDEO_SRC } from "../utils/constants";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackgroud = ({ videoId }) => {
  const trailerId = useSelector((store) => store?.movies?.trailerMovie);
  useMovieTrailer(videoId);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        title="love"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        src={VIDEO_SRC + trailerId?.key + "?&autoplay=1&mute=1"}
      ></iframe>
    </div>
  );
};

export default VideoBackgroud;
