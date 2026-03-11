const results = [
  {
    id: 1,
    title: "Save Time, Make More",
    desc: "Automation cuts 12+ hrs of manual analysis per week",
    bg: "from-[#1a1040] to-[#0a0820]",
    accentColor: "#8b5cf6",
    icon: "🕐",
    stat: "12 hrs/week saved",
  },
  {
    id: 2,
    title: "Real-Time Market Edge",
    desc: "Sub-50ms data feeds keep you ahead of the market",
    bg: "from-[#0a1a30] to-[#050918]",
    accentColor: "#4a6cf7",
    icon: "⚡",
    stat: "< 50ms latency",
  },
  {
    id: 3,
    title: "Scale Your Store",
    desc: "Integrated e-commerce analytics for product-led growth",
    bg: "from-[#1a1200] to-[#0d0c00]",
    accentColor: "#f59e0b",
    icon: "🏪",
    stat: "3× revenue growth",
  },
  {
    id: 4,
    title: "Full Control, No Limits",
    desc: "Enterprise-grade security without the enterprise price tag",
    bg: "from-[#001a15] to-[#000d0a]",
    accentColor: "#10b981",
    icon: "🔒",
    stat: "99.9% uptime SLA",
  },
];

export default function RealResults() {
  return (
    <section id="results" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#4a6cf7" }}
          >
            Proven Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Real Results for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6b8aff 0%, #4a6cf7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real Business Owners
            </span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Our users consistently report transformative improvements in their
            business outcomes within the first 90 days.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {results.map(({ id, title, desc, bg, accentColor, icon, stat }) => (
            <div
              key={id}
              className={`relative rounded-2xl overflow-hidden border group hover:border-opacity-40 transition-all hover:-translate-y-0.5`}
              style={{
                background: `linear-gradient(160deg, ${bg.replace("from-", "").replace(" to-", ", ")})`,
                borderColor: `${accentColor}22`,
              }}
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                }}
              />

              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{icon}</span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: `${accentColor}18`,
                      color: accentColor,
                      border: `1px solid ${accentColor}30`,
                    }}
                  >
                    {stat}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>

                {/* Decorative bottom pattern */}
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 opacity-5 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
