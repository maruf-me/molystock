const stats = [
  { value: "700k+", label: "Active Users", sub: "Across all platforms" },
  { value: "30+", label: "Countries", sub: "Global reach" },
  { value: "1k+", label: "Integrations", sub: "Connect any tool" },
  { value: "40k+", label: "Businesses", sub: "Trust MolyStock" },
];

export default function StatsBar() {
  return (
    <section
      className="border-y"
      style={{
        background:
          "linear-gradient(90deg, #080d24 0%, #0c1230 50%, #080d24 100%)",
        borderColor: "rgba(74,108,247,0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
          {stats.map(({ value, label, sub }, i) => (
            <div
              key={i}
              className="py-8 px-6 flex flex-col items-center text-center group hover:bg-white/2 transition-colors"
            >
              <span
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-1"
                style={{
                  background:
                    "linear-gradient(135deg, #6b8aff 0%, #4a6cf7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </span>
              <span className="text-sm font-semibold text-white">{label}</span>
              <span className="text-xs text-slate-500 mt-0.5">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
