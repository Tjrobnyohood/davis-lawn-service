"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  const [secretMode, setSecretMode] = useState(false);

  return (
    <main 
      className={`min-h-screen transition-colors duration-1000 p-8 md:p-24 font-mono selection:bg-[#DFFF00] selection:text-black ${
        secretMode ? "bg-[#051a05] text-green-500" : "bg-black text-white"
      }`}
    >
      {/* Navigation Out */}
      <Link 
        href="/" 
        className={`inline-flex items-center gap-2 mb-12 hover:underline tracking-tighter text-xs transition-colors ${
          secretMode ? "text-green-500" : "text-[#DFFF00]"
        }`}
      >
        <ArrowLeft size={16} /> ABORT_TO_COMMAND_CENTER
      </Link>
      
      {/* Terminal Window Container */}
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
          <Eye 
            className={`mb-4 transition-colors ${secretMode ? "text-green-500" : "text-[#DFFF00]"}`} 
            size={40} 
          />
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">
            PROTOCOL_PRIVACY // <span className={secretMode ? "text-green-400" : "text-[#DFFF00]"}>
              {secretMode ? "STEALTH_DATA_MODE" : "DATA INTELLIGENCE"}
            </span>
          </h1>
          <p className="text-[10px] text-neutral-500 mt-2 font-bold tracking-widest uppercase">
            ENCRYPTION: {secretMode ? "LEVEL_5_STEALTH" : "STANDARD_SECURE"}
          </p>
        </header>

        <section className={`space-y-8 text-sm leading-relaxed transition-colors ${
          secretMode ? "text-green-700" : "text-neutral-400"
        }`}>
          <div>
            <h3 className="text-white font-black mb-2 uppercase italic tracking-tighter underline decoration-white/10">01. INTEL COLLECTION</h3>
            <p>We only harvest the data necessary for mission success: your name, contact signal (email/phone), and the target coordinates (your address). We do not buy or sell external dossiers.</p>
          </div>

          <div>
            <h3 className="text-white font-black mb-2 uppercase italic tracking-tighter underline decoration-white/10">02. DATA DEPLOYMENT</h3>
            <p>Your intel is used strictly for logistics. We use your address to navigate our units to the yard and your phone number to transmit "Mission Accomplished" reports. We don't spam; we execute.</p>
          </div>

          <div>
            <h3 className="text-white font-black mb-2 uppercase italic tracking-tighter underline decoration-white/10">03. SECURE STORAGE</h3>
            <p>Our servers are locked down. We use industry-standard encryption to ensure your property details don't fall into the hands of "Big Fertilizer" or unauthorized third-party trackers.</p>
          </div>

          <div>
            <h3 className="text-white font-black mb-2 uppercase italic tracking-tighter underline decoration-white/10">04. THE VANISH CLAUSE</h3>
            <p>You have the right to be forgotten. If you wish to scrub your data from our database, transmit a formal request to our command lead. We will wipe the drive immediately.</p>
          </div>
          
          <div className="pt-6 border-t border-white/5">
            <p className="text-[10px] font-mono uppercase text-neutral-600 tracking-[0.3em]">
              // END_OF_TRANSMISSION // PRIVACY_ASSURED_2026
            </p>
          </div>
        </section>
      </div> 
    </main>
  );
}