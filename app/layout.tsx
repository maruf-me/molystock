import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/brand.png",
    apple: "/apple-touch-icon.png",
  },
  title: "MolyStock — Run Your Entire Business From One Smart Dashboard",
  description:
    "MolyStock helps business owners and traders manage their entire operation from a single, intelligent dashboard. Real-time data, AI insights, and powerful analytics.",
  keywords: ["dashboard", "business", "stock", "trading", "analytics", "SaaS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#050918", color: "#f1f5f9" }}
      >
        {children}
      </body>
    </html>
  );
}
