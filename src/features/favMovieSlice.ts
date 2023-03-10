import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { MovieType } from '../common/types';

type Movie = Omit<
    MovieType, 
    'overview' | 'vote_average' | 'release_date' | 'runtime' | 'genre'
>;

interface FavoriteState {
    movies: Movie[]
}

const initialState: FavoriteState = {
    movies: []
}

const addFavoriteMovie = (state: FavoriteState, action: PayloadAction<Movie>) => {
    const existingMovie = state.movies.find((movie) => movie.id === action.payload.id);

    if (!existingMovie) {
        state.movies.push(action.payload);
    }
}

const removeFavoriteMovie = (state: FavoriteState, action: PayloadAction<number>) => {
    const updateFavMovieList = state.movies.filter((movie) => movie.id !== action.payload);
    state.movies = updateFavMovieList;
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavoriteMovie,
        removeFavoriteMovie,
    }
});

export const { 
    addFavoriteMovie: addFavorite, 
    removeFavoriteMovie: removeFavorite 
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
