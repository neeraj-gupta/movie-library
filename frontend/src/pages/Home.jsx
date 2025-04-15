import "../css/Home.css";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getMovieList, searchMovie } from "../services/api";

function Home() {
  // const movies = [
  //   {
  //     id: 1,
  //     title: "The Shawshank Redemption",
  //     year: 1994,
  //     genre: "Drama",
  //     description:
  //       "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  //   },
  //   {
  //     id: 2,
  //     title: "The Terminator",
  //     year: 1998,
  //     genre: "Action",
  //     description:
  //       "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  //   },
  // ];

  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.trim() === "") {
      alert("Please enter a search term.");
      return;
    }

    const fetchSearchResults = async () => {
      try {
        const results = await searchMovie(searchTerm);
        setMovieList(results);
      } catch (error) {
        alert("Error fetching search results:", error);
        setError('Failed to load movies...');
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  };

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const response = await getMovieList(1); // Fetch the first page of movies
        setMovieList(response.results);
      } catch (error) {
        alert("Error fetching movie list:", error);
        setError('Failed to load movies...');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieList();
  }, []);

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">Error: {error.message}</p>}
      <div className="movies-grid">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
