import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
      <Router>
        <div className="min-h-screen bg-amber-50">
        
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </Router>

  );
};

export default App;
