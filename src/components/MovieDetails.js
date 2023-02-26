import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieDetails = props => {

    const { state } = useLocation();

    const imgURL = `https://image.tmdb.org/t/p/w92${state.poster}`;

    const tmdbURL = `https://www.themoviedb.org/movie/${state.tmdb_id}`;
    const imdbURL = `https://www.imdb.com/title/${state.imdb_id}`;

    const revenue = state.revenue;

    return (
        <div class="grid gap-10">
            <Header />

            <div class="h-screen bg-blue-300 p-8 rounded-b-xl grid grid-cols-4 ">

                {/*LEFT-HAND SIDE*/}
                <div class="col-span-1">
                    <h2 class="text-3xl font-semibold pb-16">{state.title}</h2>
                    <img class="" src={imgURL} alt={state.title}></img>
                </div>

                {/*MIDDLE*/}
                <div class="col-start-2 col-span-2 border-solid border-black border-2 p-16">
                    <div class="pt-20 pb-20 font-semibold text-2xl">
                        {/*<p>Release Date, runtime, tagline, revenue</p>
                        <p>IMDB Link, TMDB Link</p>
    <p>Genres</p>*/}

                        <p>{state.release_date}, {state.runtime}, {state.tagline}, ${revenue.toLocaleString()}</p>
                        <p>{tmdbURL}, {imdbURL}</p>
                        <p>{state.details.overview}</p>
                        <p>{state.details.genres.name}</p>
                    </div>

                    <div class="col-start-4 border-solid border-black border-2 p-16">
                        <h2 class="font-semibold text-3xl text-center">Ratings</h2>
                        <p>{state.ratings.popularity}, {state.ratings.average}, {state.ratings.count}</p>
                    </div>
                </div>

                {/*RIGHT-HAND SIDE*/}
                <div class="flex flex-col">
                    <Link to="/list">
                        <button class="mx-5 my-5 bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded">Close</button>
                    </Link>
                    <button class="mx-5 my-5 bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded">Add to Favs</button>
                </div>

            </div>

        </div>
    );
}

export default MovieDetails;