import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  ArrowRight,
  TrendingUp,
  PieChart,
  BarChart2,
  DollarSign,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% -5%, rgba(74,108,247,0.25) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(74,108,247,0.4), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <Badge
              className="self-start px-4 py-1.5 text-xs font-semibold rounded-full border"
              style={{
                background: "rgba(74,108,247,0.12)",
                borderColor: "rgba(74,108,247,0.35)",
                color: "#6b8aff",
              }}
            >
              🚀 Trusted by 40,000+ Businesses Worldwide
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] text-white tracking-tight">
              Run Your{" "}
              <span
                className="text-gradient-blue"
                style={{
                  background:
                    "linear-gradient(135deg, #6b8aff 0%, #4a6cf7 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Entire Business
              </span>{" "}
              From One Smart Dashboard
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              MolyStock brings real-time analytics, AI-driven insights,
              portfolio management, and business intelligence into a single,
              powerful platform. Stop switching between tools.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="h-12 px-7 font-semibold rounded-full text-white text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #4a6cf7 0%, #3b5ce6 100%)",
                  boxShadow: "0 8px 32px rgba(74, 108, 247, 0.4)",
                }}
              >
                Start For Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-7 font-semibold rounded-full text-sm text-slate-300 border-white/15 bg-white/5 hover:bg-white/10 hover:text-white"
              >
                <Play className="mr-2 w-4 h-4 fill-current" />
                Watch Demo
              </Button>
            </div>

            <p className="text-xs text-slate-500">
              No credit card required · Cancel anytime · Setup in 2 minutes
            </p>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow behind card */}
            <div
              className="absolute inset-0 rounded-2xl blur-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse, #4a6cf7 0%, transparent 70%)",
              }}
            />
            <div
              className="relative w-full max-w-[580px] rounded-2xl overflow-hidden border"
              style={{
                background: "linear-gradient(160deg, #0c1230 0%, #080d24 100%)",
                borderColor: "rgba(74,108,247,0.2)",
                boxShadow:
                  "0 24px 80px rgba(74,108,247,0.2), 0 0 0 1px rgba(74,108,247,0.08)",
              }}
            >
              {/* Dashboard Header */}
              <div
                className="px-5 py-3 flex items-center gap-2 border-b"
                style={{
                  background: "rgba(74,108,247,0.06)",
                  borderColor: "rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <span className="flex-1 text-center text-xs text-slate-500">
                  MolyStock Dashboard
                </span>
              </div>

              {/* Dashboard body */}
              <div className="p-5 space-y-4">
                {/* Metric cards */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: TrendingUp,
                      label: "Portfolio Value",
                      value: "$248,350",
                      change: "+12.4%",
                      color: "#4a6cf7",
                    },
                    {
                      icon: DollarSign,
                      label: "Monthly Revenue",
                      value: "$84,290",
                      change: "+8.1%",
                      color: "#10b981",
                    },
                    {
                      icon: PieChart,
                      label: "Asset Allocation",
                      value: "14 Assets",
                      change: "Balanced",
                      color: "#f59e0b",
                    },
                    {
                      icon: BarChart2,
                      label: "Win Rate",
                      value: "73.2%",
                      change: "+2.4%",
                      color: "#8b5cf6",
                    },
                  ].map(({ icon: Icon, label, value, change, color }) => (
                    <div
                      key={label}
                      className="rounded-xl p-3.5 border"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-500">{label}</span>
                        <div
                          className="w-6 h-6 rounded-md flex items-center justify-center"
                          style={{ background: `${color}22` }}
                        >
                          <Icon className="w-3 h-3" style={{ color }} />
                        </div>
                      </div>
                      <div className="text-sm font-bold text-white">
                        {value}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: "#10b981" }}
                      >
                        {change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart bar simulation */}
                <div
                  className="rounded-xl p-4 border"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-slate-300">
                      Performance Overview
                    </span>
                    <span className="text-xs text-slate-500">Last 7 days</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm transition-all"
                        style={{
                          height: `${h}%`,
                          background:
                            i === 5
                              ? "linear-gradient(180deg, #4a6cf7 0%, #3b5ce6 100%)"
                              : "rgba(74,108,247,0.25)",
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1.5">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (d) => (
                        <span key={d} className="text-[10px] text-slate-600">
                          {d}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Recent activity */}
                <div className="space-y-2">
                  {[
                    {
                      symbol: "AAPL",
                      action: "Buy",
                      price: "$178.34",
                      pnl: "+3.2%",
                    },
                    {
                      symbol: "TSLA",
                      action: "Sell",
                      price: "$242.80",
                      pnl: "+12.1%",
                    },
                    {
                      symbol: "NVDA",
                      action: "Buy",
                      price: "$495.20",
                      pnl: "+7.8%",
                    },
                  ].map(({ symbol, action, price, pnl }) => (
                    <div
                      key={symbol}
                      className="flex items-center justify-between px-3 py-2 rounded-lg border"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        borderColor: "rgba(255,255,255,0.05)",
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                          style={{ background: "rgba(74,108,247,0.25)" }}
                        >
                          {symbol[0]}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">
                            {symbol}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            {action}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-white">{price}</div>
                        <div className="text-[10px] text-emerald-400">
                          {pnl}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
