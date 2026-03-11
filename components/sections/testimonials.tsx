import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Portfolio Manager",
    company: "Apex Investments",
    initials: "SJ",
    color: "#4a6cf7",
    rating: 5,
    text: "MolyStock completely transformed how I manage client portfolios. The real-time analytics and AI signals have increased our average returns by 28% over the past year. I wouldn't trade it for anything.",
  },
  {
    name: "Marco Delgado",
    role: "Founder & CEO",
    company: "TradeSmart Inc.",
    initials: "MD",
    color: "#8b5cf6",
    rating: 5,
    text: "As a serial entrepreneur, I've used dozens of dashboards. MolyStock is the first one that actually shows me everything I need — business metrics AND trading performance — in one place. Game-changing.",
  },
  {
    name: "Priya Nair",
    role: "Independent Trader",
    company: "Self-employed",
    initials: "PN",
    color: "#10b981",
    rating: 5,
    text: "The AI predictions are genuinely impressive. I was skeptical at first, but after following the signals for 3 months, I'm up 43%. The interface is clean, fast, and stress-free to use daily.",
  },
  {
    name: "David Chen",
    role: "Head of Finance",
    company: "Meridian Group",
    initials: "DC",
    color: "#f59e0b",
    rating: 5,
    text: "We switched our entire treasury operations to MolyStock. The risk analytics and automated rebalancing alone saved us 15 hours a week. The ROI was evident in the first month.",
  },
  {
    name: "Emily Rodriguez",
    role: "Day Trader",
    company: "Independent",
    initials: "ER",
    color: "#ef4444",
    rating: 5,
    text: "The speed is unreal — sub-50ms execution updates make a real difference in volatile markets. Plus the mobile app is just as powerful as the web version. First tool I open every morning.",
  },
  {
    name: "James Okafor",
    role: "Business Owner",
    company: "OkaforTech",
    initials: "JO",
    color: "#06b6d4",
    rating: 5,
    text: "Running an e-commerce business and managing investments simultaneously used to be a nightmare. MolyStock integrates both worlds beautifully. Revenue is up 3× and I have way less stress.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(74,108,247,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-1 mb-2">
            <StarRating count={5} />
            <span className="text-sm text-amber-400 font-semibold ml-1">
              4.9 / 5
            </span>
            <span className="text-slate-500 text-xs ml-2">
              from 2,400+ reviews
            </span>
          </div>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#4a6cf7" }}
          >
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            What Our Customers{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6b8aff 0%, #4a6cf7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Are Saying
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(
            ({ name, role, company, initials, color, rating, text }) => (
              <div
                key={name}
                className="rounded-2xl p-6 border flex flex-col gap-4 hover:border-opacity-40 transition-all"
                style={{
                  background:
                    "linear-gradient(160deg, #0c1230 0%, #080d24 100%)",
                  borderColor: "rgba(74,108,247,0.1)",
                }}
              >
                {/* Rating */}
                <StarRating count={rating} />

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed flex-1">
                  &ldquo;{text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${color}80, ${color}40)`,
                      border: `1px solid ${color}40`,
                    }}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {role} · {company}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
