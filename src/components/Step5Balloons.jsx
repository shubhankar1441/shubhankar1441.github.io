import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";

const balloonColors = [
  "bg-pink-400",
  "bg-purple-400",
  "bg-yellow-300",
  "bg-rose-400",
  "bg-fuchsia-400",
];

export default function Step5Balloons({ data, onNext }) {
  const [popped, setPopped] = useState([]);

  const popBalloon = (index) => {
    if (popped.includes(index)) return;

    setPopped((prev) => [...prev, index]);

    confetti({
      particleCount: 18,
      spread: 45,
      startVelocity: 20,
      origin: {
        x: 0.5,
        y: 0.4,
      },
    });
  };

  const completed = popped.length === data.reasons.length;

  return (
    <div className="relative min-h-dvh overflow-hidden px-5 pb-10 pt-20">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold">
          Pop the balloons 🎈
        </h2>

        <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-white/50">
          5 balloons. Each one holds a reason you're loved.
          Pop them all 💕
        </p>
      </div>

      <div className="relative mx-auto mt-8 h-72 max-w-sm">
        {data.reasons.map((_, index) => {
          const positions = [
            ["8%", "20%"],
            ["27%", "5%"],
            ["47%", "22%"],
            ["67%", "4%"],
            ["83%", "25%"],
          ];

          const [left, top] = positions[index];

          return (
            <motion.button
              key={index}
              onClick={() => popBalloon(index)}
              initial={{ y: 0 }}
              animate={{
                y: [0, -15, 0],
                scale: popped.includes(index)
                  ? [1, 1.3, 0]
                  : 1,
              }}
              transition={{
                y: {
                  duration: 2.5 + index * 0.2,
                  repeat: Infinity,
                },
                scale: {
                  duration: 0.35,
                },
              }}
              style={{
                left,
                top,
              }}
              className={`absolute flex h-20 w-16 min-w-[48px] items-center justify-center rounded-[50%] ${balloonColors[index]} text-2xl shadow-[0_10px_35px_rgba(255,94,142,0.25)]`}
            >
              💕
            </motion.button>
          );
        })}
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {data.reasons.map(
            (reason, index) =>
              popped.includes(index) && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass rounded-2xl p-5"
                >
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#ffd166]">
                    {reason.title}
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6">
                    {reason.text}
                  </p>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {completed && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <p className="text-sm italic text-white/50">
            ...and a thousand more reasons 💖
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="mt-5 min-h-12 rounded-xl bg-[#ff5e8e] px-7 font-bold"
          >
            Continue ✨
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}