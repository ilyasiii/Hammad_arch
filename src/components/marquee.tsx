export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="hairline overflow-hidden py-6">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {loop.map((it, i) => (
          <span key={i} className="font-display flex items-center gap-12 text-3xl md:text-5xl">
            {it}
            <span className="text-clay">✶</span>
          </span>
        ))}
      </div>
    </div>
  );
}
