import React from "react";
import { FaQuestion } from "react-icons/fa";

function Card({ card, isFlipped, isMatched, onFlip }) {

  const handleClick = () => {
    // Jangan lakukan apa-apa jika kartu sudah terbuka atau sudah match
    if (isFlipped || isMatched) return;

    onFlip(card.id);
  };

  const isOpen = isFlipped || isMatched;
  const IconComponent = card.icon;

  return (
    <div
      onClick={handleClick}
      className={`
        w-20 h-20
        flex items-center justify-center
        text-3xl
        rounded-xl
        cursor-pointer
        transition-all duration-300
        ${isOpen
          ? "bg-white text-black"
          : "bg-purple-500 hover:bg-purple-400 text-white"}
      `}
    >
      {isOpen ? (
        <IconComponent style={{ color: card.color }} />
      ) : (
        <FaQuestion />
      )}
    </div>
  );
}

export default Card;