import { Component } from "react"
import {TailSpin} from 'react-loader-spinner'
import MoviePoster from "../movie-poster"
import "./index.css"
import SearchContext from "../../Context"

class PopularMovies extends Component{
    state={movies:[],isLoading:true}

    fetchPopularMovies=async()=>{
        this.setState({isLoading:true})
        const url=`https://api.themoviedb.org/3/movie/popular?api_key=e8ccc676e299173067a80520c1fee405&language=en-US&page=1`
        const res= await fetch(url)
        const data= await res.json()
        console.log(data)
        if(res.ok===true){
       this.setState({movies:data.results}
      
        )}
        this.setState({isLoading:false})
    }

    componentDidMount(){
        this.fetchPopularMovies()
    }

    render(){
        const{isLoading,movies}=this.state
        return(
            
            <div className="movies-container">
            {isLoading?<TailSpin width={50} height={50} color={"#f44336"} />:
            (movies.length===0 ? (
                <>
                <img src="https://res.cloudinary.com/dpj2drryk/image/upload/v1652192630/Group_1_dwo6su.png" alt="notFound" className="not-found-img"/>
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
        )
    }
}

export default PopularMovies