import React from 'react';
import { FaQuestion } from 'react-icons/fa';

// Komponen untuk menampilkan satu kartu memori
// props:
// - card: objek yang berisi informasi kartu (id, icon, color, pairId)
// - isFlipped: boolean apakah kartu sedang terbuka
// - isMatched: boolean apakah kartu sudah berhasil dicocokkan
// - onFlip: fungsi yang dipanggil ketika kartu diklik
function Card({  card, isFlipped, isMatched, isGameComplete, onFlip }) {
  // Handler ketika kartu diklik
  // Hanya bisa diklik jika kartu belum terbuka dan belum matched
  const handleClick = () => {
    if (!isFlipped && !isMatched) {
        onFlip(card.id);
    }
  };

  const isOpen = isFlipped || isMatched;
  const IconComponent = card.icon;

  return (
    <div
      onClick={handleClick}
      className="w-20 h-20 cursor-pointer transition-all duration-300 perspective"
    >
      <div
        className={`relative w-full h-full flex items-center justify-center text-3xl rounded-xl select-none
        transition-all duration-300 transform
        hover:scale-110 hover:shadow-xl hover:shadow-purple-400/70
        ${isOpen ? 'bg-white shadow-md' : 'bg-gradient-to-br from-blue-600 to-purple-700 shadow-lg'}
        ${isMatched ? 'opacity-90 ring-2 ring-green-400 shadow-lg shadow-green-400/70' : ''}
        ${isGameComplete ? 'animate-win-glow' : ''}`}
      >

        {/* Tampilkan icon jika kartu terbuka atau sudah cocok */}
        {isOpen ? (
          <span className="animate-bounce-once">
            <IconComponent style={{ color: card.color }} />
          </span>
        ) : (
          <FaQuestion className="text-white/70 text-xl" />
        )}

      </div>
    </div>
  );
}

export default Card;