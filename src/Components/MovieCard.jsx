import { Link } from "react-router-dom";

export default function MovieCard(props){

    let {movieObj,handleAddToWatchList,handleRemoveFromWatchList,name,watchList,poster_path} = props;

    function isContain(movieObj){
        for(let i=0;i<watchList.length;i++)
        {
            // console.log("inside for loop",i);
            // console.log(watchList[i]);
            // //console.log(movieObj.id);
            if(watchList[i].id === movieObj.id)
            {
                console.log(watchList[i].id);
                return true;
            }
        }
        return false;
    }

    return(


        <div className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl 
                hover:cursor-pointer hover:scale-110 duration-300 
                flex flex-col justify-between items-end overflow-hidden"
                style={{
                    backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`
                }}>

            {/* added to watchlist through conditional rendering */}

            {isContain(movieObj) ?
                 <div onClick={()=>handleRemoveFromWatchList(movieObj)} className="m-2 p-1 text-2xl bg-slate-100/50
                 text-yellow-500 border border-none rounded-lg">
                    <i class="fa-solid fa-star"></i>
                </div>
                :<div onClick={()=>handleAddToWatchList(movieObj)} 
                className="m-2 p-1 text-2xl bg-slate-100/50
                text-black border border-none rounded-lg">
                    <i class="fa-solid fa-plus"></i>
                </div>  
            }

            <Link to={`/movieDetail/${movieObj.id}`} className="w-full"> 
                <div className="text-white bg-gray-500/50 w-full p-3 text-center text-xl">
                {name}
                </div>
            </Link>
            
        </div>
    )
}