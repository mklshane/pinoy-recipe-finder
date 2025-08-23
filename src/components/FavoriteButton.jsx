import React from "react";
import { useFavoriteRecipes } from "../hooks/useFavoriteRecipes,jsx";
import { Heart, HeartOff, Trash2 } from "lucide-react";

// FavoriteButton component to toggle favorite status
export const FavoriteButton = ({ recipe, size = 24 }) => {
  const { isFavorite, toggleFavorite } = useFavoriteRecipes();
  const isFav = isFavorite(recipe.id);

  return (
    <button
      onClick={() => toggleFavorite(recipe)}
      className={`p-2 rounded-full ${
        isFav ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-500"
      } hover:scale-110 transition-transform`}
      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
    >
      {isFav ? <HeartOff size={size} /> : <Heart size={size} />}
    </button>
  );
};


