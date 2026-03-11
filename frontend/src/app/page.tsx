import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3E9D6] text-[#1E1A15] font-mono selection:bg-[#A0614A] selection:text-white overflow-x-hidden">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-50" />
      
      {/* Decorative Washi Tape / Accent */}
      <div className="absolute top-0 right-20 w-32 h-10 bg-[#8AAAB8]/40 -rotate-3 z-40 border-b border-white/10 shadow-sm" />

      {/* Navigation */}
      <nav className="relative z-40 max-w-6xl mx-auto px-8 pt-16 pb-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="group cursor-default">
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-2 font-bold italic">Hand-Crafted in 2026</p>
          <h1 className="text-4xl font-serif italic font-medium tracking-tighter border-b-2 border-[#A0614A]/20 pb-2">The Drawn House</h1>
        </div>
        <div className="flex items-center gap-12 text-[10px] uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-[#5A7382] transition-colors decoration-dotted hover:underline underline-offset-8">The Gallery</a>
          <a href="#" className="hover:text-[#6E8C72] transition-colors decoration-dotted hover:underline underline-offset-8">For Realtors</a>
          <a href="#" className="bg-[#1E1A15] text-[#FAF5EB] px-8 py-4 hover:bg-[#A0614A] transition-all transform hover:-rotate-1 shadow-[4px_4px_0px_0px_#8AAAB8]">Order Sketch</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-30 max-w-6xl mx-auto px-8 py-12 grid lg:grid-cols-2 gap-20 items-center">
        
        <div className="space-y-16">
          <div className="space-y-8 relative">
             {/* Large background "Ink" splash effect (SVG or CSS) */}
             <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#6E8C72]/5 rounded-full blur-[100px]" />
             
             <h2 className="text-6xl md:text-8xl leading-[0.85] font-serif font-light tracking-tighter relative">
                Your <br />
                <span className="italic text-[#A0614A]">home</span>, <br />
                redrawn.
             </h2>
             
             <p className="text-xl leading-relaxed opacity-80 max-w-md border-l-4 border-[#8AAAB8]/30 pl-6 italic">
               We translate your favorite photographs into soulful, hand-drawn architectural sketches. Warm, imperfect, and full of life.
             </p>
          </div>

          <div className="space-y-10">
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-[#FAF5EB] border border-[#1E1A15]/5 shadow-sm transform -rotate-1 hover:rotate-0 transition-transform">
                  <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2 font-bold">Palette 01</p>
                  <p className="text-sm italic font-serif leading-tight">Slate Blue & Lichen Green accents.</p>
               </div>
               <div className="p-6 bg-[#FAF5EB] border border-[#1E1A15]/5 shadow-sm transform rotate-2 hover:rotate-0 transition-transform">
                  <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2 font-bold">Finish 02</p>
                  <p className="text-sm italic font-serif leading-tight">Fine-liner ink on heavy parchment.</p>
               </div>
            </div>
            
            <button className="w-full md:w-auto bg-transparent border-2 border-[#1E1A15] text-[#1E1A15] px-12 py-6 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#1E1A15] hover:text-white transition-all relative group overflow-hidden">
               <span className="relative z-10 font-mono">Commission for $49</span>
               <div className="absolute inset-0 bg-[#A0614A] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* The "Sketchbook" Visual */}
        <div className="relative pt-12">
          {/* Muted background color blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#8AAAB8]/10 via-transparent to-[#6E8C72]/10 blur-3xl pointer-events-none" />
          
          <div className="relative bg-white p-4 shadow-[20px_20px_60px_-15px_rgba(30,26,21,0.2)] border border-[#1E1A15]/5">
             <div className="bg-[#FAF5EB] p-10 border border-[#1E1A15]/5 relative flex flex-col min-h-[500px]">
                {/* Paper Ring Holes (Decorative) */}
                <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-around py-10">
                   {[...Array(8)].map((_, i) => (
                     <div key={i} className="w-3 h-3 rounded-full bg-[#1E1A15]/5 shadow-inner" />
                   ))}
                </div>

                <div className="flex-1 ml-6 border-[0.5px] border-[#1E1A15]/10 bg-white shadow-inner flex flex-col items-center justify-center p-8 relative overflow-hidden group">
                   <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
                   
                   {/* Centered content */}
                   <div className="relative text-center space-y-6">
                      <div className="w-20 h-[1px] bg-[#A0614A]/30 mx-auto" />
                      <p className="font-serif italic text-2xl text-[#1E1A15]/20 leading-relaxed">
                        A place for <br/> 
                        the soul to <br/>
                        rest.
                      </p>
                      <div className="w-20 h-[1px] bg-[#A0614A]/30 mx-auto" />
                   </div>
                </div>

                <div className="mt-10 ml-6 flex justify-between items-end">
                   <div className="space-y-1">
                      <p className="text-2xl font-serif italic text-[#1E1A15]">The Gable House</p>
                      <p className="text-[9px] uppercase tracking-[0.4em] text-[#5A7382] font-bold">Series 001 — Maryland</p>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-[#A0614A]/20 flex items-center justify-center text-[10px] italic font-serif text-[#A0614A]">
                      Ink
                   </div>
                </div>
             </div>
          </div>

          {/* Floating "Stamp" or Label */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#A0614A] rounded-full flex items-center justify-center text-[#F3E9D6] p-6 text-center leading-tight shadow-xl rotate-12 transform hover:rotate-0 transition-transform cursor-default">
             <p className="text-[10px] uppercase font-bold tracking-widest">Hand Crafted Guarantee</p>
          </div>
        </div>
      </main>

      {/* Trust / Process Section (Simplified & Warm) */}
      <section className="relative z-30 max-w-6xl mx-auto px-8 py-32 grid md:grid-cols-3 gap-16 border-t border-[#1E1A15]/5">
         <div className="space-y-4">
            <span className="text-2xl italic font-serif text-[#A0614A]">01.</span>
            <h3 className="font-bold uppercase tracking-widest text-[11px]">The Blueprint</h3>
            <p className="text-sm opacity-60 leading-relaxed italic">Upload any photo. We extract the unique architectural DNA of your specific home.</p>
         </div>
         <div className="space-y-4">
            <span className="text-2xl italic font-serif text-[#5A7382]">02.</span>
            <h3 className="font-bold uppercase tracking-widest text-[11px]">The Soul Pass</h3>
            <p className="text-sm opacity-60 leading-relaxed italic">Our engine applies wobbly lines and variable ink weights for an authentic human touch.</p>
         </div>
         <div className="space-y-4">
            <span className="text-2xl italic font-serif text-[#6E8C72]">03.</span>
            <h3 className="font-bold uppercase tracking-widest text-[11px]">The Delivery</h3>
            <p className="text-sm opacity-60 leading-relaxed italic">A high-resolution masterpiece arrives in your inbox within 24 hours. Ready to frame.</p>
         </div>
      </section>

      {/* Bottom Color Palette Accent */}
      <footer className="relative z-30 py-20 bg-[#1E1A15] text-[#F3E9D6] overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 flex">
            <div className="flex-1 bg-[#5A7382]" />
            <div className="flex-1 bg-[#8AAAB8]" />
            <div className="flex-1 bg-[#C8DAE2]" />
            <div className="flex-1 bg-[#6E8C72]" />
            <div className="flex-1 bg-[#9AB89E]" />
         </div>
         <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">The Drawn House &bull; Established 2026</p>
            <div className="flex gap-8 text-[9px] uppercase tracking-widest font-bold opacity-50">
               <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
               <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
               <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
