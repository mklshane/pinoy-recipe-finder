// RecipeDetail.jsx
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Heart, HeartOff } from "lucide-react";
import { useFavorite } from "../context/FavoriteContext";

const RecipeDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isFavorite, toggleFavorite } = useFavorite();

  // Get the recipe data passed via state from the homepage
  const recipe = location.state?.recipe;
  const isFav = recipe ? isFavorite(recipe.id) : false;

  // If no recipe data was passed, show an error
  if (!recipe) {
    return (
      <div className="min-h-screen bg-amber-50 p-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-amber-700 hover:text-amber-800 mb-8"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back to Recipes
        </button>
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-gray-800">Recipe Not Found</h1>
          <p className="mt-4 text-gray-600">
            The recipe you're looking for doesn't exist or couldn't be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="py-5 px-2 shadow-md">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-amber-800 hover:text-amber-900"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Recipes
          </button>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Recipe Title and Image */}
        <div className="flex flex-col justify-center items-center gap-10 mb-12">
          <div className="md:w-1/2">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-80 object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {recipe.name}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{recipe.description}</p>

            <button
              onClick={() => toggleFavorite(recipe)}
              className={`px-3 py-2 rounded-2xl ${
                isFav ? "bg-red-500 text-white" : "bg-amber-500 text-black"
              } flex items-center gap-2`}
            >
              {isFav ? (
                <>
                  <HeartOff size={20} />
                  <p>Remove from Favorites</p>
                </>
              ) : (
                <>
                  <Heart size={20} />
                  <p>Add to Favorites</p>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Ingredients and Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Ingredients */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Instructions
            </h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
