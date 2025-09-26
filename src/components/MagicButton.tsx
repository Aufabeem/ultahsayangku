import React, { useState } from 'react';
import { Sparkles, Heart, Star, Zap } from 'lucide-react';

export const MagicButton: React.FC = () => {
  const [clicks, setClicks] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const messages = [
    "Kamu cantik banget! 💕",
    "Aku sayang kamu! 🥰",
    "Kamu adalah yang terbaik! ✨",
    "Happy Birthday Sayang! 🎂",
    "Kamu sempurna! 👑",
    "Aku cinta kamu selamanya! 💖",
    "Kamu adalah hidupku! 🌟",
    "Terima kasih sudah ada! 🙏"
  ];

  const handleClick = () => {
    setClicks(prev => prev + 1);
    setShowMessage(true);
    
    // Create sparkle effect
    const button = document.getElementById('magic-button');
    if (button) {
      for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 0.5 + 's';
        button.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
      }
    }

    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="fixed bottom-8 left-8 z-40">
      <div className="relative">
        <button
          id="magic-button"
          onClick={handleClick}
          className="group relative bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-110 animate-pulse overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-spin opacity-75 rounded-full"></div>
          <div className="relative z-10">
            <Sparkles className="w-8 h-8 group-hover:animate-spin" />
          </div>
          
          {/* Click counter */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
            {clicks}
          </div>
        </button>

        {/* Magic message */}
        {showMessage && (
          <div className="absolute bottom-16 left-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-2xl shadow-lg animate-bounce whitespace-nowrap">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 animate-pulse" />
              {messages[clicks % messages.length]}
              <Star className="w-4 h-4 animate-spin" />
            </div>
            <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-500"></div>
          </div>
        )}
      </div>
    </div>
  );
};