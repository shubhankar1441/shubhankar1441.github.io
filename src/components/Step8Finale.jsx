import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function Step8Finale({ data, onReplay }) {
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 70,
        spread: 100,
        startVelocity: 35,
        origin: {
          x: Math.random(),
          y: 0.2 + Math.random() * 0.3,
        },
      });
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-5 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          type: "spring",
        }}
      >
        <div className="mb-6 text-7xl">🎂</div>

        <motion.h1
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="bg-gradient-to-r from-[#ff5e8e] via-[#ffd166] to-[#ff8ab3] bg-clip-text text-5xl font-black leading-[1.05] text-transparent"
        >
          HAPPY
          <br />
          BIRTHDAY
          <br />
          {data.recipient.toUpperCase()}!
        </motion.h1>

        <div className="glass glow mt-10 rounded-3xl p-6">
          <p className="text-sm text-white/70">
            Made with love, just for you —
          </p>

          <p className="mt-2 text-lg font-bold text-[#ff8aae]">
            {data.sender} 💖
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onReplay}
          className="mt-7 min-h-12 rounded-xl bg-white/10 px-7 text-sm font-bold"
        >
          Replay the Preview 🎬
        </motion.button>
      </motion.div>
    </div>
  );
}