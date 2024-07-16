import { useState, useEffect } from "react";
const KEY = "ec2de630";
function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setError("");
        setIsLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Something went wrong with fetching movies");
        }
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        setMovies(data.Search);
        setIsLoading(false);
        setError("");
      } catch (error) {
        setError(error.message);

        if (error.name === "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    // handleCloseMovie();
    fetchMovies();
    return () => controller.abort();
  }, [query]);
  return { movies, isLoading, error };
}

export default useMovies;
