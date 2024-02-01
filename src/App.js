import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Watchlist from './Components/Watchlist';
import { useState, useEffect } from 'react';

function App() {

    let [watchList, setWatchList] = useState([]);
    const [pageNo, setPageNo] = useState(1); 
    

    const handlePrev = () =>{
        if(pageNo > 1){
            setPageNo(pageNo-1);
        }
    }

    const handleNext = () =>{
        setPageNo(pageNo+1);
    }

    const handleAddToWatchList = (movieObj) =>{
      //console.log("Inside add to watchlist");
      //console.log(movieId);
      let newWatchlist = [...watchList, movieObj];
      localStorage.setItem("movieApp",JSON.stringify(newWatchlist));
      setWatchList(newWatchlist);
    }

    const handleRemoveFromWatchList = (movieObj) =>{
      let filteredWatchlist = watchList.filter((movie)=>{
          return movie.id !== movieObj.id;
      })

      localStorage.setItem("movieApp",JSON.stringify(filteredWatchlist));
      setWatchList(filteredWatchlist);
    }

    useEffect(()=>{
      let moviesFromLocalStorage = localStorage.getItem("movieApp");
      
      if(!moviesFromLocalStorage)
      {
          return;
      }

      setWatchList(JSON.parse(moviesFromLocalStorage));

  },[])

    
    
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <Banner/>
            <Movies watchList={watchList}
                    setWatchList={setWatchList}
                    handleAddToWatchList={handleAddToWatchList}
                    handleRemoveFromWatchList={handleRemoveFromWatchList}
                    pageNo={pageNo}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    />
          </>
        }></Route>

        <Route path='/watchlist' element={
          <>
            <Watchlist watchList={watchList}
                       handleRemoveFromWatchList={handleRemoveFromWatchList}
                      />
          </>
        }></Route>
        
      </Routes>
    
    </BrowserRouter>
    // <>
    //   <Navbar/>
    //   <Banner/>
    //   {/* <Watchlist/> */}
    //   <Movies/>
    // </>
   
  );
}

export default App;
