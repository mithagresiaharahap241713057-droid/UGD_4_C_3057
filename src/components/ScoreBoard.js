import React from 'react';
import { FaClock, FaMousePointer, FaCheck, FaSyncAlt, FaRedo } from "react-icons/fa";

// Komponen untuk menampilkan skor permainan dan tombol reset
// props:
// - moves: jumlah percobaan yang sudah dilakukan
// - matchedCount: jumlah pasangan yang sudah berhasil dicocokkan
// - totalPairs: total pasangan kartu yang harus dicocokkan
// - time: waktu bermain
// - onReset: fungsi untuk mereset permainan
function ScoreBoard({ moves, matchedCount, totalPairs, time, onReset }) {
  // Cek apakah semua pasangan sudah ditemukan
  const isGameComplete = matchedCount === totalPairs;

  // Format waktu menjadi menit:detik
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="text-center mb-6">
      {/* Tampilkan waktu, jumlah percobaan dan pasangan yang ditemukan */}
      <div className="flex justify-center gap-8 mb-4">

        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
          <p className="text-sm text-indigo-200 flex items-center justify-center gap-1">
            <FaClock className="text-indigo-300" /> Waktu
          </p>
          <p className="text-2xl font-bold text-white">{formattedTime}</p>
        </div>

        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
          <p className="text-sm text-indigo-200 flex items-center justify-center gap-1">
            <FaMousePointer className="text-indigo-300" /> Percobaan
          </p>
          <p className="text-2xl font-bold text-white">{moves}</p>
        </div>

        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
          <p className="text-sm text-indigo-200 flex items-center justify-center gap-1">
            <FaCheck className="text-indigo-300" /> Ditemukan
          </p>
          <p className="text-2xl font-bold text-white">{matchedCount}/{totalPairs}</p>
        </div>

      </div>

      {/* Pesan selamat jika semua pasangan ditemukan */}
      {isGameComplete && (
  <div className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400/30 via-pink-400/30 to-purple-500/30 backdrop-blur-md border border-white/20 shadow-lg shadow-purple-500/30 animate-pulse">
    <span className="animate-text-blink">
      🎉 Selamat! Selesai dalam waktu {time} detik dengan {moves} percobaan.
    </span>{" "}
  </div>
)}

      {/* Tombol untuk mereset permainan */}
      <button
        onClick={onReset}
        className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold shadow-lg flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-110 hover:shadow-purple-400/70"
      >
        {isGameComplete ? <FaRedo /> : <FaSyncAlt />}
        {isGameComplete ? "Main Lagi" : "Acak Ulang"}
      </button>
    </div>
  );
}

export default ScoreBoard;