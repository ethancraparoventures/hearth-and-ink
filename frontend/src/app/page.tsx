import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF5EB] text-[#1E1A15] font-serif selection:bg-[#5A7382] selection:text-white">
      {/* Top Bar Accent */}
      <div className="h-2 w-full flex">
        <div className="h-full flex-1 bg-[#5A7382]" />
        <div className="h-full flex-1 bg-[#8AAAB8]" />
        <div className="h-full flex-1 bg-[#4A6350]" />
        <div className="h-full flex-1 bg-[#6E8C72]" />
        <div className="h-full flex-1 bg-[#A0614A]" />
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-[0.4em] font-mono opacity-40 mb-1">Established 2026</span>
          <div className="text-3xl font-serif italic tracking-tight font-medium">The Drawn House</div>
        </div>
        <div className="hidden md:flex items-center space-x-12 text-[10px] uppercase tracking-[0.25em] font-mono font-bold">
          <a href="#" className="hover:text-[#5A7382] transition-colors">Our Story</a>
          <a href="#" className="hover:text-[#5A7382] transition-colors">The Gallery</a>
          <a href="#" className="hover:text-[#5A7382] transition-colors">Realtors</a>
          <a href="#" className="px-8 py-3 bg-[#1E1A15] text-[#FAF5EB] hover:bg-[#5A7382] transition-all">Start Your Order</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-10 py-16 lg:py-32 grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-16">
          <div className="space-y-6">
             <div className="inline-block px-3 py-1 bg-[#8AAAB8]/10 text-[#5A7382] text-[9px] uppercase tracking-[0.3em] font-mono font-bold rounded-sm">
               Earth, Mist & Ink
             </div>
             <h1 className="text-6xl md:text-8xl leading-[0.95] font-serif font-light tracking-tighter">
               A home <br /> 
               <span className="italic font-normal text-[#5A7382]">captured</span> <br />
               forever.
             </h1>
          </div>
          
          <div className="space-y-6 max-w-lg">
            <p className="text-xl leading-[1.7] font-mono opacity-70">
              We translate your photographs into <span className="underline decoration-[#A0614A]/30 underline-offset-4 italic text-[#1E1A15] opacity-100">soulful architectural sketches</span>. 
              Gently imperfect, warmly hand-crafted, and delivered to your doorstep.
            </p>
            <div className="h-[1px] w-16 bg-[#1E1A15]/10" />
            <p className="text-sm font-mono italic opacity-40">
              Fresh air through warmth. Never orange, never bright.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <button className="bg-[#1E1A15] text-[#FAF5EB] px-10 py-5 text-[11px] uppercase tracking-[0.2em] font-mono font-bold hover:bg-[#5A7382] transition-all shadow-[8px_8px_0px_0px_rgba(90,115,130,0.1)] hover:shadow-none">
              Commission Your Sketch — $49
            </button>
          </div>
        </div>

        {/* The Art Piece */}
        <div className="relative">
          {/* Muted Background Accents */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#C8DAE2]/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#9AB89E]/30 rounded-full blur-3xl" />
          
          <div className="relative group perspective-1000">
            {/* The "Paper" stack effect */}
            <div className="absolute inset-0 bg-white rotate-3 shadow-md border border-zinc-100 translate-x-2 translate-y-2" />
            <div className="absolute inset-0 bg-[#F3E9D6] -rotate-2 shadow-lg border border-[#1E1A15]/5" />
            
            <div className="relative bg-[#FAF5EB] p-12 shadow-2xl border border-[#1E1A15]/5 flex flex-col transition-all duration-700 hover:rotate-0 hover:translate-x-0 hover:translate-y-0">
               <div className="absolute top-0 left-0 w-full h-1 bg-[#5A7382]/20" />
               
               {/* Sketch Frame */}
               <div className="flex-1 aspect-square bg-white shadow-inner border border-[#1E1A15]/5 p-8 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                  <div className="relative text-center">
                     <div className="w-16 h-[0.5px] bg-[#1E1A15]/20 mx-auto mb-6" />
                     <p className="font-mono italic text-sm opacity-30">Portrait of a Residence</p>
                     <div className="w-16 h-[0.5px] bg-[#1E1A15]/20 mx-auto mt-6" />
                  </div>
               </div>

               <div className="mt-12 space-y-4">
                 <div className="flex justify-between items-baseline border-b border-[#1E1A15]/10 pb-4">
                    <h2 className="text-3xl italic font-serif text-[#1E1A15]">The Miller Cottage</h2>
                    <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">Series 01/26</span>
                 </div>
                 <div className="flex justify-between text-[10px] font-mono uppercase tracking-[0.2em] opacity-50 italic">
                   <span>Maryland, USA</span>
                   <span>Fine-liner Ink on Parchment</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Accents */}
      <section className="max-w-7xl mx-auto px-10 pb-20 pt-10 flex flex-wrap gap-12 justify-center items-center opacity-40">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-[#5A7382]" />
          <span className="font-mono text-[9px] uppercase tracking-widest">Slate Blue</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-[#6E8C72]" />
          <span className="font-mono text-[9px] uppercase tracking-widest">Lichen Green</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-[#A0614A]" />
          <span className="font-mono text-[9px] uppercase tracking-widest">Muted Rust</span>
        </div>
      </section>
    </div>
  );
}
