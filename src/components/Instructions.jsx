import React from "react";
import { useLocation } from "react-router-dom";

const Instructions = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;

  const { id, instructions } = recipe || {};
  return (

      <div className="bg-gradient-to-b from-amber-100 to-amber-50 rounded-3xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-8">
          
          <h2 className="text-2xl font-bold text-gray-800">Instructions</h2>
          <span className="ml-auto text-sm text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
            {instructions?.length} steps
          </span>
        </div>

        <div className="space-y-6">
          {instructions?.map((instruction, index) => (
            <div
              key={index}
              className="flex gap-4 items-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">{instruction}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
};

export default Instructions;
