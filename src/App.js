import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";

// 4ee270af
const API_URL = 'http://www.omdbapi.com?apikey=4ee270af'

// const movie1 =
//   {
//     "Title": "Game of Thrones: Costumes",
//     "Year": "2011",
//     "imdbID": "tt2653350",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyODg1MjYzMV5BMl5BanBnXkFtZTgwOTc3NzA2MDE@._V1_SX300.jpg"
// }

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies  = async (title)  => {
      const response  = await fetch(`${API_URL}&S=${title}`)
      const data  = await response.json();

      setMovies(data.Search);
  }

  useEffect(()  =>{
    searchMovies('prison break')

  }, [] )

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input type="text" 
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon}
         alt="search"
         onClick={() => searchMovies(searchTerm)}
         />
      </div>

      {movies.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie1={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}

      
    </div>
  );
}

export default App;
