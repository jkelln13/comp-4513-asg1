import React from 'react'
import Header from './Header'

const DefaultView = props => {
    return (
        <div class="grid grid-cols-8 grid-rows-10 gap-1">
            {/*LOGO*/}
            <div class="col-span-8">
                <Header></Header>
            </div>




            {/*MOVIE FILTERS*/}
            <div class="col-span-2 row-span-10 bg-blue-300">
                <p>test</p>
            </div>
            {/*LIST/MATCHES*/}

            {/*FAVORITES*/}
        </div>
    )
}

export default DefaultView