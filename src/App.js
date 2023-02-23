import logo from './logo.svg';
import './App.css';
import HomeView from './components/HomeView';
import DefaultView from './components/DefaultView'
import React, { useEffect, useState } from "react";

function App() {

  const [movies, setMovies] = useState([]);

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

  return (
    <main>
      {/* <HomeView movies={movies} /> */}
      <DefaultView></DefaultView>
    </main>
  );
}

export default App;
