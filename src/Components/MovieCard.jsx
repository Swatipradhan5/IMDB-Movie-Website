export default function MovieCard(props){

    let {watchList, handleAddToWatchList, handleRemoveFromWatchList, id, name, poster_path } = props;

    return(


        <div className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl 
                hover:cursor-pointer hover:scale-110 duration-300 
                flex flex-col justify-between items-end overflow-hidden"
                style={{
                    backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`
                }}>

{/* added to watchlist through conditional rendering */}

            {watchList.includes(id) ?
                 <div onClick={()=>handleRemoveFromWatchList(id)} className="m-2 p-1 text-2xl bg-slate-100/50
                 text-yellow-500 border border-none rounded-lg">
                    <i class="fa-solid fa-star"></i>
                </div>
                :<div onClick={()=>handleAddToWatchList(id)} 
                className="m-2 p-1 text-2xl bg-slate-100/50
                text-black border border-none rounded-lg">
                    <i class="fa-solid fa-plus"></i>
                </div>  
            }

            <div className="text-white bg-gray-500/50 w-full p-3 text-center text-xl">
                {name}
            </div>
        </div>
    )
}