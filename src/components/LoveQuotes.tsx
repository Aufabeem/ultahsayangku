import React, { useState, useEffect } from 'react';
import { Heart, Quote, Star, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface LoveQuote {
  id: number;
  quote: string;
  author: string;
  category: string;
  color: string;
}

export const LoveQuotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const loveQuotes: LoveQuote[] = [
    {
      id: 1,
      quote: "Kamu adalah alasan aku percaya bahwa cinta sejati itu ada. Setiap hari bersamamu adalah berkah yang tak ternilai.",
      author: "Untuk Cinta Hatiku",
      category: "True Love",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      quote: "Dalam jutaan orang di dunia ini, mataku hanya melihatmu. Dalam ribuan suara, telingaku hanya mendengar suaramu.",
      author: "Hati yang Mencinta",
      category: "Devotion",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 3,
      quote: "Kamu bukan hanya pacarku, tapi kamu adalah rumah dimana hatiku merasa aman dan damai.",
      author: "Jiwa yang Tenang",
      category: "Home",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      quote: "Setiap detik bersamamu adalah petualangan, setiap menit adalah kebahagiaan, setiap jam adalah berkah.",
      author: "Waktu Berharga",
      category: "Time",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 5,
      quote: "Kamu mengajarkanku bahwa cinta bukan hanya perasaan, tapi pilihan untuk selalu memilihmu setiap hari.",
      author: "Pilihan Hati",
      category: "Choice",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      quote: "Senyummu adalah matahari yang menerangi hari-hariku, tawamu adalah musik yang menenangkan jiwaku.",
      author: "Cahaya Hidup",
      category: "Joy",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, loveQuotes.length]);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + loveQuotes.length) % loveQuotes.length);
  };

  const currentQuoteData = loveQuotes[currentQuote];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Heart className="w-4 h-4 text-pink-200/30" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Quote className="w-10 h-10 text-purple-500 animate-bounce" />
            <h2 className="font-display text-5xl md:text-6xl font-bold gradient-text">
              Love Quotes for You
            </h2>
            <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beautiful words that express the depth of my love for you
          </p>
        </div>

        {/* Quote Display */}
        <div className="max-w-5xl mx-auto">
          <div className={`bg-gradient-to-br ${currentQuoteData.color} rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden animate-fade-in-up`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                >
                  <Quote className="w-8 h-8" />
                </div>
              ))}
            </div>

            {/* Quote Content */}
            <div className="relative z-10 text-center">
              <div className="mb-8">
                <Quote className="w-16 h-16 mx-auto mb-6 opacity-50" />
              </div>
              
              <blockquote className="font-display text-3xl md:text-4xl font-bold leading-relaxed mb-8">
                "{currentQuoteData.quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                <Star className="w-6 h-6 fill-white" />
                <div className="w-16 h-1 bg-white/30 rounded-full"></div>
              </div>
              
              <cite className="text-xl font-semibold not-italic">
                — {currentQuoteData.author}
              </cite>
              
              <div className="mt-4">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  {currentQuoteData.category}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevQuote}
              className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-purple-500"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Quote Indicators */}
            <div className="flex gap-3">
              {loveQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentQuote
                      ? `bg-gradient-to-r ${currentQuoteData.color} scale-125`
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextQuote}
              className="w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-purple-500"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-8">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                isAutoPlay
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 shadow-lg hover:shadow-xl'
              }`}
            >
              {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};