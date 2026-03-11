import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Target, TrendingUp, Cpu } from "lucide-react";

const metrics = [
  {
    icon: Activity,
    label: "Real-Time Data",
    value: "< 50ms",
    desc: "Market data latency",
  },
  {
    icon: Target,
    label: "Accuracy",
    value: "99.4%",
    desc: "Signal precision rate",
  },
  {
    icon: TrendingUp,
    label: "Avg Return",
    value: "+28.6%",
    desc: "Across all portfolios",
  },
  {
    icon: Cpu,
    label: "AI Models",
    value: "12+",
    desc: "Proprietary algorithms",
  },
];

export default function DataDecisions() {
  return (
    <section id="data" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(74,108,247,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#4a6cf7" }}
          >
            Intelligence Built-In
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Make{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6b8aff 0%, #4a6cf7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Data-Driven
            </span>{" "}
            Decisions
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Our AI-powered analytics engine processes millions of data points
            every second, giving you insights that sharper traders use to stay
            ahead of the market.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {metrics.map(({ icon: Icon, label, value, desc }) => (
            <div
              key={label}
              className="rounded-2xl p-5 border flex flex-col gap-3 group hover:border-[#4a6cf7]/40 transition-colors"
              style={{
                background: "linear-gradient(160deg, #0c1230 0%, #080d24 100%)",
                borderColor: "rgba(74,108,247,0.12)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(74,108,247,0.12)",
                  border: "1px solid rgba(74,108,247,0.2)",
                }}
              >
                <Icon className="w-5 h-5" style={{ color: "#4a6cf7" }} />
              </div>
              <div>
                <div
                  className="text-2xl font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #6b8aff 0%, #4a6cf7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  {label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden border text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(74,108,247,0.15) 0%, rgba(59,92,230,0.08) 100%)",
            borderColor: "rgba(74,108,247,0.2)",
          }}
        >
          {/* Background dots */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Start Making Smarter Trades Today
            </h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Join thousands of traders {"who've"} switched to data-led decision
              making with MolyStock.
            </p>
            <Button
              size="lg"
              className="h-12 px-8 font-semibold rounded-full text-white mt-2"
              style={{
                background: "linear-gradient(135deg, #4a6cf7 0%, #3b5ce6 100%)",
                boxShadow: "0 8px 32px rgba(74,108,247,0.35)",
              }}
            >
              Explore Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
