
import React from 'react'
import { useNavigate } from 'react-router-dom';


const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`, {state: { recipe}});
  };

  return (
    <div className="recipe-card flex flex-col items-start w-72 h-full justify-between bg-white border border-amber-700/20 rounded-3xl px-8 py-7 shadow-2xl transition-all duration-300 hover:scale-101 hover:bg-amber-100">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="rounded-3xl w-full h-40 object-cover"
      />
      
      <p className="mt-5 text-lg font-bold text-gray-800">{recipe.name}</p>
      <p className="text-[15px] mt-2 text-gray-600">{recipe.description}</p>
      {/* <div className="mt-4 flex items-center">
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-gray-600">4.8</span>
        <span className="text-gray-400 mx-2">•</span>
        <span className="text-gray-600">45 mins</span>
      </div> */}
      <button
        className="mt-4 outline-none bg-amber-300 text-[12px] rounded-3xl px-3 py-1 transition-all duration-300  hover:border-2 hover:border-amber-500 hover:font-bold hover:bg-white "
        onClick={handleClick}
      >
        Read more
      </button>
    </div>
  );
};

export default RecipeCard