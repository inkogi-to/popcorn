import { useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";
import Loader from "../Loader/Loader";
import useKey from "../../hooks/useKey";
function MovieDetails({ selectedId, closeMovie, addWatch, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;
  const {
    Title: title,
    Year: year,
    Plot: plot,
    Poster: poster,
    Runtime: runtime,
    Genre: genre,
    Actors: actors,
    imdbRating: rating,
    Director: director,
    Relrased: released,
  } = movie;
  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      rating: Number(rating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    addWatch(newWatchedMovie);
    closeMovie();
  }
  useKey("Space", closeMovie);

  useEffect(() => {
    async function MovieDetails() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?i=${selectedId}&apikey=ec2de630`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    MovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={closeMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released}&bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {rating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to Watched
                    </button>
                  )}
                </>
              ) : (
                <p>You rated with movie {watchedUserRating}</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
export default MovieDetails;
