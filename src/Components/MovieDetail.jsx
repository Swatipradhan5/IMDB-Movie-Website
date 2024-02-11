import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail(){

    let [movieDetails, setMovieDetails] = useState({});
    let {movieId} = useParams();
    //console.log(movieId);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=699d03f895338f3961551d2a377969bf&language=en-US&page=1')
        .then(res => res.json())
        .then(data => {
            //console.log(data.results, movieId);
            const result = data.results.find((movie) => movie.id == movieId);
            //console.log("Movie details",result);
            return result;
        })
        .then(movie =>  setMovieDetails(movie));
    },[]);

    //console.log(movieDetails);

    return(
        <div className="h-[20vh] md:h-[70vh] bg-contain bg-center mx-8"
                style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`}}>

                <div>
                    <p className="text-black w-full text-lg absolute bottom-0">{movieDetails.overview}</p>
                    {/* <div className="text-white bg-gray-500/50 w-full p-4 text-center text-2xl">
                        {movieDetails.title}
                    </div> */}
                </div>

        </div>
                
       
    )
}
export default MovieDetail;