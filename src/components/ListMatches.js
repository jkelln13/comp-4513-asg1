import React from 'react';

const ListMatches = props => {

    const movieItem = (movie) => {

        const imgURL = `https://image.tmdb.org/t/p/w92${movie.poster}`;

        const date = movie.release_date.split('-');
        const year = date[0];

        return (
            <div class="grid grid-cols-10 pt-8 items-center">
                <img class="col-start-1 col-span-1" width="92" height="92" src={imgURL} alt={movie.title}></img>
                <p class="col-start-2 col-span-3 r">{movie.title}</p>
                <p class="col-start-5 col-span-1">{year}</p>
                <p class="col-start-6 col-span-1">{movie.ratings.average}</p>
                <p class="col-start-7 col-span-1">{movie.ratings.average}</p>
                <button class="col-start-9 col-span-1">❤</button>
                <button class="col-start-10 col-span-1">View</button>
            </div>
        );
    }

    const movies = [...props.movies];
    const sortedMovies = movies.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });

    console.log(sortedMovies);

    return (
        <div class="h-screen col-start-3 col-span-4 row-span-10 bg-blue-300 rounded-xl p-8 ">
            <p class="text-2xl text-center font-semibold pb-16">List/Matches</p>

            <div class="grid grid-cols-10">
                <p class="col-start-2 col-span-3 r">Title</p>
                <p class="col-start-5 col-span-1">Year</p>
                <p class="col-start-6 col-span-1">Rating</p>
                <p class="col-start-7 col-span-1">Popularity</p>
            </div>



            {sortedMovies.map((m) => movieItem(m))}

            {/*<div class="grid grid-cols-10 pt-8 items-center">
                <img class="col-start-1 col-span-1" width="92" height="92" src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Film-icon.png" alt="img"></img>
                <p class="col-start-2 col-span-3 r">Title</p>
                <p class="col-start-5 col-span-1">Year</p>
                <p class="col-start-6 col-span-1">Rating</p>
                <p class="col-start-7 col-span-1">Popularity</p>
                <p class="col-start-9 col-span-1">Heart</p>
                <p class="col-start-10 col-span-1">View</p>
    </div>*/}

        </div>
    )
}

export default ListMatches;