import Movie from "../Movie/Movie";
function MovieList({ movies, selectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} selectMovie={selectMovie} />
      ))}
    </ul>
  );
}
export default MovieList;
