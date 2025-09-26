import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles, Calendar, Gift, Crown, Zap } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthdayToday, setIsBirthdayToday] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const currentYear = new Date().getFullYear();
      let birthday = new Date(currentYear, 8, 29).getTime(); // September 29, current year
      
      // If birthday has passed this year, set it for next year
      if (birthday < now) {
        birthday = new Date(currentYear + 1, 8, 29).getTime();
      }
      
      const difference = birthday - now;
      const today = new Date();
      const isBirthday = today.getMonth() === 8 && today.getDate() === 29; // September 29
      
      if (isBirthday) {
        setIsBirthdayToday(true);
        // Show celebration for first 10 seconds, then normal hero
        if (!showCelebration) {
          setShowCelebration(true);
          setTimeout(() => setShowCelebration(false), 10000); // Hide after 10 seconds
        }
      } else {
        setIsBirthdayToday(false);
        setShowCelebration(false);
      }
      
      if (difference > 0 && !isBirthday) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Show celebration screen only for first 10 seconds on birthday
  if (isBirthdayToday && showCelebration) {
    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-rose-500 animate-gradient-shift" />
        
        {/* Celebration Particles */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce text-2xl md:text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              {['🎂', '🎉', '🎈', '🌟', '💖', '🎁', '✨', '🎊'][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>
        
        <div className="text-center z-10 px-6">
          <div className="animate-scale-in">
            <h1 className="font-display text-6xl md:text-9xl font-bold text-white mb-8 animate-pulse-glow">
              🎂 HAPPY 22nd BIRTHDAY! 🎂
            </h1>
            <p className="text-2xl md:text-4xl text-pink-100 mb-8 font-medium">
              Today is YOUR special day! 🥳✨
            </p>
            <button
              onClick={() => setShowCelebration(false)}
              className="bg-white/20 backdrop-blur-md text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-white/30 transition-all duration-300 animate-pulse-glow"
            >
              Continue to Your Special Website 💕
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      
      {/* Animated Particles */}
      <div className="particles">
        {mounted && [...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0">
        {mounted && [...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          >
            <Star className="w-3 h-3 text-white/40" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        {/* Main Title Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in-up">
            <div className="animate-pulse-glow">
              <Heart className="w-16 h-16 text-pink-400 fill-pink-400" />
            </div>
            <div className="animate-sparkle delay-300">
              <Sparkles className="w-14 h-14 text-yellow-400" />
            </div>
            <div className="animate-pulse-glow delay-500">
              <Heart className="w-16 h-16 text-pink-400 fill-pink-400" />
            </div>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl font-bold text-white mb-8 animate-fade-in-up delay-200">
            <span className="gradient-text">Happy 22nd Birthday</span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-pink-200 mb-8 animate-fade-in-up delay-500 font-medium">
            For the Most Beautiful Soul in My Life
          </p>
          
          <div className="w-40 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full mx-auto mb-12 animate-fade-in-up delay-700 animate-gradient-shift"></div>
        </div>

        {/* Premium Countdown Timer */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up delay-800">
            <Calendar className="w-10 h-10 text-purple-300" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Countdown to Your Special Day
            </h2>
            <Gift className="w-10 h-10 text-pink-300" />
          </div>
          
          {/* Countdown Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
            {[
              { label: 'Days', value: timeLeft.days, color: 'from-pink-500 via-rose-500 to-pink-600', icon: <Calendar className="w-8 h-8" /> },
              { label: 'Hours', value: timeLeft.hours, color: 'from-purple-500 via-indigo-500 to-purple-600', icon: <Crown className="w-8 h-8" /> },
              { label: 'Minutes', value: timeLeft.minutes, color: 'from-blue-500 via-cyan-500 to-blue-600', icon: <Zap className="w-8 h-8" /> },
              { label: 'Seconds', value: timeLeft.seconds, color: 'from-emerald-500 via-teal-500 to-emerald-600', icon: <Sparkles className="w-8 h-8" /> },
            ].map((item, index) => (
              <div key={item.label} className={`animate-scale-in delay-${(index + 10) * 100}`}>
                <div className={`glass rounded-3xl p-8 shadow-2xl hover-lift group cursor-pointer bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 right-2 text-white/30">
                      {item.icon}
                    </div>
                    <div className="absolute bottom-2 left-2 text-white/20">
                      <Heart className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Counter Value */}
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-4 font-display group-hover:scale-110 transition-transform duration-300">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-white/90 text-lg font-semibold uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Target Date Display */}
          <div className="animate-fade-in-up delay-1500">
            <div className="inline-block glass rounded-2xl px-8 py-4 text-center">
              {isBirthdayToday ? (
                <>
                  <p className="text-2xl text-pink-200 font-bold font-display animate-pulse">
                    🎂 TODAY IS YOUR BIRTHDAY! 🎂
                  </p>
                  <p className="text-pink-300 text-sm mt-1">
                    September 29 - The most special day! ✨
                  </p>
                </>
              ) : (
                <>
                  <p className="text-2xl text-purple-200 font-bold font-display">
                    September 29, {new Date().getFullYear() + (new Date().getMonth() > 8 || (new Date().getMonth() === 8 && new Date().getDate() > 29) ? 1 : 0)} ✨
                  </p>
                  <p className="text-purple-300 text-sm mt-1">
                    The most special day of the year
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="animate-fade-in-up delay-2000">
          <p className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Scroll down to discover a magical journey through our love story, filled with memories, dreams, and everything that makes you the most special person in my world...
            <br />
            <span className="text-pink-300 font-bold animate-pulse">💌 Jangan lupa cek surat cinta di pojok kanan bawah ya! 💕</span>
          </p>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce delay-500">
            <div className="w-12 h-12 border-2 border-pink-400 rounded-full mx-auto flex items-center justify-center glass hover-lift cursor-pointer group">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse group-hover:bg-white transition-colors duration-300"></div>
            </div>
            <p className="text-pink-300 text-sm mt-3 font-medium">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};