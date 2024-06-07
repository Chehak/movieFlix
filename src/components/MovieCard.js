import React from "react";
import { IMG_PATH } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 p-0 m-1">
      <img src={IMG_PATH + posterPath} className="h-56" />
    </div>
  );
};

export default MovieCard;
