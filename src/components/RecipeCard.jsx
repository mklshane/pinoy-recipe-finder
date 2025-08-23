import React from "react";
import { useNavigate } from "react-router-dom";
import { useFavorite } from "../context/FavoriteContext";
import { Heart, HeartOff } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorite();
  const isFav = isFavorite(recipe.id);

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`, { state: { recipe } });
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    toggleFavorite(recipe);
  };

  return (
    <div className="recipe-card flex flex-col items-start w-73 h-full justify-between bg-white border border-amber-700/20 rounded-3xl px-8 py-7 shadow-2xl transition-all duration-300 hover:scale-101 hover:bg-amber-100 relative">
      {/* Favorite Button */}
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-4 right-4 p-2 rounded-full ${
          isFav ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-500"
        } hover:scale-110 transition-transform z-10`}
        aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      >
        {isFav ? <HeartOff size={20} /> : <Heart size={20} />}
      </button>

      <img
        src={recipe.image}
        alt={recipe.name}
        className="rounded-3xl w-full h-40 object-cover cursor-pointer"
        onClick={handleClick}
      />

      <p className="mt-5 text-lg font-bold text-gray-800">{recipe.name}</p>
      <p className="text-[15px] mt-2 text-gray-600">{recipe.description}</p>

      <button
        className="mt-4 outline-none bg-amber-300 text-[12px] rounded-3xl px-4 py-2 transition-all duration-100 hover:border hover:border-amber-500 hover:bg-white"
        onClick={handleClick}
      >
        Read more
      </button>
    </div>
  );
};

export default RecipeCard;
