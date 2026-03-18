"use client";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowLeft } from "lucide-react";

export default function Success() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* KALI SCANNING ANIMATION LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="w-full h-1 bg-[#DFFF00] shadow-[0_0_20px_#DFFF00] animate-scan" />
      </div>

      {/* CORE STATUS CARD */}
      <div className="relative z-10 w-full max-w-lg bg-neutral-900 border border-[#DFFF00]/30 p-12 text-center shadow-[0_0_50px_rgba(223,255,0,0.1)]">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <CheckCircle2 size={80} className="text-[#DFFF00]" />
            <div className="absolute inset-0 animate-ping opacity-20 bg-[#DFFF00] rounded-full" />
          </div>
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter italic mb-4">
          Dispatch <span className="text-[#DFFF00]">Successful.</span>
        </h1>
        
        <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-[0.3em] mb-8 space-y-1">
          <p>// SIGNAL: RECEIVED</p>
          <p>// STATUS: QUEUED FOR ANALYSIS</p>
          <p>// LOCATION: OKC_METRO_LOCKED</p>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-10 italic">
          The 4-man crew is currently processing your coordinates. A logistics lead will contact you via email or phone within 24 hours to confirm the tactical plan.
        </p>

        {/* RETURN ACTION */}
        <Link 
          href="/" 
          className="group flex items-center justify-center gap-2 bg-[#DFFF00] text-black font-black py-4 px-8 uppercase hover:bg-white transition-all transform active:scale-95"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Return to Hub
        </Link>
      </div>

      {/* FOOTER METADATA */}
      <div className="mt-12 flex gap-4 opacity-30 grayscale pointer-events-none">
        <ShieldCheck size={20} />
        <span className="font-mono text-[10px] uppercase tracking-widest">End_to_End_Encryption_Active</span>
      </div>
    </main>
  );
}