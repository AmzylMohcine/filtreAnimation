import { useEffect } from "react"
import "./App.css"
import { useState } from "react"
import Films from "./Components/Films"
import Filtre from "./Components/Filtre"

function App() {
  const [movies, setMovies] = useState([])
  const [filtred, setFiltred] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=77da153c144b0bc7849150d8b6713a1b")
    const movies = await response.json()

    setMovies(movies.results)
    setFiltred(movies.results)
  }

  return (
    <>
      <Filtre movies={movies} setFiltred={setFiltred} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <div className="popular-movies">
        {filtred.map(movie => {
          return <Films key={movie.id} movie={movie} />
        })}{" "}
      </div>
    </>
  )
}

export default App
