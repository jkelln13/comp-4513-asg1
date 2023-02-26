import './App.css';
import HomeView from './components/HomeView';
import DefaultView from './components/DefaultView'
import MovieDetails from './components/MovieDetails'
import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';

function App() {

  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=10";
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
      }
      catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  const addToFavorites = id => {
    const data = movies.find(movie => movie.id === id);
    setFavorites(data)
  };

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route exact path='/list' element={<DefaultView movies={movies} add={addToFavorites} />} />
        <Route exact path='/moviedetails' element={<MovieDetails movies={movies} add={addToFavorites} />} />
        <Route path='/favorites' element={<Favorites movies={movies} favorites={favorites} />} />
      </Routes>
    </main>
  );
}

export default App;