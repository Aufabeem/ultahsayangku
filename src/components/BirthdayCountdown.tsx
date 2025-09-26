import React, { useState, useEffect } from 'react';
import { Calendar, Gift, Crown, Sparkles, Zap, Cake } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const BirthdayCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isToday, setIsToday] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      let birthday = new Date(2025, 8, 29).getTime(); // September 29, 2025
      
      if (birthday < now) {
        birthday = new Date(2026, 8, 29).getTime(); // September 29, 2026
      }
      
      const difference = birthday - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
        setIsToday(false);
      } else {
        setIsToday(true);
        setShowCelebration(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  if (isToday && showCelebration) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-rose-500 flex items-center justify-center z-50 overflow-hidden">
        {/* Celebration Fireworks */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            >
              <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Falling Confetti */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              {['🎂', '🎉', '🎈', '🌟', '💖', '🎁', '✨', '🎊', '🥳', '🎵'][Math.floor(Math.random() * 10)]}
            </div>
          ))}
        </div>

        <div className="text-center z-10 px-6">
          <h1 className="font-display text-8xl md:text-9xl font-bold text-white mb-8 animate-pulse">
            💖 HAPPY 22nd BIRTHDAY, BEAUTIFUL! 💖
          </h1>
          <p className="text-3xl md:text-5xl text-pink-100 mb-8 font-bold animate-bounce">
            Selamat ulang tahun ke-22, semoga bahagia selalu! 🎉✨
          </p>
          <button
            onClick={() => setShowCelebration(false)}
            className="bg-white/20 backdrop-blur-md text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-white/30 transition-all duration-300 animate-pulse-glow"
          >
            Lanjut ke Website Spesialmu 💕
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-8 shadow-2xl">
      <div className="text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Cake className="w-12 h-12 text-pink-300 animate-bounce" />
          <h3 className="font-display text-3xl font-bold text-white">
            Countdown to Your 22nd Birthday 🎂
          </h3>
          <Gift className="w-12 h-12 text-purple-300 animate-bounce delay-300" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {[
            { label: 'Days', value: timeLeft.days, color: 'from-pink-500 to-rose-500', icon: <Calendar className="w-6 h-6" /> },
            { label: 'Hours', value: timeLeft.hours, color: 'from-purple-500 to-indigo-500', icon: <Crown className="w-6 h-6" /> },
            { label: 'Minutes', value: timeLeft.minutes, color: 'from-blue-500 to-cyan-500', icon: <Zap className="w-6 h-6" /> },
            { label: 'Seconds', value: timeLeft.seconds, color: 'from-emerald-500 to-teal-500', icon: <Sparkles className="w-6 h-6" /> },
          ].map((item) => (
            <div key={item.label} className="group">
              <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}>
                <div className="absolute top-2 right-2 text-white/30">
                  {item.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2 font-display">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
          <p className="text-2xl text-purple-200 font-bold">
            September 29, 2025 ✨
          </p>
          <p className="text-purple-300 text-sm">
            Hari spesialmu ke-22 💕
          </p>
        </div>
      </div>
    </div>
  );
};
