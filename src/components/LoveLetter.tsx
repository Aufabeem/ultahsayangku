import React, { useState } from 'react';
import { Heart, Mail, Star, Sparkles, X } from 'lucide-react';

export const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const letterPages = [
    {
      title: "Untuk Kamu yang Kucintai 💕",
      content: `Sayangku,

Hari ini spesial banget, karena hari ini orang paling berharga dalam hidupku dilahirkan ke dunia. Ya, itu kamu… orang yang selalu bikin hariku lebih indah.

Setiap detik bersamamu selalu terasa berarti. Senyummu bikin aku tenang, tawamu bikin aku bahagia, dan kehadiranmu selalu jadi alasan aku bersyukur setiap hari.

Kamu bukan cuma pasangan buatku, tapi rumah tempat hatiku selalu ingin kembali. ❤️`
    },
    {
      title: "Kenangan Kita 🌟",
      content: `Aku masih ingat jelas momen pertama kali kita ketemu. Rasanya deg-degan banget waktu lihat senyummu… dan sejak itu aku tahu, kamu bukan orang biasa di hidupku.

Setiap cerita yang kita lalui bareng, baik suka maupun duka, semuanya jadi bagian terindah dalam hidupku. Dari tawa kecil sampai pelukan hangat di saat-saat sulit, semuanya begitu berharga.

Kamu ngajarin aku arti cinta yang tulus dan sabar. Terima kasih ya sayang, udah hadir dan jadi bagian penting dalam hidupku. 🤍`
    },
    {
      title: "Janji & Doa Tulusku 💖",
      content: `Sayang, di ulang tahunmu yang ke-22 ini, aku pengin kamu tahu satu hal: cintaku selalu milikmu, sekarang dan selamanya.

Aku janji bakal selalu ada di sisimu. Jadi tempat kamu bersandar kalau lagi lelah, jadi orang pertama yang nyemangatin kamu buat kejar mimpi-mimpi besarmu.

Semoga di usia baru ini, kamu selalu sehat, bahagia, dan dikelilingi hal-hal indah. Aku percaya, kita bakal terus tumbuh bareng, saling dukung, dan saling sayang lebih dari sebelumnya.

Selamat ulang tahun, cintaku. 🎂✨
Dari seseorang yang nggak akan pernah berhenti sayang sama kamu. 💕`
    }
  ];

  return (
    <>
      {/* Floating Love Letter Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Notification Pulse */}
        <div className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 rounded-full animate-pulse"></div>
        
        {/* Tooltip */}
        <div className="absolute -top-14 -left-16 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1.5 rounded-2xl shadow-lg animate-bounce text-xs sm:text-sm">
          📩 Ada surat cinta! 💕
        </div>
        
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-110 relative"
        >
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-bounce" />
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
            💕
          </div>
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-30"></div>
          <div className="absolute inset-0 rounded-full bg-rose-400 animate-pulse opacity-20"></div>
        </button>
      </div>

      {/* Love Letter Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in-up">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl w-full max-w-4xl mx-4 relative animate-scale-in shadow-2xl border border-pink-200 overflow-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 text-gray-600 hover:text-gray-800 z-10 shadow-lg"
            >
              <X className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>

            <div className="p-6 sm:p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4 flex-wrap">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 fill-pink-500 animate-pulse" />
                  <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-bold gradient-text">
                    {letterPages[currentPage].title}
                  </h2>
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 fill-pink-500 animate-pulse" />
                </div>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mx-auto"></div>
              </div>

              {/* Body */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-pink-100 mb-6 sm:mb-8">
                <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                    {letterPages[currentPage].content}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                <button
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 ${
                    currentPage === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  ← Previous
                </button>

                {/* Page Indicators */}
                <div className="flex gap-2">
                  {letterPages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                        index === currentPage
                          ? 'bg-gradient-to-r from-pink-500 to-rose-500 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(letterPages.length - 1, currentPage + 1))}
                  disabled={currentPage === letterPages.length - 1}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 ${
                    currentPage === letterPages.length - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  Next →
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 opacity-20">
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-pink-400 animate-spin" />
              </div>
              <div className="absolute bottom-4 right-16 sm:bottom-8 sm:right-20 opacity-20">
                <Star className="w-6 sm:w-8 h-6 sm:h-8 text-rose-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
