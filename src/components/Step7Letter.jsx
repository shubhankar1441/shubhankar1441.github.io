import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Step7Letter({ data, onNext }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col items-center overflow-hidden px-5 pb-8 pt-20">
      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-[#ffd166]">
          ONE LAST THING, {data.recipient.toUpperCase()}...
        </p>

        <h2 className="mt-3 text-xl font-bold">
          {data.sender} wrote you a letter. ✉️
        </h2>
      </div>

      <div className="relative mt-16 w-full max-w-sm">
        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="relative z-20 mx-auto block h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#9c4262] to-[#5d2446] shadow-2xl"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Mail size={40} />

                <p className="mt-4 text-sm font-semibold">
                  Tap to open your letter
                </p>
              </div>

              <div className="absolute bottom-0 left-0 border-b-[90px] border-l-[180px] border-r-[180px] border-b-[#7b3150] border-l-transparent border-r-transparent" />
            </motion.button>
          )}
        </AnimatePresence>

        {open && (
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 18 }}
            className="relative max-h-[65vh] overflow-y-auto rounded-2xl bg-[#fff8e9] p-6 text-[#3c2732] shadow-2xl"
          >
            <div className="absolute -top-4 left-1/2 h-8 w-24 -translate-x-1/2 rotate-[-3deg] bg-[#e9cda4]/80" />

           <h3 className="handwritten text-center text-5xl text-[#c43d69]">
  To my Khushi 💗
</h3>

            <div className="cormorant mt-6 whitespace-pre-line text-[19px] font-medium leading-7">
              {data.letter}
            </div>

            <div className="mt-8 text-center">
              <p className="handwritten text-2xl">
                Forever yours,
              </p>

              <p className="handwritten text-3xl text-[#c43d69]">
                {data.sender} ❤️
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {open && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onNext}
          className="mt-6 min-h-12 rounded-xl bg-[#ff5e8e] px-8 font-bold"
        >
          Continue 💖
        </motion.button>
      )}
    </div>
  );
}