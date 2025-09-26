import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse" />
          <span className="text-2xl font-light">Made with love</span>
          <Heart className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse delay-500" />
        </div>
        
        <p className="text-gray-300 text-lg mb-4">
          For the most wonderful person on their special day
        </p>
        
        <div className="text-sm text-gray-400">
          <p>May this new year bring you endless joy, love, and beautiful moments.</p>
          <p className="mt-2">Happy 22nd Birthday! 🎉</p>
        </div>
      </div>
    </footer>
  );
};