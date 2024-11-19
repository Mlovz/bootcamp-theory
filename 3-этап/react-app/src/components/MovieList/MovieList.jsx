import React from "react";

const MovieList = ({ movies, size }) => {
  return (
    <ul>
      {movies.map((movie) => {
        if (movie.href) {
          return (
            <li key={movie.title}>
              <a href={movie.href}>
                {movie.title} - {movie.year}
              </a>
            </li>
          );
        }
        return (
          <li key={movie.title}>
            {movie.title} - {movie.year}
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
