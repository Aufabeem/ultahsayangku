import React, { useState } from 'react';
import { Heart, Star, Calendar, Home, BellRing as Ring, Baby, Plane, Crown, Gift, Sun, Moon, Infinity, X } from 'lucide-react';

interface Hope {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  timeframe: string;
}

export const FutureVision: React.FC = () => {
  const [selectedHope, setSelectedHope] = useState<Hope | null>(null);

  const futureHopes: Hope[] = [
    {
      id: 1,
      title: "Selalu Bahagia",
      description: "Harapan terbesarku adalah melihatmu selalu bahagia setiap hari. Aku ingin menjadi alasan senyummu, dan aku berjanji akan melakukan apapun untuk mempertahankan kebahagiaanmu. Senyummu adalah matahari yang menerangi hari-hariku, dan aku akan berusaha keras memastikan senyum itu tidak pernah pudar dari wajah cantikmu.",
      icon: <Sun className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      timeframe: "Setiap Hari"
    },
    {
      id: 2,
      title: "Menikah Denganmu",
      description: "Aku bermimpi suatu hari nanti kita akan menikah dan menjadi pasangan suami istri yang bahagia. Aku ingin mengucapkan janji suci di hadapan Tuhan dan keluarga bahwa aku akan mencintaimu selamanya. Aku ingin kita membangun rumah tangga yang penuh cinta, saling mendukung, dan tumbuh bersama hingga tua.",
      icon: <Ring className="w-8 h-8" />,
      color: "from-pink-400 to-rose-500",
      timeframe: "Masa Depan"
    },
    {
      id: 3,
      title: "Membangun Rumah Bersama",
      description: "Aku ingin kita memiliki rumah kecil yang hangat dan penuh cinta. Rumah dimana kita bisa tertawa bersama, berbagi cerita, dan menciptakan kenangan indah setiap hari. Rumah yang menjadi tempat kita berlindung dari dunia luar dan tempat dimana cinta kita terus tumbuh dan berkembang.",
      icon: <Home className="w-8 h-8" />,
      color: "from-blue-400 to-cyan-500",
      timeframe: "5-10 Tahun"
    },
    {
      id: 4,
      title: "Traveling Keliling Dunia",
      description: "Aku ingin kita bisa traveling bersama ke tempat-tempat indah di dunia. Melihat sunset di Santorini, jalan-jalan di Paris, atau sekedar staycation di Bali. Yang penting bersama kamu! Aku ingin kita menciptakan kenangan indah di setiap tempat yang kita kunjungi dan mengabadikan momen-momen bahagia kita.",
      icon: <Plane className="w-8 h-8" />,
      color: "from-purple-400 to-indigo-500",
      timeframe: "Bertahap"
    },
    {
      id: 5,
      title: "Punya Keluarga Kecil",
      description: "Suatu hari nanti, aku berharap kita bisa memiliki keluarga kecil yang bahagia. Anak-anak yang lucu dengan senyum seperti kamu dan mata seperti aku. Aku ingin kita menjadi orang tua yang baik, memberikan cinta dan kasih sayang yang tulus kepada buah hati kita, dan membesarkan mereka dengan penuh kebahagiaan.",
      icon: <Baby className="w-8 h-8" />,
      color: "from-rose-400 to-pink-500",
      timeframe: "Setelah Menikah"
    },
    {
      id: 6,
      title: "Sukses Bersama",
      description: "Aku berharap kita berdua bisa sukses dalam karir masing-masing dan saling mendukung. Kamu mencapai semua mimpi-mimpimu, dan aku akan selalu ada untuk mendukung. Aku ingin kita tumbuh bersama, tidak hanya dalam cinta tapi juga dalam pencapaian dan kesuksesan hidup.",
      icon: <Crown className="w-8 h-8" />,
      color: "from-indigo-400 to-purple-500",
      timeframe: "Jangka Panjang"
    },
    {
      id: 7,
      title: "Tua Bersama",
      description: "Aku ingin kita bisa tua bersama, duduk di teras rumah sambil melihat cucu-cucu bermain. Rambut kita sudah memutih tapi cinta kita masih sama hangatnya seperti hari ini. Aku ingin kita bisa bercerita kepada cucu-cucu tentang kisah cinta kita yang indah dan bagaimana kita bertahan melewati segala rintangan hidup.",
      icon: <Moon className="w-8 h-8" />,
      color: "from-gray-400 to-blue-500",
      timeframe: "Selamanya"
    },
    {
      id: 8,
      title: "Cinta yang Abadi",
      description: "Harapan terakhir dan terpentingku adalah cinta kita akan abadi selamanya. Tidak ada yang bisa memisahkan kita, dan cinta ini akan terus tumbuh dan menguat seiring berjalannya waktu. Aku berjanji akan mencintaimu dengan sepenuh hati, dalam suka maupun duka, sampai nafas terakhirku.",
      icon: <Infinity className="w-8 h-8" />,
      color: "from-pink-400 to-purple-500",
      timeframe: "Selamanya"
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
            <Star className="w-3 h-3 text-indigo-200/40" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Star className="w-10 h-10 text-indigo-500 animate-bounce" />
            <h2 className="font-display text-5xl md:text-6xl font-bold gradient-text">
              Harapanku Buat Kamu Kedepannya
            </h2>
            <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My dreams and hopes for our beautiful future together...
          </p>
        </div>

        {/* Hopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {futureHopes.map((hope) => (
            <div
              key={hope.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover-lift"
              onClick={() => setSelectedHope(hope)}
            >
              <div className={`bg-gradient-to-br ${hope.color} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[280px] flex flex-col items-center justify-center text-white relative overflow-hidden`}>
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

                {/* Hope Icon */}
                <div className="mb-6 relative z-10 group-hover:animate-bounce">
                  <div className="text-white">
                    {hope.icon}
                  </div>
                </div>

                {/* Hope Title */}
                <h3 className="text-xl font-bold mb-4 text-center relative z-10">
                  {hope.title}
                </h3>

                {/* Timeframe */}
                <div className="bg-white/20 px-4 py-2 rounded-full text-sm relative z-10 backdrop-blur-sm">
                  {hope.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedHope && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in-up">
          <div className="bg-white rounded-3xl max-w-4xl w-full mx-4 relative animate-scale-in shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedHope(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg text-gray-600 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Modal Content */}
            <div className="p-12 text-center">
              {/* Icon */}
              <div className={`inline-block p-8 bg-gradient-to-br ${selectedHope.color} rounded-full text-white mb-8 shadow-2xl animate-pulse-glow`}>
                {selectedHope.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-display text-4xl font-bold text-gray-800 mb-6 gradient-text">
                {selectedHope.title}
              </h3>
              
              {/* Timeframe */}
              <div className={`inline-block bg-gradient-to-r ${selectedHope.color} px-6 py-3 rounded-full text-white font-bold text-lg mb-8 shadow-lg`}>
                {selectedHope.timeframe}
              </div>
              
              {/* Description */}
              <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
                {selectedHope.description}
              </p>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedHope(null)}
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