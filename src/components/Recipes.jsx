import React from "react";
import RecipeCard from "./RecipeCard";

const Recipes = ({ filteredRecipes }) => {

  return (
    
    <div className="w-[70%] mb-10">
      <p className="text-center font-lora text-4xl mb-10">
        Popular Filipino Recipes
      </p>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto ">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
