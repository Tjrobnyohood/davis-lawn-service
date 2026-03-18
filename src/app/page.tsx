"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [grassHeight, setGrassHeight] = useState(0);
  const [communityYards, setCommunityYards] = useState(8); 
  const [status, setStatus] = useState("");

  // Visual Grass Growth Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGrassHeight((prev) => (prev < 100 ? prev + 1 : 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Form Submission Logic
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
        // Redirect to the elite success page we built earlier
        router.push('/success');
      } else {
        setStatus("ERROR: SIGNAL INTERRUPTED.");
      }
    } catch (err) {
      setStatus("CRITICAL ERROR: CHECK CONNECTION.");
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-[#DFFF00] selection:text-black font-sans">
      
      {/* MOBILE FLOATING ACTION BUTTON */}
      <div className="fixed bottom-8 right-8 z-[100] md:hidden">
        <a href="tel:4055555555" className="flex items-center justify-center w-16 h-16 bg-[#DFFF00] rounded-full shadow-[0_0_30px_rgba(223,255,0,0.6)] animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#DFFF00]/5 blur-[120px] rounded-full opacity-50" />
        <div className="relative z-10">
          <div className="inline-block bg-white/5 border border-white/10 px-4 py-1 mb-8 rounded-full">
            <span className="text-[#DFFF00] text-[10px] font-black tracking-[0.4em] uppercase">
              // OKLAHOMA CITY DEPOT : ONLINE
            </span>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-8 uppercase italic">
            YARD <br /> <span className="text-[#DFFF00]">WARFARE.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 font-bold text-lg mb-12 leading-relaxed">
            Standard mowing is a commodity. Our 4-man elite crew is a <span className="text-white italic underline decoration-[#DFFF00]">strategy</span>. 
            Engineered to save your time and your turf.
          </p>
        </div>
      </section>

      {/* THE QUOTE FORM (Integrated Logic) */}
      <section id="quote" className="max-w-4xl mx-auto px-6 py-12 -mt-10 relative z-20">
        <div className="bg-neutral-900 border border-[#DFFF00]/30 p-8 shadow-2xl">
          <h3 className="text-xl font-black mb-6 uppercase italic text-[#DFFF00]">Initialize Quote Node</h3>
          <form onSubmit={handleQuote} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" placeholder="FULL NAME" required className="bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none text-white placeholder:text-neutral-700" />
              <input name="email" type="email" placeholder="EMAIL ADDRESS" required className="bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none text-white placeholder:text-neutral-700" />
            </div>
            <input name="address" placeholder="OKC SERVICE ADDRESS" required className="w-full bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none text-white placeholder:text-neutral-700" />
            <select name="service" className="w-full bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#DFFF00] outline-none text-neutral-500 uppercase">
              <option>WEEKLY ELITE MOW</option>
              <option>BI-WEEKLY MAINTENANCE</option>
              <option>RED DIRT RESTORATION</option>
            </select>
            <button type="submit" className="w-full bg-[#DFFF00] text-black font-black p-5 uppercase hover:bg-white transition-all transform active:scale-95 shadow-lg shadow-[#DFFF00]/10">
              {status || "DEPLOY CREW"}
            </button>
            {status && <p className="text-[10px] font-mono text-center text-neutral-500 mt-2">{status}</p>}
          </form>
        </div>
      </section>

      {/* COMMUNITY IMPACT TRACKER */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-[#DFFF00]">10th Yard Protocol</h4>
          <span className="text-white font-mono text-xs">{communityYards}/10 YARDS</span>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-[#DFFF00] transition-all duration-1000" style={{ width: `${(communityYards / 10) * 100}%` }} />
        </div>
        <p className="mt-4 text-[10px] text-neutral-500 uppercase tracking-tighter">Every 10th deployment supports <b>OKC Helping Hands</b>.</p>
      </section>

      {/* KNOWLEDGE BLOCK */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start border-t border-white/5">
        <div className="sticky top-32">
          <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
            The <span className="text-[#DFFF00]">OKC Soil</span> <br /> Survival Guide
          </h3>
          <p className="text-neutral-400 text-lg mb-10 leading-relaxed italic">
            Oklahoma red clay isn't grass-friendly. Our system is engineered for it.
          </p>
          <ul className="space-y-6">
            {[
              { t: "Heat-Cycle Height Adjustment", d: "Dynamic blade calibration for the 405 summer peak." },
              { t: "Red Dirt Extraction", d: "High-pressure clearing of clay sediment from concrete." },
              { t: "Edge-Lock Technology", d: "Surgical vertical edging to prevent lawn creep." }
            ].map((item, i) => (
              <li key={i} className="group border-l-2 border-white/10 pl-4 hover:border-[#DFFF00] transition-colors">
                <h5 className="text-white font-black uppercase tracking-widest text-sm">{item.t}</h5>
                <p className="text-neutral-500 text-xs mt-1">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
        
        {/* OPERATIONAL TABLE */}
        <div className="bg-neutral-900/50 border border-white/5 p-10">
          <h4 className="text-[#DFFF00] font-black uppercase text-xs mb-8 tracking-[0.3em]">Unit Comparison</h4>
          <table className="w-full font-mono text-[12px]">
            <tbody className="text-neutral-400">
              {[
                ["Personnel", "1 (Stressed)", "4 (Sync'd)"],
                ["Equipment", "Residential", "Industrial"],
                ["Insurance", "None/Partial", "Full Shield"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-6 font-bold text-white uppercase">{row[0]}</td>
                  <td className="py-6">{row[1]}</td>
                  <td className="py-6 text-[#DFFF00] font-black">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-black text-center border-t border-white/5">
        <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.5em] mb-4">
          Built on Kali // Hosted on Vercel // Optimized for OKC // Growth: {grassHeight}%
        </p>
        <div className="h-1 w-32 bg-[#DFFF00]/20 mx-auto" />
      </footer>
    </main>
  );
}