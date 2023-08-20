import { useEffect,useState } from "react";
import Pagination from "../pagnation";
import MoviePoster from "../movie-poster";
import { TailSpin } from "react-loader-spinner";
import PopularMovies from "../popularMovies";

import "./index.css"

const SearchComponent =()=>{
    const[movies,setMovies]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const[currentPage,setCurrentPage]=useState(1)
    const[totalPages,setTotalPages]=useState(0)
    const[searchInput,setSaerchInput]=useState("")
    

  const fetchMovies=async movie =>{
    console.log(movie)
    setIsLoading(true)
        const url=`https://api.themoviedb.org/3/search/movie?api_key=e8ccc676e299173067a80520c1fee405&query=${movie}&page=${currentPage}`
        const res= await fetch(url)
        const data= await res.json()
        if(res.ok===true){
            setMovies(data.results)
            setTotalPages(data.total_pages)
            console.log(data.results[0])
    }
        
        setIsLoading(false)
    }

    const onInputChange=event=>{
        setSaerchInput(event.target.value)
    }

   const onChangePage=(pageNum)=>{
    setCurrentPage(pageNum)
    }

    const onClickSeachbtn=()=>{
        fetchMovies(searchInput)
        setCurrentPage(1)
    }

    useEffect(()=>{
        if(searchInput!==""){
        fetchMovies(searchInput)
        console.log("useffct callesd at ",currentPage)
        }
    },[currentPage])
    
    

   
      
        return(
            <>
            <div className="search-container">
                        <input value={searchInput} onChange={onInputChange}/>
                        <button className="search-button" onClick={onClickSeachbtn}>Search</button>
                    </div>
            {searchInput==="" ? <PopularMovies/>:
            <>
                <div className="movies-container">
                {isLoading?<div className="loader"> <TailSpin width={50} height={50} color={"#f44336"} /> </div>:
                (movies.length===0 ? (
                    <>
                    <img src="https://res.cloudinary.com/dpj2drryk/image/upload/v1652192630/Group_1_dwo6su.png" className="not-found-img" alt="Not Found"/>
                    <h1>There is no Movies with given Name</h1>
                    </>
                )  :
                (<ul className="movies-list-container">
                    {
                    movies.map((each)=>(
                        <MoviePoster releasedate={each.release_date} overview={each.overview} id={each.id} title={each.title} imageUrl={each.poster_path} rating={each.vote_average}/>
                    ))}
                </ul>))
                }
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} changePage={onChangePage}/>
                </>
                }
            </>
        )
    }




export default SearchComponent