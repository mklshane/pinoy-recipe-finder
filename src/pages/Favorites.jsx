// Favorites.jsx
import React from "react";
import { useFavorite } from "../context/FavoriteContext";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useFavorite();
  const navigate = useNavigate();

  // Add a safety check to ensure favorites is defined and is an array
  if (!favorites || !Array.isArray(favorites)) {
    return (
      <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <p className="text-gray-600">Loading favorites...</p>
        </div>
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-6">
        <Heart size={64} className="text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          No favorites yet
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          You haven't added any recipes to your favorites.
        </p>
        <Link
          to="/"
          className="flex items-center bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Browse Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div className="flex gap-4">
            {" "}
            <button onClick={() => navigate("/")} >
              <ArrowLeft size={30} />
            </button>
            <h1 className="text-3xl font-bold text-gray-800">
              Your Favorite Recipes
            </h1>
          </div>

          <span className="text-gray-600">
            {favorites.length} {favorites.length === 1 ? "recipe" : "recipes"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
