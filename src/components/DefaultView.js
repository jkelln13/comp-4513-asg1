import React from 'react'
import Header from './Header'
import MovieFilters from './MovieFilters'
import MovieDetails from './MovieDetails'
import Favorites from './Favorites'

const DefaultView = props => {
    return (
        <div class="grid gap-10">
            <Header></Header>

            <div class="grid grid-cols-8 grid-rows-10 gap-10 font-sans text-black">
                <MovieFilters></MovieFilters>
                <MovieDetails></MovieDetails>
                <Favorites></Favorites>
            </div>

        </div>
    )
}

export default DefaultView