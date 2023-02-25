import React from 'react';

const ListMatches = props => {

    let movieExample = props.movies[0];

    const imgURL = `https://image.tmdb.org/t/p/w92${movieExample.poster}`;

    console.log(movieExample);

    return (
        <div class="h-screen col-start-3 col-span-4 row-span-10 bg-blue-300 rounded-xl p-8 ">
            <p class="text-2xl text-center font-semibold pb-16">List/Matches</p>

            <div class="grid grid-cols-10">
                <p class="col-start-2 col-span-3 r">Title</p>
                <p class="col-start-5 col-span-1">Year</p>
                <p class="col-start-6 col-span-1">Rating</p>
                <p class="col-start-7 col-span-1">Popularity</p>
            </div>

            <div class="grid grid-cols-10 pt-8 items-center">
                {/* <img class="col-start-1 col-span-1" width="92" height="92" src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Film-icon.png" alt="img"></img>
                <p class="col-start-2 col-span-3 r">Title</p>
                <p class="col-start-5 col-span-1">Year</p>
                <p class="col-start-6 col-span-1">Rating</p>
                <p class="col-start-7 col-span-1">Popularity</p>
                <p class="col-start-9 col-span-1">Heart</p>
                <p class="col-start-10 col-span-1">View</p>*/}

                <img class="col-start-1 col-span-1" width="92" height="92" src={imgURL} alt={movieExample.title}></img>
                <p class="col-start-2 col-span-3 r">{movieExample.title}</p>
                <p class="col-start-5 col-span-1">{Date.parse(movieExample.release_date)[0]}</p>
                <p class="col-start-6 col-span-1">{movieExample.ratings.average}</p>
                <p class="col-start-7 col-span-1">{movieExample.ratings.average}</p>
                <p class="col-start-9 col-span-1">Heart</p>
                <p class="col-start-10 col-span-1">View</p>
            </div>

        </div>
    )
}

export default ListMatches;