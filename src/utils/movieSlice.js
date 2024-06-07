import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: {},
    popularMovies: {},
    trailerMovie: {},
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerMovie, addPopularMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
