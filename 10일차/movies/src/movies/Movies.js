import React, { useState } from 'react';
import "../utils/css/reset.css"
import "./Movie.css"
import MovieList from './MovieList';
import MovieView from './MovieView';
import data from "../utils/api/data.json"
import Modal from './Modal';

const Movies = () => {
    const [movies, setMovies] = useState(data);
    const [movieId, setMovieId] = useState(data[0]);
    const [isActive, setIsActive] = useState(false); //true false 시 modal 실행 여부

    const onOver = (num) => {
        // alert("변해라")
        setMovieId(movies[num-1]) //베열은 0번부터 시작하기때문에 -1 해야한다.
    }

    const onOpen = () => {
        setIsActive(true)
    }
    const onClose = () => {
        setIsActive(false)
    }
    return (
        <div className="gallery">
            <MovieView movieId={movieId} onOpen={onOpen} />
            <MovieList movies={movies} onOver={onOver} />
            { isActive && <Modal movieId={movieId}  onClose={onClose}/>}
        </div>
    );
};

export default Movies;