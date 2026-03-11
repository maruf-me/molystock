import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "Free 14-day trial",
  "No credit card required",
  "Setup in under 2 minutes",
  "Cancel anytime",
];

export default function CTABanner() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl px-8 py-16 sm:py-20 text-center overflow-hidden border"
          style={{
            background:
              "linear-gradient(135deg, #162050 0%, #0c1230 40%, #1a0d45 100%)",
            borderColor: "rgba(74,108,247,0.3)",
            boxShadow:
              "0 0 80px rgba(74,108,247,0.15), inset 0 0 80px rgba(74,108,247,0.05)",
          }}
        >
          {/* Background glow orbs */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(74,108,247,0.25)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(139,92,246,0.15)" }}
          />

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative space-y-6">
            <div className="space-y-2">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#6b8aff" }}
              >
                Start Today
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to Master
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #a5b4fc 0%, #6b8aff 50%, #4a6cf7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  the Markets?
                </span>
              </h2>
            </div>

            <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
              Join 40,000+ businesses and traders who use MolyStock to make
              smarter decisions and drive real results every single day.
            </p>

            {/* Perks */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs text-slate-300">{perk}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                size="lg"
                className="h-13 px-9 font-bold rounded-full text-white text-base"
                style={{
                  background:
                    "linear-gradient(135deg, #4a6cf7 0%, #3b5ce6 100%)",
                  boxShadow: "0 8px 40px rgba(74,108,247,0.5)",
                  height: "52px",
                }}
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-13 px-8 font-semibold rounded-full text-slate-200 border-white/15 bg-white/5 hover:bg-white/10 hover:text-white"
                style={{ height: "52px" }}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
