import React from 'react';
import bg_image from "../bg_image.jpg";

const HomeView = props => {

    const handleViewClick = () => {

    }

    return (
        <div class="bg-auto bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg_image})` }}>
            <h3>Movie Browser</h3>
            <div className="searchBar-area">Title: <input type="text"></input></div>
            <button onClick={handleViewClick}>Show Matching Movies</button><button onClick={handleViewClick}>Show All Movies</button>
        </div>
    );
}

export default HomeView;