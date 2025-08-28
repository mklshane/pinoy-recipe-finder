import React from "react";
import { useLocation } from "react-router-dom";
const Ingredients = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;

  const { ingredients } = recipe || {};
  return (
      <div className="top-6 bg-white rounded-3xl shadow-xl p-8 border-2 border-amber-200">
        <div className="flex items-center gap-3 mb-6">
          
          <h2 className="text-2xl font-bold text-gray-800">Ingredients</h2>
          <span className="ml-auto text-sm text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
            {ingredients?.length} items
          </span>
        </div>

        <div className="space-y-3">
          {ingredients?.map((ingredient, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50 transition-colors duration-200 "
            >
              <div className="w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-amber-700 text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              <span className="text-gray-700">{ingredient}</span>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Ingredients;
    