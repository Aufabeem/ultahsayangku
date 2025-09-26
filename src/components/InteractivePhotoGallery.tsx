import React, { useState, useEffect } from 'react';
import { Heart, Camera, Star, Eye, X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';

interface Photo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

export const InteractivePhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const photos: Photo[] = [
    {
      id: 1,
      imageUrl: `${import.meta.env.BASE_URL}images/ayang1.jpeg`,
      category: "Portrait",
      date: "2024"
    },
    {
      id: 2,
      imageUrl: `${import.meta.env.BASE_URL}images/ayang2.jpeg`,
      category: "Close-up",
      date: "2024"
    },
    {
      id: 3,
      imageUrl: `${import.meta.env.BASE_URL}images/ayang3.jpeg`,
      category: "Candid",
      date: "2024"
    },
    {
      id: 4,
      imageUrl: `${import.meta.env.BASE_URL}images/ayang4.jpeg`,
      category: "Natural",
      date: "2024"
    },
    {
      id: 5,
      imageUrl: `${import.meta.env.BASE_URL}images/ayang5.jpeg`,
      category: "Fashion",
      date: "2024"
    },
    {
      id: 6,
      imageUrl: `${import.meta.env.BASE_URL}images/ayang6.jpeg`,
      category: "Glamour",
      date: "2024"
    }
  ];
  

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setSelectedPhoto(photos[(currentIndex + 1) % photos.length]);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setSelectedPhoto(photos[(currentIndex - 1 + photos.length) % photos.length]);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedPhoto) {
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
        if (e.key === 'Escape') setSelectedPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedPhoto, currentIndex]);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Camera className="w-10 h-10 text-purple-500 animate-bounce" />
            <h2 className="font-display text-5xl md:text-6xl font-bold gradient-text">
              Gallery of Beautiful Moments
            </h2>
            <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated collection of your most beautiful photos that capture your essence and make my heart skip a beat
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500 hover-lift"
              onClick={() => {
                setSelectedPhoto(photo);
                setCurrentIndex(index);
              }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white p-2">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {photo.category}
                  </div>
                  
                  {/* Heart Icon */}
                  <div className="absolute top-4 right-4 bg-pink-500/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-bold text-xl mb-2">{photo.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{photo.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-4">
          {/* Navigation Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 text-white z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextPhoto}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 text-white z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 text-white z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Photo Counter */}
          <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium z-10">
            {currentIndex + 1} / {photos.length}
          </div>

          {/* Main Content */}
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <div className="relative">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
            </div>

            {/* Details */}
            <div className="text-white p-8 text-center md:text-left">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full text-sm font-bold">
                    {selectedPhoto.category}
                  </span>
                  <span className="text-gray-300">{selectedPhoto.date}</span>
                </div>
                
                <h3 className="font-display text-4xl font-bold mb-6 gradient-text">
                  {selectedPhoto.title}
                </h3>
              </div>
              
              <p className="text-xl leading-relaxed mb-8 text-gray-200">
                {selectedPhoto.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-bold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 flex items-center gap-3">
                  <Heart className="w-5 h-5" />
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};