

import {useState ,useEffect} from 'react';
import MovieCard from './movieCard';
import './App.css';
import searchIcon from './search.svg'

const API_URL=' http://www.omdbapi.com/?i=tt3896198&apikey=b4772188';
    
const movies1 ={
  
    "Title": "Spiderman in Cannes",
    "Year": "2016",
    "imdbID": "tt5978586",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"

}
const App = ()=>{
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] =useState('');
    const searchMovies =async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data =await response.json(); 
        setMovies(data.Search);
    }   

   useEffect (()=> { 
     searchMovies("spiderman"); 
   }, []) ;

    return(
       <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input type="text" placeholder='Search for movies'  
          value={searchTerm} 
          onChange={(e)=>setSearchTerm(e.target.value)} 
          />
          <img
            src={searchIcon} 
            alt="search" 
            onClick={()=> searchMovies(searchTerm)}
            onKeyPress/>
            </div> 
{
            {movies.length>0 } ?( <div className='container'> {  movies.map(m=> <MovieCard movie={m}/>)}</div>) : <div className='empty'><h3> No Movies Available</h3></div>  
            
}         
       </div>
    );
}
 
export default App;
