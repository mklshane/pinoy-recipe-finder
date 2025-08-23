import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Recipes from "../components/Recipes";
import recipesData from "../data/recipes.json"; // Direct import

const Homepage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Set recipes directly from the imported data
    setRecipes(recipesData);
  }, []);

  // Filter recipes based on search value
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
      recipe.description?.toLowerCase().includes(searchValue.toLowerCase()) ||
      recipe.ingredients?.some((ingredient) =>
        ingredient.toLowerCase().includes(searchValue.toLowerCase())
      )
  );

  return (
    <>
      <div className="bg noise bg-amber-300 w-full h-[70dvh] ">
        <Navbar />
        <div className="flex justify-center items-center mt-16">
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>
      <div className="w-full mt-15 flex justify-center">
        <Recipes filteredRecipes={filteredRecipes} />
      </div>
    </>
  );
};

export default Homepage;
