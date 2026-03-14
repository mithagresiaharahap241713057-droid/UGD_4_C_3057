import React from 'react';
import { FaQuestion } from 'react-icons/fa';

function Card({ card, isFlipped, isMatched, isGameComplete, onFlip }) {

  const handleClick = () => {
    if (!isFlipped && !isMatched) {
      onFlip(card.id);
    }
  };

  const IconComponent = card.icon;

  return (
    <div
      onClick={handleClick}
      className="w-20 h-20 perspective cursor-pointer"
    >

      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style
        ${isFlipped || isMatched ? "rotate-y-180" : ""}
        hover:scale-110 hover:shadow-xl hover:shadow-purple-400/70
        ${isMatched ? "ring-2 ring-green-400 shadow-lg shadow-green-400/70" : ""}
        ${isGameComplete ? "animate-win-glow" : ""}`}
      >

        {/* FRONT CARD */}
        <div className="absolute w-full h-full flex items-center justify-center rounded-xl
        bg-gradient-to-br from-blue-600 to-purple-700 shadow-lg backface-hidden">
          <FaQuestion className="text-white/70 text-xl" />
        </div>

        {/* BACK CARD */}
        <div className="absolute w-full h-full flex items-center justify-center rounded-xl
        bg-white shadow-md rotate-y-180 backface-hidden">
          <span className="animate-bounce-once text-3xl">
            <IconComponent style={{ color: card.color }} />
          </span>
        </div>

      </div>
    </div>
  );
}

export default Card;