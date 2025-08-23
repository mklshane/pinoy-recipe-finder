// RecipeDetail.jsx
import { ArrowLeft, Clock, Users, ChefHat, LayoutList } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Heart, HeartOff } from "lucide-react";
import { useFavorite } from "../context/FavoriteContext";

const RecipeDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isFavorite, toggleFavorite } = useFavorite();

  const recipe = location.state?.recipe;

  const {
    id, name, image, description, cookTime, servings, difficulty, ingredients, instructions } = recipe || {};

  const isFav = recipe ? isFavorite(id) : false;

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      {!recipe ? (
        // if no favorite recipe yet
        <div className="min-h-screen bg-amber-300 noise p-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-amber-100 mb-8 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-2xl transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Recipes
          </button>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-white mb-4">
              Recipe Not Found
            </h1>
            <p className="text-white/80 text-lg">
              The recipe you're looking for doesn't exist or couldn't be loaded.
            </p>
          </div>
        </div>
      ) : (
        // recipe details
        <div className="min-h-screen bg-amber-50">
          <div className="bg-amber-600 noise relative overflow-hidden">
            <div className="absolute top-6 left-6 z-20">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-white hover:text-amber-100 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-2xl transition-all duration-300 hover:bg-black/30"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Recipes
              </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {name}
                  </h1>
                  <p className="text-white/90 text-lg mb-8 max-w-2xl">
                    {description}
                  </p>

                  <div className="flex justify-center lg:justify-start gap-4 mb-8 flex-wrap">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">
                        {cookTime || "30 mins"}
                      </span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">
                        {servings || "4 servings"}
                      </span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center gap-2">
                      <ChefHat className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">
                        {difficulty || "Medium"}
                      </span>
                    </div>
                  </div>

                  {/* favorite button */}
                  <button
                    onClick={() => toggleFavorite(recipe)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 ${
                      isFav
                        ? "bg-red-500 text-white hover:bg-red-600 hover:scale-105"
                        : "bg-white text-amber-600 hover:bg-amber-50 hover:scale-105"
                    } shadow-lg`}
                  >
                    {isFav ? (
                      <>
                        <HeartOff size={20} />
                        Remove from Favorites
                      </>
                    ) : (
                      <>
                        <Heart size={20} />
                        Add to Favorites
                      </>
                    )}
                  </button>
                </div>

                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-96 lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients and Instructions Section */}
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Ingredients */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-amber-300 rounded-2xl flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-amber-800" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Ingredients
                  </h2>
                </div>

                <div className="space-y-2">
                  {ingredients?.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-amber-50 transition-colors duration-200"
                    >
                      <div className="w-6 h-6 bg-amber-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-amber-800 text-sm font-bold">
                          •
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">
                        {ingredient}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center">
                    <LayoutList className="w-6 h-6 text-amber-800" />
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800">
                    Instructions
                  </h2>
                </div>

                <div className="space-y-3">
                  {instructions?.map((instruction, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl hover:bg-white/90 transition-all duration-200"
                    >
                      <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-lg">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed pt-2">
                        {instruction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
