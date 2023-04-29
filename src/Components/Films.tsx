import { motion } from "framer-motion"
import React from "react"
const Films = ({ movie }) => {
  return (
    <>
      <motion.div layout>
        <h2>{movie.title}</h2>
        <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="" />
      </motion.div>
    </>
  )
}

export default Films
