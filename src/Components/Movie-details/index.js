import { useEffect,useState} from "react";
import Pagination from "../pagnation";
import { useParams } from 'react-router-dom';
import "./index.css"

const MoviesDetails=()=> {
    const[details,setDetails]=useState([])
    const[castDetails,setCastdetails]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const[totalPages,setTotalPages]=useState(1)
   

    const{id}=useParams()

    const onChangePage=(pageNum)=>{
       setCurrentPage(pageNum)
    }

    const fetchMovieDteails=async()=>{
        let url=`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        const res= await fetch(url)
        const data= await res.json()
        if(res.ok===true){
       setDetails(data)}
    }

    const fetchCastDeatils=async()=>{
        let url=`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        const res= await fetch(url)
        const data= await res.json()
        if(res.ok===true){
            setCastdetails(data.cast)
            setTotalPages(Math.ceil(data.cast.length/10))
      }
    }

    useEffect(()=>{
        fetchMovieDteails()
        fetchCastDeatils()
    },[])

    let currentIndex= (currentPage-1)
    let currentCastDetails= castDetails.slice( (currentIndex*10)+1 ,(currentIndex*10)+11)
        return(
        <div className="movie-details-page-bg-container">
            <div className="banner-container">
                <div className="banner-details-container">
                    <div className="details-container">
                        <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}  className="movie-poster-img" alt={details.title}/>
                        <div className="movie-details">
                            <h1 className="movie-name">{details.title}</h1>
                            <p className="movie-rating-details">Rating:- {details.vote_average}</p>
                            <p className="movie-runti">{details.runtime} min </p>
                            <p>Release Date  {details.release_date}</p>
                        </div>
                    </div>
                    <h1 className="overview">overview</h1>
                    <p className="overview-description">{details.overview}</p>
                </div>
                <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} alt={details.title} className="backDrop-path"/>
            </div>
            <h1>Cast</h1>
            <ul className="cast-container">
                {currentCastDetails.map(each => (
                    <li className="profile">
                    <img src={ each.profile_path==null? 'https://tse3.mm.bing.net/th?id=OIP.MkL5wbXZbiY6vpYb_tZSfgHaE8&pid=Api&P=0&h=180':`https://image.tmdb.org/t/p/w500/${each.profile_path}`} className="profile-img" alt={each.title}/>
                    <p className="person-profile">{each.name}</p>
                    <p className="person-profile">Character {each.character}</p>
                </li>
                ))}
            </ul>
            <Pagination currentPage={currentPage} totalPages={totalPages} changePage={onChangePage} />
        </div>
        )
}


export default MoviesDetails