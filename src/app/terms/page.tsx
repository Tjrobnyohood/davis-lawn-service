"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function TermsPage() {
  const [secretMode, setSecretMode] = useState(false);

  return (
    <main 
      className={`min-h-screen transition-colors duration-1000 p-8 md:p-24 font-mono selection:bg-[#DFFF00] selection:text-black ${
        secretMode ? "bg-[#051a05] text-green-500" : "bg-black text-white"
      }`}
    >
      <Link 
        href="/" 
        className={`inline-flex items-center gap-2 mb-12 hover:underline tracking-tighter text-xs transition-colors ${
          secretMode ? "text-green-500" : "text-[#DFFF00]"
        }`}
      >
        <ArrowLeft size={16} /> ABORT_TO_COMMAND_CENTER
      </Link>
      
      <div 
        className={`max-w-3xl border p-8 md:p-12 transition-all duration-500 shadow-2xl ${
          secretMode 
            ? "border-green-500/40 bg-black/80 shadow-green-500/10" 
            : "border-white/10 bg-neutral-900/50"
        }`}
      >
        <header 
          className="border-b border-white/10 pb-6 mb-8 cursor-help"
          onClick={(e) => {
            if (e.detail === 3) setSecretMode(!secretMode);
          }}
        >
          <ShieldAlert 
            className={`mb-4 transition-colors ${secretMode ? "text-green-500" : "text-[#DFFF00]"}`} 
            size={40} 
          />
          <h1 className="text-3xl font-black uppercase italic tracking-tighter text-white">
            PROTOCOL_TOS // <span className={secretMode ? "text-green-400" : "text-[#DFFF00]"}>
              {secretMode ? "NIGHT_VISION_ENGAGED" : "TERMS OF ENGAGEMENT"}
            </span>
          </h1>
        </header>

        <section className={`space-y-8 text-sm leading-relaxed transition-colors ${
          secretMode ? "text-green-700" : "text-neutral-400"
        }`}>
          <div>
            <h3 className="text-white font-black mb-2 uppercase italic tracking-tighter">01. MISSION OBJECTIVE</h3>
            <p>By accessing this site or hiring our units, you agree to the following tactical parameters.</p>
          </div>
          <div>
            <h3 className="text-white font-black mb-2 uppercase italic tracking-tighter">02. PROPERTY ACCESS</h3>
            <p>Our units require undisputed access to the target zone. If your gate is locked, we reserve the right to abort.</p>
          </div>
          <div>
            <h3 className="text-white font-black mb-2 uppercase italic tracking-tighter">03. EQUIPMENT SAFETY</h3>
            <p>Our hardware is industrial grade. Do not approach the machines while they are "hot."</p>
          </div>
          <div className="pt-6 border-t border-white/5">
            <p className="text-[10px] font-mono uppercase text-neutral-600 tracking-[0.3em]">
              // END_OF_TRANSMISSION // 2026
            </p>
          </div>
        </section>
      </div> 
    </main>
  );
}