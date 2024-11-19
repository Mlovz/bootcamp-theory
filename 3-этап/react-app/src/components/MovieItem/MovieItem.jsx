import React from 'react'

const MovieItem = ({title, year}) => {
  return (
    <li className="movie-item">{title} - {year} </li>
  )
}

export default MovieItem