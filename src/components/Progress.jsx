export default function Progress({ step }) {
  return (
    <div className="absolute left-1/2 top-5 z-50 flex -translate-x-1/2 gap-1.5">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className={`h-1 rounded-full transition-all duration-500 ${
            index + 1 <= step
              ? "w-6 bg-[#ff5e8e]"
              : "w-3 bg-white/20"
          }`}
        />
      ))}
    </div>
  );
}