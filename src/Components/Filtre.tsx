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
      <button className={activeGenre === 0 ? "active" : " "} onClick={() => setActiveGenre(0)}>
        {" "}
        All{" "}
      </button>
      <button className={activeGenre === 35 ? "active" : " "} onClick={() => setActiveGenre(35)}>
        {" "}
        Comedy
      </button>
      <button className={activeGenre === 28 ? "active" : " "} onClick={() => setActiveGenre(28)}>
        Action
      </button>
    </motion.div>
  )
}

export default Filtre
