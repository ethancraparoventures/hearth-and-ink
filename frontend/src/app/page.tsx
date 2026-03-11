import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E5DACE] text-[#1E1A15] font-mono selection:bg-[#A0614A] selection:text-white overflow-x-hidden relative p-4 md:p-8 lg:p-12">
      {/* Heavy Paper Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] z-50" />
      
      {/* Background Splashes */}
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#8AAAB8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6E8C72]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* The "Master Sheet" - Main Website Container */}
      <div className="relative z-40 max-w-6xl mx-auto bg-[#FAF5EB] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] min-h-[90vh] flex flex-col">
        
        {/* Ripped Edge Effect - Top */}
        <div className="absolute top-0 left-0 w-full h-8 bg-[#E5DACE] pointer-events-none" style={{ 
          clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 2% 80%, 5% 95%, 8% 75%, 12% 90%, 15% 70%, 18% 85%, 22% 65%, 25% 90%, 28% 70%, 32% 85%, 35% 60%, 38% 80%, 42% 65%, 45% 95%, 48% 70%, 52% 85%, 55% 60%, 58% 90%, 62% 70%, 65% 85%, 68% 60%, 72% 95%, 75% 70%, 78% 85%, 82% 65%, 85% 90%, 88% 70%, 92% 85%, 95% 60%, 98% 90%, 100% 70%)" 
        }} />

        {/* Navigation */}
        <nav className="px-12 pt-20 pb-12 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-[#1E1A15]/5">
          <div className="group rotate-[-1deg]">
            <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 mb-3 font-bold underline decoration-[#A0614A]/40 decoration-wavy">EST. 2026 / VOL 01</p>
            <h1 className="text-5xl font-serif italic font-semibold tracking-tighter text-[#1E1A15]">The Drawn House</h1>
          </div>
          <div className="flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] font-bold pb-2">
            <a href="#" className="hover:text-[#5A7382] transition-colors relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-[1px] after:bg-[#5A7382] hover:after:w-full after:transition-all">Portfolio</a>
            <a href="#" className="hover:text-[#6E8C72] transition-colors relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-[1px] after:bg-[#6E8C72] hover:after:w-full after:transition-all">Realtors</a>
            <a href="#" className="bg-[#1E1A15] text-[#FAF5EB] px-8 py-5 hover:bg-[#5A7382] transition-all shadow-[6px_6px_0px_0px_#A0614A] active:translate-x-1 active:translate-y-1 active:shadow-none">Order Sketch</a>
          </div>
        </nav>

        {/* Hero Area */}
        <main className="flex-1 grid lg:grid-cols-12 gap-0">
          
          <div className="lg:col-span-7 p-12 lg:p-20 space-y-16 border-r border-[#1E1A15]/5">
            <div className="space-y-10 relative">
               <div className="absolute -left-12 top-0 w-1 h-32 bg-gradient-to-b from-[#A0614A] to-transparent opacity-30" />
               <h2 className="text-7xl md:text-9xl leading-[0.8] font-serif font-light tracking-tighter">
                  Every <br />
                  <span className="italic text-[#5A7382]">line</span> <br />
                  tells a <br />
                  <span className="italic text-[#A0614A]">story</span>.
               </h2>
               <p className="text-2xl leading-[1.6] opacity-70 max-w-md font-serif italic text-[#3B3128]">
                 Hand-crafted architectural sketches for the homes that hold your history. Warm, wobbly, and remarkably human.
               </p>
            </div>

            <div className="space-y-8">
               <div className="flex gap-4">
                  <div className="flex-1 p-6 bg-white border border-[#1E1A15]/10 shadow-sm rotate-1">
                     <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-3">Material 01</p>
                     <p className="text-sm font-serif italic leading-snug">Ripped-edge cotton rag paper with slate ink.</p>
                  </div>
                  <div className="flex-1 p-6 bg-white border border-[#1E1A15]/10 shadow-sm -rotate-1">
                     <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-3">Process 02</p>
                     <p className="text-sm font-serif italic leading-snug">AI-driven DNA trace with a human soul pass.</p>
                  </div>
               </div>
               <button className="w-full bg-[#1E1A15] text-[#FAF5EB] py-8 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#4A6350] transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Start Your Commission &mdash; $49</span>
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-[#6E8C72] skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-in-out opacity-20" />
               </button>
            </div>
          </div>

          {/* The Ripped Art Piece */}
          <div className="lg:col-span-5 p-12 bg-[#F3E9D6]/30 flex flex-col items-center justify-center relative">
            <div className="w-full max-w-sm group">
              {/* Stack effect */}
              <div className="relative bg-white shadow-2xl p-1 pb-16 transform group-hover:rotate-1 transition-transform duration-500">
                
                {/* Ripped Art Paper Container */}
                <div className="bg-white p-8 relative overflow-hidden">
                   {/* Ripped Edge Top */}
                   <div className="absolute top-0 left-0 w-full h-4 bg-[#F3E9D6]/30" style={{ 
                     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 95% 60%, 90% 90%, 85% 50%, 80% 85%, 75% 45%, 70% 80%, 65% 40%, 60% 75%, 55% 35%, 50% 70%, 45% 30%, 40% 65%, 35% 25%, 30% 60%, 25% 20%, 20% 55%, 15% 15%, 10% 50%, 5% 10%, 0% 45%)" 
                   }} />
                   
                   {/* Sketch Area */}
                   <div className="aspect-square bg-[#FAF5EB] border border-[#1E1A15]/5 shadow-inner flex flex-col items-center justify-center p-8 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                      <div className="relative text-center opacity-10">
                        <div className="text-6xl font-serif italic underline decoration-1">Drawn.</div>
                        <p className="mt-4 font-mono text-[10px] tracking-widest uppercase font-bold">House Portrait 001</p>
                      </div>
                   </div>

                   {/* Artwork Info - Typewriter Style */}
                   <div className="mt-8 space-y-4 border-t border-[#1E1A15]/10 pt-6">
                      <div className="flex justify-between items-baseline">
                         <h3 className="text-2xl font-serif italic text-[#1E1A15]">The Miller Residence</h3>
                         <span className="font-mono text-[9px] bg-[#6E8C72]/10 text-[#4A6350] px-2 py-1 rounded-sm">SLATE BLUE</span>
                      </div>
                      <p className="font-mono text-[10px] tracking-[0.2em] opacity-40 leading-relaxed uppercase">
                        Architectural fine-liner on heavy 300gsm cotton parchment. <br/>
                        Maryland, USA &bull; Series 01.26
                      </p>
                   </div>
                </div>

                {/* Hand-signed / Stamp Area */}
                <div className="absolute bottom-6 right-8 rotate-[-12deg]">
                   <div className="w-16 h-16 rounded-full border-2 border-[#A0614A]/20 flex items-center justify-center text-[#A0614A] text-[9px] font-serif italic text-center p-2 leading-none">
                      Hand <br/> Crafted
                   </div>
                </div>
              </div>
            </div>
          </div>

        </main>

        {/* Footer Area */}
        <footer className="p-12 bg-[#1E1A15] text-[#FAF5EB] flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 flex">
              <div className="flex-1 bg-[#5A7382]" />
              <div className="flex-1 bg-[#8AAAB8]" />
              <div className="flex-1 bg-[#C8DAE2]" />
              <div className="flex-1 bg-[#6E8C72]" />
              <div className="flex-1 bg-[#9AB89E]" />
           </div>
           <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-[10px] uppercase tracking-[0.6em] font-bold opacity-40">The Drawn House</p>
              <p className="font-serif italic text-sm opacity-60">Crafted by hand. Kept forever.</p>
           </div>
           <div className="flex gap-12 text-[9px] uppercase tracking-[0.3em] font-bold opacity-30">
              <a href="#" className="hover:opacity-100 transition-opacity">Process</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Pricing</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
           </div>
        </footer>
        
        {/* Ripped Edge Effect - Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-[#E5DACE] pointer-events-none" style={{ 
          clipPath: "polygon(100% 100%, 0% 100%, 0% 0%, 2% 20%, 5% 5%, 8% 25%, 12% 10%, 15% 30%, 18% 15%, 22% 35%, 25% 10%, 28% 30%, 32% 15%, 35% 40%, 38% 20%, 42% 35%, 45% 5%, 48% 30%, 52% 15%, 55% 40%, 58% 10%, 62% 30%, 65% 15%, 68% 40%, 72% 5%, 75% 30%, 78% 15%, 82% 35%, 85% 10%, 88% 30%, 92% 15%, 95% 40%, 98% 10%, 100% 30%)" 
        }} />
      </div>

      {/* Aesthetic Side Labels */}
      <div className="hidden xl:block fixed left-12 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-left text-[9px] uppercase tracking-[1em] font-bold opacity-20 pointer-events-none">
        Architectural Soul &bull; Established MMXXVI
      </div>
    </div>
  );
}
