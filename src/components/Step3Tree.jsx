import { motion } from "framer-motion";

const hearts = [
  ["20%", "25%", "💗"],
  ["35%", "18%", "💛"],
  ["50%", "27%", "💖"],
  ["65%", "17%", "💛"],
  ["80%", "28%", "💗"],
  ["28%", "38%", "💖"],
  ["48%", "40%", "💛"],
  ["70%", "40%", "💗"],
  ["38%", "50%", "💗"],
  ["60%", "51%", "💖"],
];

export default function Step3Tree({ data, onNext }) {
  return (
    <motion.div
      onClick={onNext}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex min-h-dvh cursor-pointer flex-col items-center justify-center overflow-hidden px-5 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-xs font-bold tracking-[0.3em] text-[#ffd166]">
          MAKE A WISH...
        </p>

        <h2 className="mt-4 text-2xl font-extrabold leading-tight">
          Happy Birthday
          <br />
          to someone worth celebrating 💕
        </h2>
      </motion.div>

      <div className="relative mt-8 h-[330px] w-full max-w-sm">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 240 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-0 left-1/2 w-6 -translate-x-1/2 rounded-t-full bg-gradient-to-r from-[#512b20] to-[#8c4b34]"
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-40 left-1/2 h-3 w-64 -translate-x-1/2 rotate-[25deg] rounded-full bg-[#663728]"
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="absolute bottom-44 left-1/2 h-3 w-60 -translate-x-1/2 -rotate-[30deg] rounded-full bg-[#663728]"
        />

        {hearts.map(([left, top, heart], index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1 + index * 0.08,
              type: "spring",
            }}
            className="absolute text-3xl"
            style={{ left, top }}
          >
            {heart}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        className="glass w-full rounded-3xl p-6"
      >
        <p className="text-xs font-bold tracking-[0.2em] text-[#ffd166]">
          IT'S OFFICIALLY YOUR DAY
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Happy Birthday, {data.recipient} 💖
        </h3>

        <p className="mt-2 text-sm text-white/50">
          and just like that, you're turning {data.age} ✨
        </p>

        <p className="mt-5 text-xs text-white/30">
          Tap anywhere to continue
        </p>
      </motion.div>
    </motion.div>
  );
}