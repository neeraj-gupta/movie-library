const API_KAY = "285840e1ae971a43f4171668dfea2913";
const API_URL = "https://api.themoviedb.org/3";

const getMovieList = async (page) => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KAY}&page=${page}`);
    const data = await response.json();
    return data;
}

const searchMovie = async (query) => {
    return fetch(`${API_URL}/search/movie?api_key=${API_KAY}&query=${query}`)
        .then((response) => response.json())
        .then((data) => data.results);
}

export { getMovieList, searchMovie };