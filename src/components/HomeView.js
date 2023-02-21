import React from 'react';
import bg_image from "../bg_image.jpg";

function HomeView() {
    return (
        <div class="bg-auto bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg_image})` }}></div>
    );
}

export default HomeView;