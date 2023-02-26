import React from 'react';
import { useLocation } from 'react-router-dom';

const Favorites = props => {

    const { state } = useLocation();

    const imgURL = `https://image.tmdb.org/t/p/w92${state.poster}`;

    let favs = [];

    favs += state;

    return (
        <div class="h-screen col-start-7 col-span-2 row-span-10 bg-blue-300 rounded-xl p-8 ">
            <p class="text-2xl text-center font-semibold pb-16">Favorites</p>


            <div class="grid grid-cols-2 items-center">
                <img class="col-start-1 col-span-1" width="92" height="92" src={imgURL} alt={state.title}></img>
                <p class="col-start-2 col-span-3 r">{state.title}</p>
            </div>
        </div >
    )
}

export default Favorites;