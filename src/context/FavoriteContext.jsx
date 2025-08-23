import { createContext, useState, useContext, useEffect } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // load favorites from localStorage on initial render
  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem("favoriteRecipes");
      if (storedFavorites) {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavorites(parsedFavorites);
        }
      }
    } catch (error) {
      console.error("Error loading favorites from localStorage:", error);
      localStorage.removeItem("favoriteRecipes");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
      } catch (error) {
        console.error("Error saving favorites to localStorage:", error);
      }
    }
  }, [favorites, isLoading]);

  const isFavorite = (recipeId) => {
    return favorites.some((recipe) => recipe.id === recipeId);
  };

  const addFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === recipe.id)) {
        return [...prevFavorites, recipe];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (recipeId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((recipe) => recipe.id !== recipeId)
    );
  };

  const toggleFavorite = (recipe) => {
    if (isFavorite(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        isFavorite,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        favoritesCount: favorites.length,
        isLoading,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () =>  useContext(FavoriteContext);
 
