import React from 'react'
import bg_image from "../bg_image.jpg"

function HomeView() {
    return (
        <div class="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg_image})` }}>
            <div class="container font-sans text-white rounded-xl bg-gray-900 bg-opacity-75 px-16 py-10 shadow-lg">
                <p class="text-2xl text-center font-semibold pb-16">Movie Browser</p>
                <form class="grid grid-cols-10 pb-16">
                    <p class="text-2xl font-semibold">Title</p>
                    <input class="col-start-3 col-end-9"></input>
                </form>
                <div class="grid grid-cols-10">
                    <button class="col-start-3">Show Matching Movies</button>
                    <button class="col-start-6">Show All Movies</button>
                </div>

            </div>
        </div>
    )
}

export default HomeView