import { useEffect, useState } from 'react'
import './App.css'
import { Crown, Search } from 'lucide-react'
import { Movie } from './components/Movie'


function App() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const apikey = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    if(query === "") return;

    const timer = setTimeout(async () => {
      try{
        const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apikey}`);
        const result = await response.json();

        setMovies(result.Search || [])

      }catch(e){
        console.log("HTTP Error. Status: " + e)
      }

    }, 500);

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div>
      <h1 className='text-white font-bold'>MOVIE<span className='text-red-600 mx-3'>FINDER</span></h1>

      <div className='flex items-center justify-center gap-3'>
        <Search size={32} className='text-red-100'/>
        <input type="text" onChange={(e) => setQuery(e.target.value)} id='query' placeholder='Search a nice movie . . .' name='query' className='px-4 py-2 bg-red-800 rounded-4xl focus:outline focus:outline-red-900 focus:scale-105'/>
      </div>

      {/* Movie Lists */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center'>
        { query === "" ? (
          <div className='flex items-center justify-center mt-[3rem] gap-4 col-span-full'>
            <p>Start typing to search for movies... </p> <Crown/>
          </div>
        ): movies.length > 0 ?
        movies.map((movie, key) => {
          return <Movie key={movie.imdbID} title={movie.Title} year={movie.Year} posterUrl={movie.Poster} />
        })
        :(
            <p className='col-span-full mt-[3rem]'>No movies found for <span className='text-red-600'>{query}</span></p>
        )
        }
      </div>

    </div>
  )
}

export default App
