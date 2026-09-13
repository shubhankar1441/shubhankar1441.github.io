import { motion } from "framer-motion";
import { useState } from "react";

export default function Step6Memories({ data, onNext }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < data.memories.length - 1) {
      setIndex((i) => i + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
    }
  };

  const memory = data.memories[index];

  return (
    <div className="flex min-h-dvh flex-col items-center px-5 pb-8 pt-20">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold">
          A walk down memory lane 📸
        </h2>

        <p className="mt-2 text-xs text-white/40">
          swipe through 🤏
        </p>
      </div>

      <div className="relative mt-10 flex h-[440px] w-full max-w-sm items-center justify-center">
        <motion.div
          key={index}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) next();
            if (info.offset.x > 60) prev();
          }}
          initial={{ opacity: 0, x: 60, rotate: memory.rotate }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: memory.rotate,
          }}
          exit={{ opacity: 0 }}
          whileTap={{ scale: 0.97 }}
          className="relative w-[290px] cursor-grab touch-pan-y bg-white p-4 pb-7 text-black shadow-2xl active:cursor-grabbing"
        >
          <div className="absolute -top-3 left-1/2 z-10 h-7 w-20 -translate-x-1/2 rotate-[-3deg] bg-[#f5d7a7]/80" />

          <div className="aspect-[4/5] overflow-hidden bg-gray-200">
            <img
              src={memory.image}
              alt={memory.caption}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="caveat mt-4 text-center text-2xl">
            {memory.caption}
          </p>

          <p className="mt-1 text-center text-xs text-black/40">
            {memory.date}
          </p>
        </motion.div>
      </div>

      <div className="flex items-center gap-2">
        {data.memories.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "w-6 bg-[#ff5e8e]"
                : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mt-7 min-h-12 rounded-xl bg-white/10 px-8 text-sm font-bold backdrop-blur"
      >
        Keep going ✨
      </motion.button>
    </div>
  );
}