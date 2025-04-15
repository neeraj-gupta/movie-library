import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id); ;


  const onFavriteClick = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-card-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavriteClick}>
            ❤️
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>
          Year: {movie.release_date.split("-")[0]} Adult: {movie.adult ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
