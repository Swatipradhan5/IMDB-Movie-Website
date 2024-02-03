import { useParams } from "react-router-dom";

function MovieDetail(){

    let {movieId} = useParams();
    console.log(movieId);

    return(
        <div>
            <h1>MovieDetail Page</h1>
            <img src="" alt="" />
            <p></p>
        </div>
    )
}
export default MovieDetail;