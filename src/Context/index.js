import React from 'react'

const SearchContext = React.createContext({
    searchInput:"",
    moviesList:[],
    changeSeachInput:function(){},
    fetchMovies:function(){}
})

export default SearchContext