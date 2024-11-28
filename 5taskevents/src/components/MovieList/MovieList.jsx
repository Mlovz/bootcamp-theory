import React from "react";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ films }) => {
  return (
    <div>
      {films.map((film, index) => (
        <MovieItem key={index} title={film.title} year={film.year} />
      ))}
    </div>
  );
};
export default MovieList;
