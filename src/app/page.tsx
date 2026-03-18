"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Phone, Shield, Zap, Users, CheckCircle2 } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [grassHeight, setGrassHeight] = useState(0);
  const [status, setStatus] = useState("");
  const communityYards = 8; // Manual tracker for the 10th Yard Protocol

  // Visual "Growth" Easter Egg
  useEffect(() => {
    const interval = setInterval(() => {
      setGrassHeight((prev) => (prev < 100 ? prev + 1 : 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleQuote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SYNCHRONIZING...");
    
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
        setStatus("SIGNAL LOST. RETRY.");
      }
    } catch (err) {
      setStatus("CONNECTION ERROR.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#DFFF00] selection:text-black font-sans">
      
      {/* 1. MOBILE CALL ORB */}
      <div className="fixed bottom-8 right-8 z-[100] md:hidden">
        <a href="tel:4055555555" className="flex items-center justify-center w-16 h-16 bg-[#DFFF00] rounded-full shadow-[0_0_30px_rgba(223,255,0,0.6)] animate-bounce">
          <Phone size={28} color="black" strokeWidth={3} />
        </a>
      </div>

      {/* 2. HERO: INITIALIZATION */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#DFFF00]/5 blur-[120px] rounded-full opacity-50" />
        <div className="relative z-10">
          <div className="inline-block bg-white/5 border border-white/10 px-4 py-1 mb-8 rounded-full">
            <span className="text-[#DFFF00] text-[10px] font-black tracking-[0.4em] uppercase">
              // OKLAHOMA CITY DEPOT : ONLINE
            </span>
          </div>
          <h1 className="text-6xl md:text-[9rem] font-black leading-[0.8] tracking-tighter mb-8 uppercase italic">
            YARD <br /> <span className="text-[#DFFF00]">WARFARE.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 font-bold text-lg mb-12">
            Standard mowing is a commodity. Our 4-man elite crew is a <span className="text-white italic underline decoration-[#DFFF00]">strategy</span>.
          </p>
          <a href="#quote" className="inline-block bg-[#DFFF00] text-black px-12 py-6 font-black uppercase text-2xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#DFFF00]/20">
            INITIALIZE QUOTE
          </a>
        </div>
      </section>

      {/* 3. QUOTE CAPTURE NODE */}
      <section id="quote" className="max-w-4xl mx-auto px-6 py-12 -mt-10 relative z-20">
        <div className="bg-neutral-900 border border-[#DFFF00]/30 p-8 shadow-2xl">
          <h3 className="text-xl font-black mb-6 uppercase italic flex items-center gap-2">
            <Zap size={20} className="text-[#DFFF00]" /> Initialize Dispatch
          </h3>
          <form onSubmit={handleQuote} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="CLIENT NAME" required className="bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none" />
            <input name="email" type="email" placeholder="EMAIL ADDRESS" required className="bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none" />
            <input name="address" placeholder="SERVICE ADDRESS (OKC)" required className="col-span-full bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none" />
            <select name="service" className="col-span-full bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none text-neutral-500">
              <option>WEEKLY ELITE MOW</option>
              <option>BI-WEEKLY MAINTENANCE</option>
              <option>RED DIRT RESTORATION</option>
            </select>
            <button type="submit" className="col-span-full bg-[#DFFF00] text-black font-black p-5 uppercase hover:bg-white transition-all">
              {status || "DEPLOY CREW"}
            </button>
          </form>
        </div>
      </section>

      {/* 4. IMPACT TRACKER */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-[#DFFF00]">Community Impact: 10th Yard Protocol</h4>
          <span className="text-white font-mono text-xs">{communityYards}/10 YARDS</span>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#DFFF00] transition-all duration-1000" 
            style={{ width: `${(communityYards / 10) * 100}%` }}
          />
        </div>
        <p className="mt-4 text-[10px] text-neutral-500 uppercase tracking-tighter">
          Every 10th yard is donated to a local senior via <b>OKC Helping Hands</b>.
        </p>
      </section>

      {/* 5. KNOWLEDGE MODULE */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-white/5">
        <div>
          <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
            The <span className="text-[#DFFF00]">OKC Soil</span> Survival Guide
          </h3>
          <ul className="space-y-8">
            <li className="flex gap-4">
              <div className="text-[#DFFF00]"><Shield size={24} /></div>
              <div>
                <h5 className="font-black uppercase tracking-widest">Heat-Cycle Height Adjustment</h5>
                <p className="text-neutral-500 text-sm">Blade elevation calibrated for 405 summer peaks.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="text-[#DFFF00]"><Users size={24} /></div>
              <div>
                <h5 className="font-black uppercase tracking-widest">4-Man Sync Protocol</h5>
                <p className="text-neutral-500 text-sm">Military-grade efficiency. In and out in 15 minutes.</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* MOBILE SYNC / QR */}
        <div className="flex flex-col items-center justify-center p-12 bg-neutral-900/30 border border-white/5 relative group">
          <p className="text-[10px] text-neutral-600 uppercase tracking-[0.4em] mb-6">// MOBILE SYNC</p>
          <div className="relative w-40 h-40">
             <div className="absolute inset-0 z-20 border border-[#DFFF00]/20 pointer-events-none group-hover:border-[#DFFF00] transition-colors" />
             <img src="/lawn_qr.png" alt="QR" className="w-full h-full grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all" />
          </div>
          <p className="mt-6 text-[8px] font-mono text-neutral-500 uppercase tracking-widest">Scan to port to handheld</p>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-20 bg-black text-center border-t border-white/5">
        <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-[0.5em] mb-4">
          Built on Kali // Hosted on Vercel // Grass: {grassHeight}%
        </p>
        <div className="h-px w-12 bg-[#DFFF00]/30 mx-auto" />
      </footer>
    </main>
  );
}