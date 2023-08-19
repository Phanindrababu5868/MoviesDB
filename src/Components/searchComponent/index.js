import { Component } from "react";
import MoviePoster from "../movie-poster";
import { TailSpin } from "react-loader-spinner";

import "./index.css"

class SearchComponent extends Component{
    state={movies:[],searchInput:"",isLoading:true}




   fetchMovies=async movie =>{
        const url=`https://api.themoviedb.org/3/search/movie?api_key=e8ccc676e299173067a80520c1fee405&query=${movie}`
        const res= await fetch(url)
        const data= await res.json()
        if(res.ok===true){
       this.setState({movies:data.results})
    }
        
        this.setState({isLoading:false})
    }

    onInputChange=event=>{
        this.setState({searchInput:event.target.value})
    }

    
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
    

    onClickSeachbtn=()=>{
            const{searchInput}=this.state
                if(searchInput===""){
                    alert("Enter Movie Name")
                }
                else{
                this.fetchMovies(searchInput)
            }
            }

            componentDidMount(){
                this.fetchPopularMovies()
            }
    

    render()
    {
        const{searchInput,movies,isLoading}=this.state
        return(
            <>
                <div className="movies-container">
                    <div className="search-container">
                        <input value={searchInput} onChange={this.onInputChange}/>
                        <button className="search-button" onClick={this.onClickSeachbtn}>Search</button>
                    </div>
                {isLoading?<TailSpin width={50} height={50} color={"#f44336"} />:
                (movies.length===0 ? (
                    <>
                    <img src="https://res.cloudinary.com/dpj2drryk/image/upload/v1652192630/Group_1_dwo6su.png" className="not-found-img"/>
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
            </>
        )
    }
}



export default SearchComponent