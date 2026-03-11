import Link from "next/link";
import { BarChart3, Twitter, Linkedin, Github, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Analytics", href: "#data" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Individual Traders", href: "#" },
      { label: "Business Owners", href: "#" },
      { label: "Portfolio Managers", href: "#" },
      { label: "Financial Advisors", href: "#" },
      { label: "Enterprise", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "rgba(74,108,247,0.1)",
        background: "linear-gradient(180deg, #050918 0%, #040714 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#4a6cf7] flex items-center justify-center">
                <BarChart3
                  className="w-4.5 h-4.5 text-white"
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Moly<span className="text-[#4a6cf7]">Stock</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
              Run your entire business from one intelligent dashboard.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-[#4a6cf7]/20 hover:text-[#4a6cf7]"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    color: "#64748b",
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-500 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator style={{ background: "rgba(255,255,255,0.06)" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} MolyStock, Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
