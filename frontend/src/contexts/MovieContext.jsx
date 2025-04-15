import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)


export const MovieProvider =({ children }) => {    
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {
        setFavorites(prev => [...prev, movie]);
    };  

    const removeFavorite = (movieId) => {
        setFavorites(prev => prev.filter((favorite) => favorite.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some((favorite) => favorite.id === movieId);
    };

    const values = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return (
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    );
}