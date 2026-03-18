import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Davis Lawn Service | OKC Elite Turf",
  description: "Professional lawn maintenance and tactical yard warfare in Oklahoma City.",
  openGraph: {
    title: "Davis Lawn Service",
    description: "Multi-unit dispatch for premium lawn care.",
    images: [
      {
        url: "/DAVIS.png", // Ensure this is in your /public folder
        width: 1200,
        height: 630,
        alt: "Davis Lawn Service - Sharp Contrasting Turf Design",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-neutral-950 text-white antialiased`}>
        <nav className="border-b border-white/5 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="text-[#DFFF00] font-black text-2xl tracking-tighter italic">
              DAVIS<span className="text-white">LAWN</span>
            </span>
            <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
              <a href="#services" className="hover:text-[#DFFF00] transition-all">Deployment</a>
              <a href="#strategy" className="hover:text-[#DFFF00] transition-all">Strategy</a>
              <a href="#partners" className="hover:text-[#DFFF00] transition-all">Ecosystem</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}