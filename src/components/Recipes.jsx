import React from "react";
import RecipeCard from "./RecipeCard";
import { div } from "framer-motion/client";

const Recipes = ({ filteredRecipes }) => {
  return (
    <div className="w-[70%] mb-10">
      <p className="text-center font-lora text-4xl mb-10">
        Popular Filipino Recipes
      </p>

      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto ">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 h-[70dvh]">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-xl font-sora font-medium text-gray-700 mb-2">
            No recipes found
          </h3>
          <p className="text-gray-500">Try adjusting your search.</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
