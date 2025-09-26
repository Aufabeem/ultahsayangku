import React, { useState } from 'react';
import { Heart, Star, Smile, Sun, Shield, Flower, Crown, Gift, Eye, Zap, X } from 'lucide-react';

interface PersonalityTrait {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

export const PersonalityShowcase: React.FC = () => {
  const [selectedTrait, setSelectedTrait] = useState<PersonalityTrait | null>(null);
  const [hoveredTrait, setHoveredTrait] = useState<number | null>(null);

  const personalityTraits: PersonalityTrait[] = [
    {
      id: 1,
      title: "Baik Hati",
      description: "Kamu memiliki hati yang sangat baik dan selalu peduli dengan orang lain. Kebaikan hatimu membuat semua orang nyaman di sekitarmu, termasuk aku. Setiap tindakanmu selalu dilandasi dengan niat baik dan kasih sayang yang tulus.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-400 to-rose-500",
      category: "Kepribadian"
    },
    {
      id: 2,
      title: "Ceria dan Periang",
      description: "Sifat ceria dan periangmu selalu berhasil menghibur hari-hariku yang suram. Tawa dan senyummu adalah obat terbaik untuk semua kesedihanku. Energi positifmu menular ke semua orang di sekitarmu.",
      icon: <Smile className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      category: "Emosi"
    },
    {
      id: 3,
      title: "Penyayang",
      description: "Cara kamu menyayangi dan merawat orang-orang terdekatmu sangat luar biasa. Kasih sayangmu tulus dan hangat, seperti pelukan yang memberikan kenyamanan di saat yang paling dibutuhkan.",
      icon: <Sun className="w-8 h-8" />,
      color: "from-orange-400 to-red-500",
      category: "Cinta"
    },
    {
      id: 4,
      title: "Kuat dan Tangguh",
      description: "Kamu adalah wanita yang kuat dan tangguh. Setiap kali menghadapi masalah, kamu selalu bangkit dengan kepala tegak. Kekuatan mentalmu menginspirasi aku untuk menjadi lebih kuat juga.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-400 to-indigo-500",
      category: "Karakter"
    },
    {
      id: 5,
      title: "Cantik Dalam dan Luar",
      description: "Kecantikanmu bukan hanya dari luar, tapi juga dari dalam. Jiwa yang cantik, hati yang bersih, dan kepribadian yang menawan. Kamu adalah definisi sempurna dari kecantikan sejati.",
      icon: <Flower className="w-8 h-8" />,
      color: "from-pink-400 to-purple-500",
      category: "Kecantikan"
    },
    {
      id: 6,
      title: "Pintar dan Cerdas",
      description: "Kecerdasanmu selalu membuatku kagum. Cara kamu berpikir, memecahkan masalah, dan memberikan pendapat selalu bijak dan tepat. Aku bangga memiliki pasangan yang cerdas seperti kamu.",
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-400 to-cyan-500",
      category: "Intelektual"
    },
    {
      id: 7,
      title: "Pengertian",
      description: "Sifat pengertianmu membuat hubungan kita selalu harmonis. Kamu selalu berusaha memahami perasaanku dan memberikan dukungan. Empatimu yang tinggi membuatku merasa dimengerti.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-teal-400 to-green-500",
      category: "Hubungan"
    },
    {
      id: 8,
      title: "Lucu dan Menggemaskan",
      description: "Tingkah lakumu yang lucu dan menggemaskan selalu berhasil membuatku tersenyum. Kamu tahu cara membuat aku tertawa bahkan di saat-saat tersulit. Kelucuanmu adalah obat stress terbaik.",
      icon: <Gift className="w-8 h-8" />,
      color: "from-rose-400 to-pink-500",
      category: "Kelucuan"
    },
    {
      id: 9,
      title: "Setia dan Loyal",
      description: "Kesetiaanmu adalah hal yang paling aku hargai. Aku tahu kamu akan selalu ada untukku dalam suka dan duka. Loyalitasmu memberiku rasa aman dan kepercayaan yang tak tergoyahkan.",
      icon: <Crown className="w-8 h-8" />,
      color: "from-indigo-400 to-purple-500",
      category: "Komitmen"
    },
    {
      id: 10,
      title: "Inspiratif",
      description: "Kamu adalah inspirasi terbesarku. Semangat hidupmu, cara kamu mengejar mimpi, dan sikap positifmu membuatku ingin menjadi versi terbaik dari diriku. Kamu memotivasiku setiap hari.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-400 to-red-500",
      category: "Motivasi"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Star className="w-3 h-3 text-purple-200/40" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Crown className="w-10 h-10 text-purple-500 animate-bounce" />
            <h2 className="font-display text-5xl md:text-6xl font-bold gradient-text">
              10 Sifatmu Menurut Ayang
            </h2>
            <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are the beautiful qualities that make you so special to me...
          </p>
        </div>

        {/* Traits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
          {personalityTraits.map((trait) => (
            <div
              key={trait.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover-lift"
              onClick={() => setSelectedTrait(trait)}
              onMouseEnter={() => setHoveredTrait(trait.id)}
              onMouseLeave={() => setHoveredTrait(null)}
            >
              <div className={`bg-gradient-to-br ${trait.color} p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[200px] flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      className="absolute w-6 h-6 animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.7}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Trait Icon */}
                <div className="mb-4 relative z-10 group-hover:animate-bounce">
                  <div className="text-white">
                    {trait.icon}
                  </div>
                </div>

                {/* Trait Title */}
                <h3 className="text-lg font-bold mb-2 text-center relative z-10">
                  {trait.title}
                </h3>

                {/* Category */}
                <p className="text-center text-sm opacity-90 relative z-10">
                  {trait.category}
                </p>

                {/* Hover Effect */}
                {hoveredTrait === trait.id && (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                    <span className="text-white font-medium">Click to read more</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedTrait && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in-up">
          <div className="bg-white rounded-3xl max-w-4xl w-full mx-4 relative animate-scale-in shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedTrait(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg text-gray-600 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Modal Content */}
            <div className="p-12 text-center">
              {/* Icon */}
              <div className={`inline-block p-8 bg-gradient-to-br ${selectedTrait.color} rounded-full text-white mb-8 shadow-2xl animate-pulse-glow`}>
                {selectedTrait.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-display text-4xl font-bold text-gray-800 mb-6 gradient-text">
                {selectedTrait.title}
              </h3>
              
              {/* Category */}
              <div className={`inline-block bg-gradient-to-r ${selectedTrait.color} px-6 py-3 rounded-full text-white font-bold text-lg mb-8 shadow-lg`}>
                {selectedTrait.category}
              </div>
              
              {/* Description */}
              <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
                {selectedTrait.description}
              </p>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedTrait(null)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 mx-auto"
              >
                <Heart className="w-6 h-6" />
                Close with Love
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};