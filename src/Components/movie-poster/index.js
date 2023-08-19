import {Link} from "react-router-dom"
import "./index.css"

const MoviePoster=({id,imageUrl,title,rating})=>{
    const imgUrl= imageUrl===null ? "https://tse3.mm.bing.net/th?id=OIP.MkL5wbXZbiY6vpYb_tZSfgHaE8&pid=Api&P=0&h=180" : `https://image.tmdb.org/t/p/w500/${imageUrl}`;
    return(
     <Link to={`/movies/${id}`} className="link">
        <li className="movie-poster-container">
            <img src={imgUrl} alt={title}/>
            <div className="movie-poster-details-container">
                <p className="movie-title">{title}</p>
                <p className="movie-rating">Rating : {rating}</p>
            </div>
        </li>
        </Link>
    )
}

export default MoviePoster