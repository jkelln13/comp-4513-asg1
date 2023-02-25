import React from 'react';
import Header from './Header';

const MovieDetails = props => {
    // const imgURL = `https://image.tmdb.org/t/p/w92${props.movie.poster}`;

    // const tmdbURL = `https://www.themoviedb.org/movie/${props.movie.tmdb_id}`;
    // const imdbURL = `https://www.imdb.com/title/${props.movie.imdb_id}`;

    // const revenue = props.movie.revenue;

    return (
        <div class="grid gap-10">
            <Header></Header>
            
            <div class="h-screen bg-blue-300 p-8 rounded-b-xl grid grid-cols-4 ">

                {/*LEFT-HAND SIDE*/}
                <div class="col-span-1">
                    <h2 class="text-3xl font-semibold pb-16">Movie Title</h2>   
                    <img class="" src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Film-icon.png" alt={"props.movie.title"}></img>
                </div>
                
                {/*MIDDLE*/}
                <div class="col-start-2 col-span-2 border-solid border-black border-2 p-16">
                    <div class="pt-20 pb-20 font-semibold text-2xl">
                        <p>Release Date, runtime, tagline, revenue</p>
                        <p>IMDB Link, TMDB Link</p>
                        <p>Genres</p>

                        {/* <p>{props.movie.release_date}, {props.movie.runtime}, {props.movie.tagline}, ${revenue.toLocaleString()}</p>
                        <p>{tmdbURL}, {imdbURL}</p>
                        <p>{props.movie.details.overview}</p>
                        <p>{props.movie.genres.name}</p> */}
                    </div>
                    
                    <div class="col-start-4 border-solid border-black border-2 p-16">
                        <h2 class="font-semibold text-3xl text-center">Ratings</h2>
                        {/* <p>{props.movie.ratings.popularity}, {props.movie.ratings.average}, {props.movie.ratings.count}</p> */}
                    </div>
                </div>

                {/*RIGHT-HAND SIDE*/}
                <div class="flex flex-col">
                    <button class="mx-5 my-5 bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded">Close</button>
                    <button class="mx-5 my-5 bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded">Add to Favs</button>
                </div>

            </div>

        </div>
    );
}

export default MovieDetails;