import React from 'react'
import Header from './Header'
import MovieFilters from './MovieFilters'
import ListMatches from './ListMatches'
import Favorites from './Favorites'

const DefaultView = props => {
    return (
        <div class="grid gap-10">
            <Header />

            <div class="grid grid-cols-8 grid-rows-10 gap-10 font-sans text-black">
                <MovieFilters />
                <ListMatches movies={props.movies} key={props.movies.id} favorites={props.favorites} />
                <Favorites favorites={props.favorites} />
            </div>

        </div>
    )
}

export default DefaultView