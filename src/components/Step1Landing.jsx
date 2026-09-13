import { motion } from "framer-motion";
import { Gift, Volume2 } from "lucide-react";

export default function Step1Landing({ data, onNext }) {
  return (
    <div className="relative flex min-h-dvh items-center justify-center px-5 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass glow w-full rounded-[32px] px-6 py-12"
      >
        <motion.div
          animate={{
            rotate: [0, -8, 8, -5, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-3xl bg-[#ff5e8e]/10 text-6xl"
        >
          🎁
        </motion.div>

        <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#ffd166]">
          A LITTLE SURPRISE
        </p>

        <h1 className="text-3xl font-extrabold leading-tight">
          A SURPRISE FOR
          <span className="mt-1 block text-[#ff5e8e]">
            {data.recipient}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-white/60">
          {data.sender} made this — just for you. 💕
        </p>

        <motion.button
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.03 }}
          onClick={onNext}
          className="pulse-glow mt-9 flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#ff5e8e] px-6 text-base font-bold text-white"
        >
          <Gift size={22} />
          OPEN IT
        </motion.button>

        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-white/40">
          <Volume2 size={15} />
          Sound on for the full magic
        </div>
      </motion.div>
    </div>
  );
}