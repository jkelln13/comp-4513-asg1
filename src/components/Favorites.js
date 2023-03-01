import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Favorites = props => {

    console.log(props.favs);

    const { state } = useLocation();

    if (state === null) {
        return (
            <div class="h-screen col-start-7 col-span-2 row-span-10 bg-blue-300 rounded-xl p-8 ">
                <p class="text-2xl text-center font-semibold pb-16">Favorites</p>


                <div class="grid grid-cols-2 items-center">
                    <img class="col-start-1 col-span-1" width="92" height="92" src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Film-icon.png" alt="img"></img>
                    <p class="col-start-2 col-span-3 r">Title</p>
                </div>
            </div >
        )
    } else {
        const imgURL = `https://image.tmdb.org/t/p/w92${state.poster}`;
        return (
            <div class="h-screen col-start-7 col-span-2 row-span-10 bg-blue-300 rounded-xl p-8 ">
                <p class="text-2xl text-center font-semibold pb-16">Favorites</p>


                <div class="grid grid-cols-2 items-center">
                    <Link to='/list'>
                        <img class="col-start-1 col-span-1" width="92" height="92" src={imgURL} alt={state.title}></img>
                        <p class="col-start-2 col-span-3 r">{state.title}</p>
                    </Link>
                </div>
            </div >
        )
    }
}

export default Favorites;