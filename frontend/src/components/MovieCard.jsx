import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const onFavriteClick = () => {
    alert(`Movie ${movie.title} added to favorites`);
  };

  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-card-overlay">
          <button className="favorite-btn" onClick={onFavriteClick}>
            ❤️
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>
          Year: {movie.year} Genre: {movie.genre}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
