import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const gptSearchFlag = useSelector((store) => store.gpt.showGptSearch);
  //fetched data from TMDB Api and update the store
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {gptSearchFlag ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
