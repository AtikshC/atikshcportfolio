const items = [
  "AI Research @ BMO",
  "★",
  "Based in Toronto",
  "★",
  "AWS Certified ×2",
  "★",
  "Full-Stack · ML · Voice AI",
  "★",
  "Ivey HBA + Western CS",
  "★",
];

const Marquee = () => {
  return (
    <div className="border-y-[3px] border-ink bg-ink text-background overflow-hidden">
      <div className="flex gap-10 py-3 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display italic text-2xl md:text-3xl">{t}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
};

export default Marquee;
