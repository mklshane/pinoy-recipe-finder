import { ChefHat, Heart } from 'lucide-react';
import React from 'react'
import logo from "/assets/pinoylogo.png";

const Footer = () => {
  return (
    <footer className="bg-amber-300 noise mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={logo} className="w-10 " />
          <h3 className="text-xl font-bold text-amber-900">Pinoy Recipe Finder</h3>
        </div>
        <p className="text-amber-800 text-sm">
          © 2025 Pinoy Recipe Finder. Made with{" "}
          <Heart className="w-4 h-4 inline text-red-600" /> for food lovers.
        </p>
      </div>
    </footer>
  );
}

export default Footer