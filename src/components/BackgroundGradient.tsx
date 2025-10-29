export default function BackgroundGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.65]">
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#3030ff]/20 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#ff4d73]/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#23ff9a]/10 blur-[140px]" />
    </div>
  );
}

