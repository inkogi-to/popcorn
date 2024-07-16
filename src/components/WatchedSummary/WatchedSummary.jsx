import { average } from "../../App";
function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched?.map((movie) => movie.rating));

  const avgUserRating = average(watched?.map((movie) => movie.userRating));

  const avgRuntime = average(
    watched?.map((movie) => {
      return movie.runtime === "N/A" ? 0 : movie.runtime;
    })
  );
  const totalRuntime = Math.round(avgRuntime * 100) / 100;

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{totalRuntime.toFixed(1)} min</span>
        </p>
      </div>
    </div>
  );
}
export default WatchedSummary;
