"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BarChart3 } from "lucide-react";
import { useAppStore } from "@/store/use-app-store";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#data", label: "Analytics" },
  { href: "#results", label: "Results" },
  { href: "#features-grid", label: "Tools" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const { mobileMenuOpen, setMobileMenuOpen } = useAppStore();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md"
      style={{ backgroundColor: "rgba(5, 9, 24, 0.85)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#4a6cf7] flex items-center justify-center glow-blue-sm">
              <BarChart3 className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Moly<span className="text-[#4a6cf7]">Stock</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/5 text-sm h-9"
            >
              Log In
            </Button>
            <Button
              className="h-9 px-5 text-sm font-semibold text-white rounded-full"
              style={{
                background: "linear-gradient(135deg, #4a6cf7 0%, #3b5ce6 100%)",
                boxShadow: "0 4px 20px rgba(74, 108, 247, 0.35)",
              }}
            >
              Get Started Free
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-white/5"
              style={{ backgroundColor: "#080d24" }}
            >
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-md text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/5">
                  <Button
                    variant="ghost"
                    className="justify-start text-slate-300 hover:text-white"
                  >
                    Log In
                  </Button>
                  <Button
                    className="text-white font-semibold rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #4a6cf7 0%, #3b5ce6 100%)",
                    }}
                  >
                    Get Started Free
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
