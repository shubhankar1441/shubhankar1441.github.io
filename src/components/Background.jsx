import { motion } from "framer-motion";

export default function Background() {
  const stars = Array.from({ length: 45 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[#0d0614]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#301447_0%,#180b25_38%,#0d0614_75%)]" />

      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="star absolute h-[3px] w-[3px] rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-pink-500/10 blur-[100px]" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />
    </div>
  );
}