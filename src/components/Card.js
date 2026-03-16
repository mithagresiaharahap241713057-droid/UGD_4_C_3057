import React from 'react';
import { FaQuestion } from 'react-icons/fa';

function Card({ card, isFlipped, isMatched, isGameComplete, onFlip }) {

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
      className="w-20 h-20 cursor-pointer transition-all duration-300 perspective animate-[pop_0.4s_ease]"
      >

      <div
        className={`relative w-full h-full transform-style transition-transform duration-500
        ${isOpen ? 'rotate-y-180' : ''}`}
      >

        <div
        className={`backface-hidden absolute w-full h-full flex items-center justify-center text-3xl rounded-xl select-none
          transition-all duration-300 transform
          hover:scale-110 hover:rotate-1 hover:shadow-xl hover:shadow-purple-400/70
          bg-gradient-to-br from-blue-600 to-purple-700 shadow-lg`}
        >
          <FaQuestion className="text-white/70 text-xl" />
        </div>

        <div
          className={`backface-hidden rotate-y-180 absolute w-full h-full flex items-center justify-center text-3xl rounded-xl select-none
          transition-all duration-300 transform
          hover:scale-110 hover:shadow-xl hover:shadow-purple-400/70
          bg-white shadow-md
          ${isMatched ? 'opacity-60 shadow-md shadow-green-400/40' : ''}
          ${isGameComplete ? 'animate-win-glow' : ''}`}
        >
          {isOpen && (
            <span className="animate-bounce-once">
              <IconComponent style={{ color: card.color }} />
            </span>
          )}
        </div>

      </div>

    </div>
  );
}

export default Card;