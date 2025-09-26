import React, { useState, useEffect } from "react";
import {
  Heart,
  Lock,
  Unlock,
  Star,
  Sparkles,
  Eye,
  Music,
  Camera,
  Gift,
  Crown,
  Coffee,
  X,
} from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  content: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  position: "left" | "right";
}

export const InteractiveTimeline: React.FC = () => {
  const [unlockedItems, setUnlockedItems] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "Masa Awal Cinta Tumbuh",
      content:
        "Semuanya berawal dari masa SMK. Waktu itu cinta mulai tumbuh perlahan, sederhana, tapi penuh makna. Senyum dan perhatian kecil jadi awal perjalanan panjang kita. 💕",
      category: "Awal Kisah",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 via-rose-500 to-pink-600",
      position: "left",
    },
    {
      id: 2,
      title: "Masa Lulus SMK dan Persiapan LDR",
      content:
        "Setelah lulus SMK, jalan kita mulai berbeda. Ada rasa takut kehilangan, tapi juga tekad untuk tetap bersama meski jarak memisahkan. 🌸",
      category: "Perubahan",
      icon: <Star className="w-8 h-8" />,
      color: "from-purple-500 via-indigo-500 to-purple-600",
      position: "right",
    },
    {
      id: 3,
      title: "LDR Blora – Purwakarta",
      content:
        "Momen-momen rindu yang tak terhitung. Dari pesan singkat, panggilan tengah malam, sampai doa-doa yang tak pernah putus. Jarak jauh menguatkan kita. 🌍",
      category: "LDR",
      icon: <Coffee className="w-8 h-8" />,
      color: "from-amber-500 via-orange-500 to-amber-600",
      position: "left",
    },
    {
      id: 4,
      title: "Pertemuan Kembali di Semarang",
      content:
        "Setelah penantian panjang, akhirnya kita bertemu lagi di Semarang. Semua rindu yang terpendam seolah terbayar dalam pelukan pertama setelah lama berpisah. 🤗",
      category: "Reuni",
      icon: <Gift className="w-8 h-8" />,
      color: "from-blue-500 via-cyan-500 to-blue-600",
      position: "right",
    },
    {
      id: 5,
      title: "Membangun Karir Bersama di Semarang",
      content:
        "Kita saling mendukung, memberi semangat, dan melangkah maju bersama dalam meraih mimpi masing-masing. Perjalanan ini jadi lebih indah karena ada kamu di sisiku. 💼",
      category: "Karir & Mimpi",
      icon: <Star className="w-8 h-8" />,
      color: "from-green-500 via-emerald-500 to-green-600",
      position: "left",
    },
    {
      id: 6,
      title: "Mimpi Menikah & Masa Depan",
      content:
        "Perjalanan kita belum berhenti. Masih banyak mimpi menanti, termasuk membangun rumah tangga bersama, menciptakan keluarga penuh cinta, dan menua berdua. 💍",
      category: "Future",
      icon: <Crown className="w-8 h-8" />,
      color: "from-indigo-500 via-purple-500 to-indigo-600",
      position: "right",
    },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute("data-id") || "0");
            setVisibleItems((prev) => [...prev, id]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll("[data-timeline-item]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const unlockItem = (item: TimelineItem) => {
    if (!unlockedItems.includes(item.id)) {
      setUnlockedItems((prev) => [...prev, item.id]);
    }
    setSelectedItem(item);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-purple-50 to-rose-50 relative overflow-hidden">
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
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up">
            <Star className="w-10 h-10 text-purple-500 animate-sparkle" />
            <h2 className="font-display text-5xl md:text-7xl font-bold gradient-text">
              Our Love Story Timeline
            </h2>
            <Star className="w-10 h-10 text-pink-500 animate-sparkle delay-500" />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium animate-fade-in-up delay-300">
            Click each magical moment to unlock the memories and feelings we've
            shared together...
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-pink-300 via-purple-300 to-rose-300 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full animate-pulse opacity-50"></div>
          </div>

          {timelineItems.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              data-timeline-item
              className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-20 ${
                item.position === "left" ? "md:flex-row" : "md:flex-row-reverse"
              } ${
                visibleItems.includes(item.id)
                  ? "animate-fade-in-up"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Node */}
              <div className="absolute md:static left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 md:translate-x-0 z-20 mb-6 md:mb-0">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center cursor-pointer hover:scale-125 transition-all duration-500 shadow-2xl group relative overflow-hidden`}
                  onClick={() => unlockItem(item)}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  <div className="relative z-10">
                    {unlockedItems.includes(item.id) ? (
                      <div className="text-white group-hover:animate-bounce">
                        {item.icon}
                      </div>
                    ) : (
                      <Lock className="w-8 h-8 text-white group-hover:animate-pulse" />
                    )}
                  </div>
                  {unlockedItems.includes(item.id) && (
                    <div className="absolute inset-0 animate-pulse-glow rounded-full"></div>
                  )}
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${item.position === "left" ? "md:pr-12" : "md:pl-12"}`}>
                <div
                  className={`glass rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover-lift group relative overflow-hidden ${
                    unlockedItems.includes(item.id)
                      ? "border-2 border-pink-400/50"
                      : "border border-white/20"
                  }`}
                  onClick={() => unlockItem(item)}
                >
                  {/* Card Content */}
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-3 md:mb-4">
                      <span
                        className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold bg-gradient-to-r ${item.color} text-white shadow-lg`}
                      >
                        {item.category}
                      </span>
                      {unlockedItems.includes(item.id) && (
                        <div className="flex items-center gap-1">
                          <Unlock className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 animate-spin" />
                        </div>
                      )}
                    </div>

                    <h3 className="font-display text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:gradient-text transition-all duration-300">
                      {unlockedItems.includes(item.id)
                        ? item.title
                        : `Mystery Love Note #${item.id}`}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {unlockedItems.includes(item.id)
                        ? item.content.substring(0, 120) + "..."
                        : "Click to unlock this special memory and discover something beautiful about our love story..."}
                    </p>

                    <div className="mt-4 md:mt-6">
                      <button
                        className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                          unlockedItems.includes(item.id)
                            ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-lg"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {unlockedItems.includes(item.id)
                          ? "Read Full Story"
                          : "Unlock Memory"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-10 py-6 shadow-2xl hover-lift">
            <Crown className="w-8 h-8 text-purple-500 animate-bounce" />
            <div>
              <span className="text-gray-700 font-bold text-2xl font-display">
                {unlockedItems.length} of {timelineItems.length}
              </span>
              <p className="text-gray-500 font-medium">memories unlocked</p>
            </div>
            <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-gradient-to-br from-rose-900 via-purple-900 to-black flex items-center justify-center z-50 p-4 animate-fade-in-up">
          {/* Floating Hearts Background */}
          {[...Array(12)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-400/20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl max-w-4xl w-full mx-4 relative animate-scale-in shadow-2xl border border-pink-400/30 p-12 text-center">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className={`inline-block p-8 bg-gradient-to-br ${selectedItem.color} rounded-full text-white mb-8 shadow-2xl animate-pulse-glow`}
            >
              {selectedItem.icon}
            </div>

            <h3 className="font-display text-4xl font-bold text-pink-200 mb-6 gradient-text">
              {selectedItem.title}
            </h3>

            <div
              className={`inline-block bg-gradient-to-r ${selectedItem.color} px-6 py-3 rounded-full text-white font-bold text-lg mb-8 shadow-lg`}
            >
              {selectedItem.category}
            </div>

            <p className="text-xl text-pink-100 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
              {selectedItem.content}
            </p>

            <button
              onClick={() => setSelectedItem(null)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 mx-auto"
            >
              <Heart className="w-6 h-6" />
              Tutup dengan Cinta
              <Heart className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
