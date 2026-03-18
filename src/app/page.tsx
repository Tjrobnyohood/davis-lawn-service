"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Zap, Users, Target, BarChart3, Clock, Crosshair, ArrowDown } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [secretMode, setSecretMode] = useState(false);

  const handleQuote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("TRANSMITTING...");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.ok) router.push('/success');
      else setStatus("SIGNAL ERROR.");
    } catch (err) { setStatus("OFFLINE."); }
  };

  return (
    <main className={`min-h-screen transition-colors duration-1000 selection:bg-[#DFFF00] selection:text-black font-sans ${
      secretMode ? "bg-[#051a05]" : "bg-black text-white"
    }`}>
      
      {/* 1. HERO: THE MANIFESTO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden border-b border-white/5">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] blur-[120px] rounded-full opacity-40 transition-colors duration-1000 ${
          secretMode ? "bg-green-500/20" : "bg-[#DFFF00]/5"
        }`} />
        
        <div className="relative z-10">
          <div 
            onClick={(e) => {
              if (e.detail === 3) {
                setSecretMode(!secretMode);
              }
            }}
            className="cursor-help inline-block bg-white/5 border border-white/10 px-4 py-1 mb-8 rounded-full hover:border-[#DFFF00]/50 transition-all"
          >
            <span className={`text-[10px] font-black tracking-[0.4em] uppercase transition-colors ${
              secretMode ? "text-green-500" : "text-[#DFFF00]"
            }`}>
              {secretMode ? "// SYSTEM: NIGHT_VISION_ACTIVE" : "// DAVIS LAWN SERVICE : 405_OPERATIONS"}
            </span>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-8 uppercase italic">
            YARD <br /> <span className={secretMode ? "text-green-500" : "text-[#DFFF00]"}>WARFARE.</span>
          </h1>
          <p className="max-w-xl mx-auto text-neutral-400 font-bold text-xl mb-12 leading-tight">
            We don't "cut grass." We execute high-precision turf extraction and curb-line dominance for OKC's most demanding properties.
          </p>
          <div className={`animate-bounce opacity-50 ${secretMode ? "text-green-500" : "text-[#DFFF00]"}`}>
            <ArrowDown size={32} className="mx-auto" />
          </div>
        </div>
      </section>

      {/* 2. THE DIFFERENTIATOR */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black uppercase italic mb-8 text-white">
              THE <span className={secretMode ? "text-green-500" : "text-[#DFFF00]"}>STANDARD</span> <br /> IS TOTAL.
            </h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              Standard crews linger. They miss edges. They leave debris. <span className="text-white font-bold underline decoration-[#DFFF00]">Davis Lawn Service</span> operates on a 4-man sync protocol—multiple units deployed to hit your property from every angle at once. 
            </p>
            <ul className="space-y-6">
              {[
                { t: "INDUSTRIAL HARDWARE", d: "Commercial-grade zero-turns with surgical blades." },
                { t: "CLAY-SOIL INTELLIGENCE", d: "Custom cut-heights mapped to Oklahoma heat cycles." },
                { t: "NO-LINGER EXTRACTION", d: "In and out in 15 minutes. Professional stealth." }
              ].map((item, i) => (
                <li key={i} className={`flex gap-4 border-l-2 pl-6 py-2 transition-colors ${
                  secretMode ? "border-green-800" : "border-[#DFFF00]"
                }`}>
                  <div>
                    <h4 className={`font-black text-xs uppercase tracking-widest ${
                      secretMode ? "text-green-500" : "text-[#DFFF00]"
                    }`}>{item.t}</h4>
                    <p className="text-neutral-500 text-sm">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className={`absolute inset-0 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 ${
              secretMode ? "bg-green-500/10" : "bg-[#DFFF00]/10"
            }`} />
            <div className="bg-neutral-900 border border-white/10 p-12 relative z-10">
              <BarChart3 size={48} className={secretMode ? "text-green-500" : "text-[#DFFF00]"} />
              <h3 className="text-3xl font-black uppercase italic mb-4 text-white">LOGISTICS OVER LUCK.</h3>
              <p className="text-neutral-500 mb-6">While others guess, we coordinate. Our 4-man labor force is split into specific tactical nodes across OKC to ensure guaranteed uptime and zero schedule drift.</p>
              <div className="text-[10px] font-mono text-neutral-700 tracking-[0.3em]">
                // STATUS: SECTOR_DOMINANCE_ENABLED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACTIVE SECTOR MONITOR */}
      <section className="py-20 border-b border-white/5 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-[10px] font-black text-center mb-12 tracking-[0.5em] text-neutral-600 uppercase">
            // LIVE_UNIT_DISPATCH_STATUS
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["EDMOND", "MOORE", "NICHOLS HILLS", "THE VILLAGE"].map((zone, i) => (
              <div key={i} className={`p-6 border border-white/5 bg-black transition-colors ${
                secretMode ? "hover:border-green-500/50" : "hover:border-[#DFFF00]/50"
              }`}>
                <span className={`text-[10px] block mb-2 ${
                  secretMode ? "text-green-500" : "text-[#DFFF00]"
                }`}>ZONE_{i+1}</span>
                <span className="text-xl font-bold uppercase text-white">{zone}</span>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-neutral-500 uppercase">Deployed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL DEPLOYMENT: THE QUOTE FORM */}
      <section id="quote" className="max-w-7xl mx-auto px-6 py-32 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-6xl font-black uppercase italic leading-none mb-8 text-white">
              READY FOR <br /> <span className={secretMode ? "text-green-500" : "text-[#DFFF00]"}>DISPATCH?</span>
            </h2>
            <p className="text-neutral-400 mb-8 font-bold text-lg leading-tight">
              Submit your mission parameters. Our command lead will verify the site and transmit a tactical quote within 4 hours.
            </p>
            <div className={`p-6 border bg-opacity-5 ${
              secretMode ? "border-green-900 bg-green-500" : "border-[#DFFF00]/20 bg-[#DFFF00]"
            }`}>
              <p className={`text-[10px] font-mono uppercase mb-2 ${
                secretMode ? "text-green-500" : "text-[#DFFF00]"
              }`}>Emergency Contact</p>
              <p className="text-2xl font-black text-white">(405) 000-0000</p>
            </div>
          </div>

          <div className={`lg:col-span-3 bg-neutral-900 border p-12 transition-all duration-700 ${
            secretMode ? "border-green-500/40 shadow-[0_0_50px_rgba(34,197,94,0.1)]" : "border-[#DFFF00]/40 shadow-[0_0_50px_rgba(223,255,0,0.1)]"
          }`}>
            <form onSubmit={handleQuote} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Full Name</label>
                <input name="name" required className="w-full bg-black border border-white/10 p-4 font-mono text-sm focus:border-[#DFFF00] outline-none text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Contact Email</label>
                <input name="email" type="email" required className="w-full bg-black border border-white/10 p-4 font-mono text-sm focus:border-[#DFFF00] outline-none text-white" />
              </div>
              <div className="space-y-2 col-span-full">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Property Address (OKC Metro)</label>
                <input name="address" required className="w-full bg-black border border-white/10 p-4 font-mono text-sm focus:border-[#DFFF00] outline-none text-white" />
              </div>
              <div className="space-y-2 col-span-full">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Service Tier</label>
                <select name="service" className="w-full bg-black border border-white/10 p-4 font-mono text-sm focus:border-[#DFFF00] outline-none text-white">
                  <option>WEEKLY ELITE MAINTENANCE</option>
                  <option>BI-WEEKLY PRECISION MOWING</option>
                  <option>FULL PROPERTY RESTORATION</option>
                </select>
              </div>
              <button type="submit" className={`col-span-full font-black p-6 uppercase text-xl hover:bg-white transition-all transform hover:scale-[1.02] ${
                secretMode ? "bg-green-600 text-black" : "bg-[#DFFF00] text-black"
              }`}>
                {status || "INITIATE DEPLOYMENT"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-20 bg-neutral-950 border-t border-white/5 text-center px-6">
        <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-[0.5em] mb-4 leading-loose">
          DAVIS LAWN SERVICE // BUILT FOR PRECISION // 405 SECTOR OKLAHOMA
        </p>
        <div className="flex justify-center gap-8 text-[9px] font-bold text-neutral-600 uppercase tracking-widest mb-6">
          <Link href="/terms" className="hover:text-[#DFFF00] transition-colors">Terms of Engagement</Link>
          <Link href="/privacy" className="hover:text-[#DFFF00] transition-colors">Data Intelligence</Link>
        </div>
        <div className={`h-px w-24 mx-auto transition-colors ${
          secretMode ? "bg-green-900" : "bg-[#DFFF00]/20"
        }`} />
      </footer>
    </main>
  );
}