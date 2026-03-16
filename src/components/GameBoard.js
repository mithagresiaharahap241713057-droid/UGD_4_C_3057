import React from "react";
import Card from "./Card";

function GameBoard({ cards, flippedCards, matchedCards, onFlip }) {
        const isGameComplete = matchedCards.length === cards.length;
        return (
                <div className="grid grid-cols-4 gap-4 justify-center">
                        {cards.map((card) => (
                                <Card
                                          key={card.id}
                                          card={card}
                                          isFlipped={flippedCards.includes(card.id)}
                                          isMatched={matchedCards.includes(card.id)}
                                          isGameComplete={isGameComplete}
                                          onFlip={onFlip}
                                />
                        ))}
                </div>
        );
}
  
export default GameBoard;