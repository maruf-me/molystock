import {
  CheckCircle2,
  LayoutDashboard,
  TrendingUp,
  BarChart3,
  Bell,
  Users,
  Zap,
  Shield,
} from "lucide-react";

const features = [
  { icon: LayoutDashboard, label: "Unified Dashboard" },
  { icon: TrendingUp, label: "Real-Time Portfolio Tracking" },
  { icon: BarChart3, label: "Advanced Market Analytics" },
  { icon: Bell, label: "Intelligent Price Alerts" },
  { icon: Users, label: "Team Collaboration Tools" },
  { icon: Zap, label: "Automated Trading Signals" },
  { icon: Shield, label: "Bank-Grade Security" },
];

export default function FeaturesOverview() {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(74,108,247,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Feature List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#4a6cf7" }}
              >
                Everything You Need
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Every Corner of Your Business,{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #6b8aff 0%, #4a6cf7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Covered
                </span>
              </h2>
              <p className="text-slate-400 leading-relaxed">
                From trade execution to business intelligence, MolyStock
                provides every tool a modern business owner needs to monitor,
                manage, and grow.
              </p>
            </div>

            <ul className="space-y-3">
              {features.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 group">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                    style={{
                      background: "rgba(74,108,247,0.12)",
                      border: "1px solid rgba(74,108,247,0.2)",
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#4a6cf7" }} />
                  </div>
                  <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                    {label}
                  </span>
                  <CheckCircle2 className="w-4 h-4 ml-auto text-emerald-500 flex-shrink-0" />
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Product card mockup */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse, #4a6cf7 0%, transparent 70%)",
              }}
            />
            <div
              className="relative rounded-2xl p-6 border space-y-5"
              style={{
                background: "linear-gradient(160deg, #0c1230 0%, #080d24 100%)",
                borderColor: "rgba(74,108,247,0.18)",
                boxShadow: "0 20px 60px rgba(74,108,247,0.12)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Business Overview
                  </h3>
                  <p className="text-xs text-slate-500">Updated just now</p>
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    color: "#10b981",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                >
                  Live
                </span>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Revenue", value: "$84.3k", trend: "+8.1%" },
                  { label: "Trades", value: "1,240", trend: "+23%" },
                  { label: "Users", value: "3,480", trend: "+14%" },
                ].map(({ label, value, trend }) => (
                  <div
                    key={label}
                    className="rounded-xl p-3 text-center border"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderColor: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-xs text-slate-500 mb-1">{label}</div>
                    <div className="text-sm font-bold text-white">{value}</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">
                      {trend}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="space-y-3">
                {[
                  { label: "Equities", pct: 72, color: "#4a6cf7" },
                  { label: "Crypto", pct: 48, color: "#8b5cf6" },
                  { label: "Commodities", pct: 31, color: "#f59e0b" },
                ].map(({ label, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-400">{label}</span>
                      <span className="text-white font-medium">{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, background: color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom insight */}
              <div
                className="flex items-center gap-3 rounded-xl p-3 border"
                style={{
                  background: "rgba(74,108,247,0.08)",
                  borderColor: "rgba(74,108,247,0.2)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(74,108,247,0.2)" }}
                >
                  <Zap className="w-4 h-4 text-[#4a6cf7]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">AI Insight</p>
                  <p className="text-xs text-slate-400">
                    Portfolio up 12.4% vs market avg. Rebalance suggested.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
