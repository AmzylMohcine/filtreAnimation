import React, { useEffect } from "react"

const Filtre = ({ setActiveGenre, activeGenre, setFiltred, movies }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltred(movies)
      return
    }

    const filtred = movies.filter(movie => {
      return movie.genre_ids.includes(activeGenre)
    })

    setFiltred(filtred)
  }, [activeGenre])

  return (
    <div className="filtre-container">
      <button onClick={() => setActiveGenre(0)}> All </button>
      <button onClick={() => setActiveGenre(35)}> Comedy</button>
      <button onClick={() => setActiveGenre(28)}>Action</button>
    </div>
  )
}

export default Filtre
