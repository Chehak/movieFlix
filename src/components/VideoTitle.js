import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-md w-1/4">{overview}</p>
      <div className="mt-2">
        <button className="bg-white text-black px-6 py-2 font-bold text-sm rounded-md hover:bg-opacity-80 ">
          ▶Play
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 font-bold text-sm rounded-lg bg-opacity-50 mx-2">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
