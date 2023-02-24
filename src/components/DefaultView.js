import React from 'react'
import Header from './Header'
import MovieFilters from './MovieFilters'

const DefaultView = props => {
    return (
        <div class="grid gap-10">
            <Header></Header> 
            <MovieFilters></MovieFilters>
        </div>
    )
}

export default DefaultView