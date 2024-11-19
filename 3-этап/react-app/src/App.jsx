import MovieItem from "./components/MovieItem/MovieItem";
import MovieList from "./components/MovieList/MovieList";

function App() {
  const movies = [
    { title: "Inception", year: 2010, href: '/' },
    { title: "The Matrix", year: 1999 },
    { title: "Interstellar", year: 2014, href: '/about' },
    { title: "The Dark Knight", year: 2008 },
    { title: "Fight Club", year: 1999 },
  ];

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}

export default App;
