import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Recipes from "../components/Recipes";
import recipesData from "../data/recipes.json";
import Footer from "../components/Footer";

const Homepage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); 
    setRecipes(recipesData);
  }, []);

  // memoized filtered recipes for better performance
  const filteredRecipes = useMemo(() => {
    if (!searchValue.trim()) {
      return recipes;
    }

    const searchTerm = searchValue.toLowerCase().trim();

    return recipes.filter((recipe) => {
      const { name, description, ingredients } = recipe;

      return (
        name?.toLowerCase().includes(searchTerm) ||
        description?.toLowerCase().includes(searchTerm) ||
        ingredients?.some((ingredient) =>
          ingredient.toLowerCase().includes(searchTerm)
        )
      );
    });
  }, [recipes, searchValue]);

  return (
    <>
      <div className="bg noise bg-amber-300 w-full h-[68dvh]">
        <Navbar />
        <div className="flex justify-center items-center mt-16">
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>
      <div className="w-full mt-5 flex justify-center">
        <Recipes filteredRecipes={filteredRecipes} />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
