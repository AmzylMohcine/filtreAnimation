import React, { useEffect } from "react"
import { motion } from "framer-motion"

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
    <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="filtre-container">
      <button onClick={() => setActiveGenre(0)}> All </button>
      <button onClick={() => setActiveGenre(35)}> Comedy</button>
      <button onClick={() => setActiveGenre(28)}>Action</button>
    </motion.div>
  )
}

export default Filtre
