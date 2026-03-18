"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Phone, Shield, Zap, Users, CheckCircle2, Crosshair, Target, Map } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [activeUnits, setActiveUnits] = useState(3);

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

      if (res.ok) {
        router.push('/success');
      } else {
        setStatus("SIGNAL ERROR. RETRY.");
      }
    } catch (err) {
      setStatus("OFFLINE. CHECK CONNECTION.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#DFFF00] selection:text-black font-sans">
      
      {/* 1. EMERGENCY CONTACT ORB */}
      <div className="fixed bottom-8 right-8 z-[100] md:hidden">
        <a href="tel:4055555555" className="flex items-center justify-center w-16 h-16 bg-[#DFFF00] rounded-full shadow-[0_0_30px_rgba(223,255,0,0.6)] animate-pulse">
          <Phone size={28} color="black" strokeWidth={3} />
        </a>
      </div>

      {/* 2. HERO: CENTRAL COMMAND */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#DFFF00]/5 blur-[120px] rounded-full opacity-50" />
        <div className="relative z-10">
          <div className="inline-block bg-white/5 border border-white/10 px-4 py-1 mb-8 rounded-full">
            <span className="text-[#DFFF00] text-[10px] font-black tracking-[0.4em] uppercase">
              // DAVIS LAWN SERVICE : CENTRAL COMMAND
            </span>
          </div>
          <h1 className="text-6xl md:text-[9rem] font-black leading-[0.8] tracking-tighter mb-8 uppercase italic">
            SCALED <br /> <span className="text-[#DFFF00]">PRECISION.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 font-bold text-lg mb-12 leading-relaxed">
            Multiple units. One standard. <span className="text-white">Davis Lawn Service</span> coordinates elite property maintenance across the 405 with military-grade reliability.
          </p>
          <a href="#quote" className="inline-block bg-[#DFFF00] text-black px-12 py-6 font-black uppercase text-2xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#DFFF00]/20">
            INITIALIZE DISPATCH
          </a>
        </div>
      </section>

      {/* 3. QUOTE NODE */}
      <section id="quote" className="max-w-4xl mx-auto px-6 py-12 -mt-10 relative z-20">
        <div className="bg-neutral-900 border border-[#DFFF00]/30 p-8 shadow-2xl">
          <h3 className="text-xl font-black mb-6 uppercase italic flex items-center gap-2">
            <Target size={20} className="text-[#DFFF00]" /> Mission Parameters
          </h3>
          <form onSubmit={handleQuote} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="CLIENT NAME" required className="bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none" />
            <input name="email" type="email" placeholder="CONTACT EMAIL" required className="bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none" />
            <input name="address" placeholder="SERVICE ADDRESS (OKC METRO)" required className="col-span-full bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none" />
            <select name="service" className="col-span-full bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none text-neutral-500">
              <option>WEEKLY ELITE MAINTENANCE</option>
              <option>BI-WEEKLY RECON</option>
              <option>FULL YARD RESTORATION</option>
            </select>
            <button type="submit" className="col-span-full bg-[#DFFF00] text-black font-black p-5 uppercase hover:bg-white transition-all">
              {status || "DEPLOY UNIT"}
            </button>
          </form>
        </div>
      </section>

      {/* 4. ACTIVE SECTOR MONITOR */}
      <section className="max-w-7xl mx-auto px-6 py-12">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { s: "EDMOND", stat: "ACTIVE" },
            { s: "MOORE", stat: "DEPLOYED" },
            { s: "NICHOLS HILLS", stat: "STANDBY" },
            { s: "THE VILLAGE", stat: "IN_TRANSIT" }
          ].map((node, i) => (
            <div key={i} className="border border-white/10 p-4 font-mono text-[10px] bg-neutral-900/20">
              <span className="text-neutral-600 block mb-1">NODE_{node.s}</span>
              <span className={node.stat === "ACTIVE" || node.stat === "DEPLOYED" ? "text-[#DFFF00]" : "text-neutral-400"}>
                STATUS: {node.stat}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TACTICAL ADVANTAGE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5">
        <div className="space-y-4">
          <div className="text-[#DFFF00]"><Users size={32} /></div>
          <h3 className="text-2xl font-black uppercase italic">Multi-Unit Split</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">
            We deploy individual laborers across different sectors simultaneously. This logistics model ensures we cover more ground in OKC without sacrificing localized attention.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-[#DFFF00]"><Shield size={32} /></div>
          <h3 className="text-2xl font-black uppercase italic">Owner-Verified</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Laborers execute the mission; the Davis Logistics Lead verifies the result. Every curb, edge, and blow-off is audited against our central standard.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-[#DFFF00]"><Zap size={32} /></div>
          <h3 className="text-2xl font-black uppercase italic">Rapid Extraction</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Industrial-grade gear means we finish fast. No lingering trucks blocking your driveway for hours—just a professional, 15-minute strike.
          </p>
        </div>
      </section>

      {/* 6. COMMUNITY PROTOCOL */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-neutral-900/30 border-y border-white/5 text-center">
        <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#DFFF00] mb-4">The 10th Yard Protocol</h4>
        <p className="text-sm text-neutral-400 max-w-lg mx-auto italic">
          For every 10 residential units maintained, Davis Lawn Service donates a full service to a local senior via the OKC Helping Hands initiative.
        </p>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-20 bg-black text-center border-t border-white/5">
        <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-[0.5em] mb-4">
          Davis Lawn Service // Built on Kali // Metro-Wide Logistics
        </p>
        <div className="h-px w-12 bg-[#DFFF00]/30 mx-auto" />
      </footer>
    </main>
  );
}