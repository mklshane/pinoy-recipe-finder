export const loadFavoritesFromStorage = () => {
  try {
    const storedFavorites = localStorage.getItem("favoriteRecipes");
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      if (Array.isArray(parsedFavorites)) {
        return parsedFavorites;
      }
    }
    return [];
  } catch (error) {
    console.error("Error loading favorites from localStorage:", error);
    localStorage.removeItem("favoriteRecipes");
    return [];
  }
};

export const saveFavoritesToStorage = (favorites) => {
  try {
    localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
  } catch (error) {
    console.error("Error saving favorites to localStorage:", error);
  }
};
