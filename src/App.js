
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import MoviesDetails from "./Components/Movie-details"
import PopularMovies from "./Components/popularMovies"
import TopRatedMovies from './Components/TopRatingMovies';
import UpComingMovies from './Components/upcomingMovies';
import SearchComponent from './Components/searchComponent';

const App =() =>{
  return(
    
  <Router>
    <NavBar/>
    <div>
      <Routes>
        <Route exact path="/"  Component={Home}/>
        <Route exact path="/movies/Search" Component={SearchComponent}/>
        <Route exact path="/movies/PopularMovies" Component={PopularMovies}/>
        <Route exact path="/movies/topRatedMovies" Component={TopRatedMovies}/>
        <Route exact path="/movies/UpComingMovies" Component={UpComingMovies}/>
        <Route exact path="/movies/:id" Component={MoviesDetails}/>
      </Routes>
    </div>
  </Router>
 )

  }




export default App