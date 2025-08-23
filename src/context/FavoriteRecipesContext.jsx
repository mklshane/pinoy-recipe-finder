// src/context/FavoriteRecipesContext.jsx
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const FavoriteRecipesContext = createContext();

// Provider component
export const FavoriteRecipesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteRecipes");
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error("Error parsing favorites from localStorage:", error);
        setFavorites([]);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
  }, [favorites]);

  // Add a recipe to favorites
  const addFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      // Check if recipe is already in favorites
      if (!prevFavorites.some((fav) => fav.id === recipe.id)) {
        return [...prevFavorites, recipe];
      }
      return prevFavorites;
    });
  };

  // Remove a recipe from favorites
  const removeFavorite = (recipeId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((recipe) => recipe.id !== recipeId)
    );
  };

  // Check if a recipe is in favorites
  const isFavorite = (recipeId) => {
    return favorites.some((recipe) => recipe.id === recipeId);
  };

  // Toggle favorite status
  const toggleFavorite = (recipe) => {
    if (isFavorite(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  // Clear all favorites
  const clearFavorites = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    clearFavorites,
    favoritesCount: favorites.length,
  };

  return (
    <FavoriteRecipesContext.Provider value={value}>
      {children}
    </FavoriteRecipesContext.Provider>
  );
};

export default FavoriteRecipesContext;
