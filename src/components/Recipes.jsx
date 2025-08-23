import React from "react";
import RecipeCard from "./RecipeCard";

const Recipes = ({ filteredRecipes }) => {
  // Add safety check
  if (!filteredRecipes || filteredRecipes.length === 0) {
    return (
      <div className="w-[70%] mb-30">
        <p className="text-center font-lora text-4xl mb-15">
          Popular Filipino Recipes
        </p>
        <p className="text-center">No recipes found.</p>
      </div>
    );
  }

  return (
    <div className="w-[70%] mb-30">
      <p className="text-center font-lora text-4xl mb-10">
        Popular Filipino Recipes
      </p>

      <div className="grid grid-cols-3 gap-5 mx-auto ">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
