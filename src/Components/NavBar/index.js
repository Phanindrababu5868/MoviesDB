import {Link} from "react-router-dom"
import "./index.css"

const NavBar=()=>{
    return(
        <nav className="navbar-bg-container">
                <div className="navbar-container">
                    <Link to="/" className="link">
                    <h1 className="app-name">MoviesDB</h1>
                    </Link>
                    <div >
                        <Link to="/movies/PopularMovies">
                        <button className="btn" >Populer</button>
                        </Link>
                        <Link to="/movies/topRatedMovies">
                        <button className="btn" >Top Rated</button>
                        </Link>
                        <Link to="/movies/UpComingMovies">
                        <button className="btn" >upcoming</button>
                        </Link>
                        <Link to="/movies/Search">
                        <button className="btn">Search</button>
                        </Link>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar