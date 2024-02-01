import axios from "axios";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function Movies(props){

    let {watchList, setWatchList, handleAddToWatchList, handleRemoveFromWatchList, pageNo, handleNext, handlePrev} = props;

    const [movies, setMovies] = useState([]);
   

    
    // to avoid re-rendering of the component, which might end up in infinite loop.
    // we used useEffect to make the network call and setMovie only during mounting phase.

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=699d03f895338f3961551d2a377969bf&page=${pageNo}`)
        .then(function (res){
        // console.log(res);
        // console.log(res.data.results);
        setMovies(res.data.results);
        })
    },[pageNo]);

    // fetching data from localStorage only for the first mounting phase

    useEffect(()=>{
        let moviesFromLocalStorage = localStorage.getItem("movieApp");
        
        if(!moviesFromLocalStorage)
        {
            return;
        }
  
        setWatchList(JSON.parse(moviesFromLocalStorage));
  
    },[])
    
    return(
        <div>
            <div className="text-2xl font-bold text-center m-5">
                Trending Movies
            </div>
            {/* movie card component */}
            
            <div className="flex flex-wrap justify-around gap-8 m-8">
                {
                    movies.map((movieObj) =>{
                        return <MovieCard key={movieObj.id} 
                        name={movieObj.title} 
                        movieObj={movieObj}
                        poster_path={movieObj.poster_path}
                        watchList={watchList}
                        handleAddToWatchList={handleAddToWatchList}
                        handleRemoveFromWatchList={handleRemoveFromWatchList}/>
                    })
                }
                
               
            </div>
            <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
        </div>
    );
}
export default Movies;