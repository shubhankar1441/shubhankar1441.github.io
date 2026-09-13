import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function Step4Cake({ data, onNext }) {
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLit(true);

      confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.6 },
      });
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={lit ? onNext : undefined}
      className="relative flex min-h-dvh cursor-pointer flex-col items-center justify-center px-5 text-center"
    >
      <p className="text-sm font-bold tracking-[0.25em] text-white/50">
        FIRST THINGS FIRST 🎂
      </p>

      {!lit && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-5 text-white/70"
        >
          Baking something sweet...
        </motion.p>
      )}

      <div className="relative mt-12 w-64">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-20 rounded-2xl bg-gradient-to-b from-[#ff91ad] to-[#ff5e8e] shadow-[0_20px_50px_rgba(255,94,142,0.25)]"
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mx-auto -mt-2 h-16 w-[85%] rounded-xl bg-[#ffd1dc]"
        />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute -top-9 left-1/2 h-10 w-2 -translate-x-1/2 rounded-full bg-[#ffd166]"
        />

        {lit && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 text-3xl"
          >
            🔥
          </motion.div>
        )}
      </div>

      {lit && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold">
            Happy Birthday, {data.recipient}! 🎂
          </h2>

          <p className="mt-2 text-white/60">
            Make a wish 🕯️
          </p>

          <p className="mt-8 text-xs text-white/30">
            Tap anywhere to continue
          </p>
        </motion.div>
      )}
    </div>
  );
}