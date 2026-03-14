import React from "react";

function ScoreBoard({ moves, matchedCount, totalPairs, onReset }) {
  const isGameComplete = matchedCount === totalPairs;

  return (
    <div className="text-center mb-4">
      <h1 className="text-3xl font-bold mb-3">
        🧠 Memory Card
      </h1>

      <p className="text-lg">
        Percobaan: {moves}
      </p>

      <p className="text-lg mb-2">
        Pasangan: {matchedCount}/{totalPairs}
      </p>

      {isGameComplete && (
        <p className="text-yellow-300 font-bold mb-2">
          🎉 Selamat! Kamu menang!
        </p>
      )}

      <button
        onClick={onReset}
        className="bg-yellow-400 hover:bg-yellow-500 transition px-4 py-2 rounded-lg text-black font-semibold"
      >
        🔄 Acak Ulang
      </button>
    </div>
  );
}

export default ScoreBoard;