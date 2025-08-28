import { createContext, useState, useContext, useEffect } from "react";
import { useToast } from "../hooks/useToast";
import { loadFavoritesFromStorage, saveFavoritesToStorage } from "../utils/localStorage";
import ToastContainer from "../components/Toast/ToastContainer";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toasts, removeToast, showFavoriteAdded, showFavoriteRemoved } =
    useToast();

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const loadedFavorites = loadFavoritesFromStorage();
    setFavorites(loadedFavorites);
    setIsLoading(false);
  }, []);

  // Save favorites to localStorage when favorites change
  useEffect(() => {
    if (!isLoading) {
      saveFavoritesToStorage(favorites);
    }
  }, [favorites, isLoading]);

  const isFavorite = (recipeId) => {
    return favorites.some((recipe) => recipe.id === recipeId);
  };

  const addFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === recipe.id)) {
        showFavoriteAdded(recipe.name);
        return [...prevFavorites, recipe];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (recipeId, recipeName) => {
    setFavorites((prevFavorites) => {
      const filtered = prevFavorites.filter((recipe) => recipe.id !== recipeId);
      if (filtered.length !== prevFavorites.length) {
        showFavoriteRemoved(recipeName);
      }
      return filtered;
    });
  };

  const toggleFavorite = (recipe) => {
    if (isFavorite(recipe.id)) {
      removeFavorite(recipe.id, recipe.name);
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
      <ToastContainer toasts={toasts} onRemoveToast={removeToast} />
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () => useContext(FavoriteContext);
