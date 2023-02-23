import React from 'react'
import Header from './Header'

const DefaultView = props => {
    return (
        <div class="grid grid-cols-8 grid-rows-10 gap-10">

            {/*LOGO*/}
            <div class="col-span-8">
                <Header></Header>
            </div>

            {/*MOVIE FILTERS*/}
            <div class="h-screen col-span-2 row-span-10 bg-blue-300 rounded-xl">
                <p>test</p>
            </div>

            {/*LIST/MATCHES*/}
            <div class="h-screen col-span-4 row-span-10 bg-blue-300 rounded-xl">
                <p>test</p>
            </div>

            {/*FAVORITES*/}
            <div class="h-screen col-start-7 col-span-2 row-span-10 bg-blue-300 rounded-xl">
                <p>test</p>
            </div>
            
        </div>
    )
}

export default DefaultView