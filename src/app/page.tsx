import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 md:py-40 overflow-hidden">
        {/* Decorative Radial Gradient for that "Pro" Look */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#DFFF00]/10 via-transparent to-transparent blur-3xl" />

        <div className="relative z-10 max-w-4xl text-center">
          <h2 className="mb-4 text-sm font-bold tracking-[0.3em] text-[#DFFF00] uppercase">
            Oklahoma City & Surrounding Areas
          </h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8">
            THE <span className="text-[#DFFF00]">ANTI-BROKE</span> <br /> 
            YARD STRATEGY.
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We don't just mow. We deploy a professional 4-man crew to restore your curb appeal with precision edging, deep-cleaning, and Bermuda-specific maintenance. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#DFFF00] text-black font-black px-8 py-4 rounded-sm text-lg hover:bg-white transition-all transform hover:-translate-y-1">
              GET A FREE QUOTE
            </button>
            <button className="border border-white/20 bg-white/5 text-white font-bold px-8 py-4 rounded-sm text-lg hover:bg-white/10 transition-all">
              SEE OUR WORK
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Precision Mowing", desc: "Striping and height optimization for OKC soil types." },
            { title: "Detail Edging", desc: "Clean, razor-sharp lines along all driveways and walkways." },
            { title: "Seasonal Cleanup", desc: "Leaf removal, mulching, and red dirt flower bed restoration." },
          ].map((service, i) => (
            <div key={i} className="group p-8 border border-white/5 bg-neutral-900/50 hover:border-[#DFFF00]/50 transition-all">
              <div className="w-12 h-1 text-[#DFFF00] bg-[#DFFF00] mb-6 group-hover:w-full transition-all duration-500" />
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-neutral-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}