import React, { useState } from 'react';
import About from './About'
// import {useNavigate} from 'react-router-dom';
// import HomeView from './HomeView';

const Header = props => {

    // const navigate = useNavigate()

    // const goToHomeview = () =>{
    //     navigate(<HomeView></HomeView>)
    // }
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <header class="flex justify-between items-center bg-blue-300 rounded-b-xl">
            <img class="mx-2 my-2" width="60" height="60" src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Film-icon.png" alt="logo"></img>
            {/*(<button class="mx-5 my-5 bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded" onClick={toggleModal}>About</button>*/}
            <About />
        </header>
    )


}

export default Header