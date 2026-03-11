import {
  Zap,
  BarChart3,
  Bell,
  Shield,
  Repeat2,
  Globe,
  Cpu,
  Layers,
  PieChart,
  Target,
  Smartphone,
  Webhook,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Execution",
    desc: "Execute trades in milliseconds with our ultra-low latency infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Advanced Charting",
    desc: "50+ chart types, drawing tools, and technical indicators at your fingertips.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    desc: "Set price, volume, or signal-based alerts that notify you across all devices.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    desc: "256-bit encryption, 2FA, and SOC 2 Type II compliance keep your data safe.",
  },
  {
    icon: Repeat2,
    title: "Auto-Rebalancing",
    desc: "AI-powered portfolio rebalancing automatically keeps your allocations on target.",
  },
  {
    icon: Globe,
    title: "Global Markets",
    desc: "Access stocks, crypto, forex, and commodities from 40+ exchanges worldwide.",
  },
  {
    icon: Cpu,
    title: "AI Predictions",
    desc: "Machine learning models trained on 15 years of market data power your decisions.",
  },
  {
    icon: Layers,
    title: "Strategy Builder",
    desc: "Build, backtest, and deploy custom trading strategies with zero code required.",
  },
  {
    icon: PieChart,
    title: "Risk Analytics",
    desc: "Understand portfolio exposure with real-time risk scoring and stress testing.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    desc: "Set financial goals and watch your automated plan execute toward them daily.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "Full-featured native iOS and Android apps that sync instantly with the web.",
  },
  {
    icon: Webhook,
    title: "Open API",
    desc: "RESTful API and webhooks integrate MolyStock with any tool in your stack.",
  },
];

export default function FeaturesGrid() {
  return (
    <section
      id="features-grid"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(74,108,247,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#4a6cf7" }}
          >
            The Full Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Features That Keep You{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6b8aff 0%, #4a6cf7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ahead
            </span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Everything professional traders and business owners need to
            outperform the market and scale their operations — built into one
            platform.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl p-6 border hover:border-[#4a6cf7]/30 transition-all hover:-translate-y-0.5 cursor-default"
              style={{
                background: "linear-gradient(160deg, #0c1230 0%, #080d24 100%)",
                borderColor: "rgba(74,108,247,0.1)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                style={{
                  background: "rgba(74,108,247,0.12)",
                  border: "1px solid rgba(74,108,247,0.2)",
                }}
              >
                <Icon className="w-5 h-5" style={{ color: "#4a6cf7" }} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
