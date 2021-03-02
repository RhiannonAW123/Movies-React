import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {

    const movieNodes = movies.map(movie => {
        return <Movie name={movie.name} key={movie.id} url={movie.url}></Movie>
    });

    return (
        <>
            <ul>{movieNodes}</ul>
        </>
    )    
}

export default MovieList;