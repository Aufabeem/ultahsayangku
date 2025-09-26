import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Star, Sparkles } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'timeline', 'gallery', 'personality', 'future'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: <Heart className="w-4 h-4" /> },
    { id: 'timeline', label: 'Our Story', icon: <Star className="w-4 h-4" /> },
    { id: 'photos', label: 'Photos', icon: <Star className="w-4 h-4" /> },
    { id: 'memories', label: 'Memories', icon: <Heart className="w-4 h-4" /> },
    { id: 'personality', label: 'About You', icon: <Heart className="w-4 h-4" /> },
    { id: 'future', label: 'Future', icon: <Star className="w-4 h-4" /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Premium Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <Heart className={`w-10 h-10 ${isScrolled ? 'text-pink-500' : 'text-white'} fill-current animate-pulse-glow group-hover:scale-110 transition-transform duration-300`} />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-yellow-400 animate-sparkle" />
              </div>
            </div>
            <div>
              <span className={`text-2xl font-bold font-display ${isScrolled ? 'text-gray-800' : 'text-white'} group-hover:gradient-text transition-all duration-300`}>
                Happy 22nd
              </span>
              <div className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-white/70'} font-medium`}>
                Birthday Special
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 transform relative overflow-hidden group ${
                  activeSection === item.id
                    ? isScrolled 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                      : 'glass text-white border border-white/20'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-pink-500 hover:bg-pink-50' 
                      : 'text-white hover:text-pink-300 hover:glass'
                }`}
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                
                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
                
                {/* Active Indicator */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:glass'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass rounded-3xl mt-4 p-6 shadow-2xl border border-white/10 animate-scale-in">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 w-full text-left py-4 px-6 rounded-2xl font-medium transition-all duration-300 hover:scale-105 transform group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-700 hover:text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  <div className="group-hover:animate-bounce">
                    {item.icon}
                  </div>
                  <span className="font-semibold">{item.label}</span>
                  
                  {/* Active Indicator */}
                  {activeSection === item.id && (
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Footer */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-gray-500 text-sm font-medium">
                Made with 💕 for someone special
                <br />
                <span className="text-pink-400 animate-pulse">📩 Ada surat cinta menunggu di pojok kanan bawah!</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};