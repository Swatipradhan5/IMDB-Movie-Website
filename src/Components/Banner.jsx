import axios from "axios";
import { useEffect, useState } from "react";

function Banner(){

    let [details, setDetails] = useState({});

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=699d03f895338f3961551d2a377969bf`)
        .then(function(res){
            //console.log(res.data.results[0]);
            setDetails(res.data.results[0]);
        })

       
    },[]);

    return(
        <section className="relative">
            <div className="h-[20vh] md:h-[70vh] bg-contain bg-center mx-8"
            style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`}}>
           </div>
           <div className="text-white bg-gray-500/50 w-full p-4 text-center text-2xl absolute bottom-0">
                {details.title}
            </div>
        </section>
        
        
    );
}
export default Banner;