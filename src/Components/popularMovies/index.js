import { useEffect,useState} from "react"
import {TailSpin} from 'react-loader-spinner'
import Pagination from "../pagnation"
import MoviePoster from "../movie-poster"
import "./index.css"


const PopularMovies =()=>{
    const[movies,setMovies]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const[currentPage,setCurrentPage]=useState(1)
    const[totalPages,setTotalPages]=useState(0)

    const fetchPopularMovies=async()=>{
        const url=`https://api.themoviedb.org/3/movie/popular?api_key=e8ccc676e299173067a80520c1fee405&language=en-US&per_page=21&page=${currentPage}`
        const res= await fetch(url)
        const data= await res.json()
        if(res.ok===true){
        setMovies(data.results)
        setTotalPages(data.total_pages)
        console.log(data.results[0])
    }
        setIsLoading(false)
    }

    

    const onChangePage=(pageNum)=>{
        setCurrentPage(pageNum)
        console.log(pageNum)
    }

    useEffect(()=>{
        fetchPopularMovies()
        console.log("fetch movies")
    },[currentPage])

 
    return(
        <>
            <div className="movies-container">
            {isLoading?<div className="loader"> <TailSpin width={50} height={50} color={"#f44336"} /> </div>:
            (movies.length===0 ? (
                <>
                <img src="https://res.cloudinary.com/dpj2drryk/image/upload/v1652192630/Group_1_dwo6su.png" alt="Not Found"/>
                <h1>There is no Movies with given Name</h1>
                </>
            )  :
            (<ul className="movies-list-container">
                {
                movies.map((eachMovie)=>(
                    <MoviePoster key={eachMovie.id} overview={eachMovie.overview} id={eachMovie.id} title={eachMovie.title} imageUrl={eachMovie.poster_path} rating={eachMovie.vote_average}/>
                ))}
            </ul>))
            }
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} changePage={onChangePage}/>
        </>
    )
    
}

export default PopularMovies