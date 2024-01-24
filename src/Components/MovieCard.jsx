export default function MovieCard(props){
    return(
        <div className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex items-end overflow-hidden"
                style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.poster_path})`}}>
                    
            <div className="text-white bg-gray-500/50 w-full p-3 text-center text-xl">
                {props.name}
            </div>
        </div>
    )
}