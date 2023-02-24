import React from 'react';
import Header from './Header';

const MovieDetails = props => {
    const imgURL = `https://image.tmdb.org/t/p/w92${props.movie.poster}`;

    const tmdbURL = `https://www.themoviedb.org/movie/${props.movie.tmdb_id}`;
    const imdbURL = `https://www.imdb.com/title/${props.movie.imdb_id}`;

    const revenue = props.movie.revenue;

    return (
        <div class="grid gap-10">
            <Header></Header>

            <div class="">
                <img src={imgURL} alt={props.movie.title}></img>
            </div>

            <div>
                <p>{props.movie.release_date}, {props.movie.runtime}, {props.movie.tagline}, ${revenue.toLocaleString()}</p>
                <p>{tmdbURL}, {imdbURL}</p>
                <p>{props.movie.details.overview}</p>
                <p>{props.movie.genres.name}</p>
            </div>

            <div>
                <h2>Ratings</h2>
                <p>{props.movie.ratings.popularity}, {props.movie.ratings.average}, {props.movie.ratings.count}</p>

            </div>

        </div>
    );
}

export default MovieDetails;