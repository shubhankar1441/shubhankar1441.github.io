import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Step2Bow({ onNext }) {
  const [released, setReleased] = useState(false);

  const handleRelease = (_, info) => {
    if (Math.abs(info.offset.x) > 35 || Math.abs(info.offset.y) > 35) {
      setReleased(true);

      setTimeout(() => {
        onNext();
      }, 1000);
    }
  };

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-5 text-center">
      <p className="mb-10 text-sm font-semibold tracking-[0.25em] text-white/50">
        A LITTLE SOMETHING,
        <br />
        FOR YOU
      </p>

      <motion.div
        animate={
          released
            ? { scale: [1, 1.4, 0], opacity: [1, 1, 0] }
            : { scale: [1, 1.08, 1] }
        }
        transition={{
          duration: released ? 0.8 : 2,
          repeat: released ? 0 : Infinity,
        }}
        className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[#ff5e8e]/10"
      >
        <div className="text-7xl">💗</div>

        <div className="absolute inset-0 rounded-full border border-[#ff5e8e]/30" />
      </motion.div>

      <div className="absolute bottom-20 left-7 right-7">
        <motion.div
          drag
          dragConstraints={{
            left: -90,
            right: 10,
            top: -100,
            bottom: 10,
          }}
          dragElastic={0.25}
          onDragEnd={handleRelease}
          whileTap={{ scale: 1.1 }}
          animate={
            released
              ? { x: 260, y: -350, rotate: 35 }
              : { x: 0, y: 0 }
          }
          className="relative z-20 flex h-20 w-20 cursor-grab touch-none items-center justify-center rounded-full bg-white/10 text-5xl active:cursor-grabbing"
        >
          🏹
        </motion.div>

        <div className="absolute bottom-9 left-20 right-5 border-t border-dashed border-white/20" />

        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.25em] text-white/40">
          <ArrowUpRight size={16} />
          PULL & RELEASE
        </div>
      </div>
    </div>
  );
}