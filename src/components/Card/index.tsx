import './style.css';

import React, { useState } from 'react';

import {
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import {
  useAppDispatch,
  useAppSelector,
} from '../../app/hooks';
import { MovieType } from '../../common/types';
import {
  addFavorite,
  removeFavorite,
} from '../../features/favMovieSlice';

export type MovieCardData = Omit<
    MovieType, 
    'overview' | 'vote_average' | 'release_date' | 'runtime' | 'genre'
>;

const Card = (movieData: MovieCardData) => {
    const { movies } = useAppSelector((state) => state.favorites);
    const dispatch = useAppDispatch();
    const [isFavorite, setIsFavorite] = useState<boolean>(() => {
        const isFavoriteMovie = movies.find((movie) => movie.id === movieData.id);

        return !!isFavoriteMovie;
    });

    const handleFavorites = () => {
        if (isFavorite) {
            dispatch(removeFavorite(movieData.id));
            setIsFavorite((prevState) => !prevState);
        } else {
            dispatch(addFavorite(movieData));
            setIsFavorite((prevState) => !prevState);
        }
    }

    return (
        <div className="col-md-4 col-sm-6">
            <div className="card card-block">
                <h4 className="icon-fav">
                    <i>
                        {isFavorite 
                            ? <AiFillStar size={24} onClick={handleFavorites} /> 
                            : <AiOutlineStar size={24} onClick={handleFavorites} />
                        }
                    </i>
                </h4>
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} 
                    alt={movieData.original_title} 
                />
                <Link to={`/movie/${movieData.id}`} style={{ textDecoration: "none" }}>
                    <h5 className="card-title mt-3">
                        {movieData.original_title}
                    </h5>
                </Link>
            </div>
        </div>
    );
}

export default Card;
