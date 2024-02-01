import genreId from "../Utility/genreId";
function Watchlist(props){

    let {watchList,  handleRemoveFromWatchList} = props;
    
    return(
        <>
            <div className="flex justify-center gap-2 my-3">
                <span className="h-[3rem] w-[10rem] bg-blue-300 text-white text-center px-1 py-2
                border rounded-full text-lg">
                    All Genre
                </span>
            </div>
            <div className="flex justify-center my-3">
                <input type="text" placeholder="Search for a Movie" 
                className="border border-cyan-400 rounded-full bg-slate-100 w-[20rem] h-[3rem] pl-10 outline-none"/>
            </div>

            <div className="border border-gray-400 rounded-md overflow-hidden shadow-md m-4">
                <table className="w-full text-center">
                    <thead className="bg-slate-200 h-[3rem] border-b-2 border-gray-300">
                        <tr className="">
                            <th className="text-left px-10">Name</th>
                            <th className="flex gap-2 justify-center mt-2">
                                <div className="bg-slate-100 border border-gray-300 rounded-full p-1 
                                hover:cursor-pointer hover:scale-95">
                                    <i class="fa-solid fa-chevron-up"></i>
                                </div>
                                <div>Ratings</div>
                                <div className="bg-slate-100 border border-gray-300 rounded-full p-1 
                                hover:cursor-pointer hover:scale-95">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                            </th>
                            <th>Popularity</th>
                            <th>Genre</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchList.map((movieObj)=>{
                            return <tr className="border-b-2">
                                <td className="flex items-center px-4 m-3">
                                    <img className="h-[5rem] w-[12rem]" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="" />
                                    <span className="ml-4">{movieObj.title}</span>
                                </td>
                                <td>{movieObj.vote_average}</td> 
                                <td>{movieObj.popularity}</td>
                                <td>{genreId[movieObj.genre_ids[0]]}</td>
                                <td onClick={()=> handleRemoveFromWatchList(movieObj)} className="text-red-500 hover:cursor-pointer">Remove</td>
                            </tr>
                            
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default Watchlist;