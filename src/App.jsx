import { useEffect } from "react"
import "./App.css"
import { useState } from "react"
import Films from "./Components/Films"

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=77da153c144b0bc7849150d8b6713a1b")
    const movies = await response.json()
    console.log(movies)
    setMovies(movies.results)
  }

  return (
    <>
      {movies.map(movie => {
        return <Films key={movie.id} movie={movie} />
      })}{" "}
    </>
  )
}

export default App
