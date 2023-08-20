import {useEffect,useState} from "react";
import Pagination from "../pagnation";
import {TailSpin} from 'react-loader-spinner'
import MoviePoster from "../movie-poster"
import "./index.css"

// fetchUpcomingMovies=async()=>{
//     this.setState({isLoading:true})
//     const url=`https://api.themoviedb.org/3/movie/upcoming?api_key=e8ccc676e299173067a80520c1fee405`
//     const res= await fetch(url)
//     const data= await res.json()
//     if(res.ok===true){
//    this.setState({movies:data.results}
//     )}
//     this.setState({isLoading:false})
// }

const UpComingMovies =()=>{
    const[movies,setMovies]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const[currentPage,setCurrentPage]=useState(1)
    const[totalPages,setTotalPages]=useState(0)

    const fetchUpcomingMovies=async()=>{
        const url=`https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`
        const res= await fetch(url)
        const data= await res.json()
        console.log(data)
        if(res.ok===true){
        setMovies(data.results)
        setTotalPages(data.total_pages)
        console.log(data.results[0])
    }
        setIsLoading(false)
    }

    

    const onChangePage=(pageNum)=>{
        setCurrentPage(pageNum)
    }

    useEffect(()=>{
        fetchUpcomingMovies()
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

export default UpComingMovies