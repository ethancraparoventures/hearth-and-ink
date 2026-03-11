import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF5EB] text-[#3B3128] font-mono selection:bg-[#A0614A]/20 selection:text-[#1E1A15] relative p-6 md:p-12 overflow-x-hidden">
      {/* Soft Paper Grain Texture */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-50" />
      
      {/* Soft Watercolor Blobs (Ambient Warmth) */}
      <div className="fixed top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#C8DAE2]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#9AB89E]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-[20%] left-[20%] w-[40%] h-[40%] bg-[#E8D0C7]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container: The Desk / Workspace */}
      <div className="relative z-40 max-w-5xl mx-auto flex flex-col gap-16">
        
        {/* Navigation - Soft & Typewritten */}
        <nav className="flex flex-col md:flex-row justify-between items-center gap-6 py-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-[#1E1A15]">The Drawn House</h1>
            <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 mt-1">Est. 2026 &bull; Hand-Crafted In Maryland</p>
          </div>
          <div className="flex gap-10 text-[11px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-[#5A7382] transition-colors">Portfolio</a>
            <a href="#" className="hover:text-[#6E8C72] transition-colors">Realtors</a>
            <a href="#" className="text-[#A0614A] underline decoration-wavy underline-offset-4 decoration-[#A0614A]/30">Order Sketch</a>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
               <span className="inline-block px-3 py-1 bg-[#4A6350]/5 text-[#4A6350] text-[9px] uppercase tracking-[0.3em] font-bold rounded-full">
                 Warmth, Mist & Ink
               </span>
               <h2 className="text-5xl md:text-7xl leading-[1.1] font-bold tracking-tighter text-[#1E1A15]">
                 Your home, <br /> 
                 <span className="italic text-[#5A7382] font-normal underline decoration-[#A0614A]/20">restylized</span> <br />
                 by hand.
               </h2>
            </div>
            
            <p className="text-lg leading-[1.8] opacity-70 max-w-md">
              We take the architecture of your life and turn it into a soft, hand-drawn memory. 
              Beautifully imperfect penmanship on heavy cotton paper.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#1E1A15] text-[#FAF5EB] px-12 py-6 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#5A7382] transition-all transform hover:scale-[1.02] shadow-xl">
                Start My Order &mdash; $49
              </button>
            </div>
            
            <div className="pt-4 flex items-center gap-4 text-[10px] opacity-40 italic uppercase tracking-widest">
              <div className="h-[1px] w-8 bg-[#1E1A15]" />
              <span>Gently imperfect. Remarkably human.</span>
            </div>
          </div>

          {/* The Visual Art Piece - Softened & Layered */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group">
              {/* Soft Ambient Shadow Layer */}
              <div className="absolute -inset-8 bg-black/5 blur-[60px] rounded-full group-hover:bg-[#A0614A]/5 transition-colors duration-1000" />
              
              {/* Stacked Paper Effect - Soft & Rounded */}
              <div className="relative bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-1 transform rotate-1 group-hover:rotate-0 transition-all duration-700">
                <div className="bg-[#FAF5EB] p-10 border border-[#1E1A15]/5 relative">
                   
                   {/* Artwork Window */}
                   <div className="aspect-square bg-white shadow-inner border border-[#1E1A15]/5 flex flex-col items-center justify-center p-12 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                      <div className="relative text-center space-y-4 opacity-10">
                         <div className="text-4xl italic">Hearth & Ink</div>
                         <div className="h-[1px] w-12 bg-black mx-auto" />
                         <p className="text-[8px] uppercase tracking-[0.5em] font-bold">Portrait Series 01</p>
                      </div>
                   </div>

                   {/* Artwork Details - Full Typewriter Mode */}
                   <div className="mt-10 space-y-3">
                      <div className="flex justify-between items-baseline">
                         <h3 className="text-2xl font-bold italic tracking-tight text-[#1E1A15]">The Miller Residence</h3>
                         <span className="text-[9px] uppercase tracking-widest opacity-30 font-bold">VOL. 01/26</span>
                      </div>
                      <div className="flex flex-col gap-1">
                         <p className="text-[10px] uppercase tracking-[0.2em] text-[#5A7382] font-bold">Maryland, USA</p>
                         <p className="text-[10px] opacity-40 leading-relaxed max-w-[240px]">
                           FINE-LINER PEN ON 300GSM COTTON RAG. <br/> 
                           MIST BLUE & SLATE ACCENTS.
                         </p>
                      </div>
                   </div>

                   {/* Hand-signed Stamp */}
                   <div className="absolute bottom-10 right-8">
                      <div className="w-14 h-14 rounded-full border border-[#A0614A]/30 flex items-center justify-center text-[#A0614A] text-[7px] font-bold uppercase tracking-widest text-center p-2 rotate-[-15deg] opacity-60">
                         Hand <br/> Drawn
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Second Sheet Peeking Out */}
              <div className="absolute inset-0 bg-[#F3E9D6] shadow-md -z-10 translate-x-3 translate-y-3 -rotate-2 border border-[#1E1A15]/5" />
            </div>
          </div>

        </main>

        {/* Process Section - Soft Typewriter Layout */}
        <section className="py-24 grid md:grid-cols-3 gap-12 border-t border-[#1E1A15]/5 mt-12">
          <div className="space-y-4 group">
            <span className="text-[#A0614A] font-bold text-lg">/ 01</span>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1E1A15]">The DNA Trace</h4>
            <p className="text-sm leading-relaxed opacity-60 italic">
              Upload your photo. We extract the geometry of the home to ensure every gable and window matches perfectly.
            </p>
          </div>
          <div className="space-y-4 group">
            <span className="text-[#5A7382] font-bold text-lg">/ 02</span>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1E1A15]">The Soul Pass</h4>
            <p className="text-sm leading-relaxed opacity-60 italic">
              Our artists use the "Drawn House" engine to redraw your home with wobbly, human-like penmanship.
            </p>
          </div>
          <div className="space-y-4 group">
            <span className="text-[#6E8C72] font-bold text-lg">/ 03</span>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1E1A15]">The Delivery</h4>
            <p className="text-sm leading-relaxed opacity-60 italic">
              A high-resolution digital masterpiece delivered to your inbox within 24 hours. Warm, personal, and timeless.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 flex flex-col md:flex-row justify-between items-center border-t border-[#1E1A15]/5 gap-8 opacity-40">
           <p className="text-[10px] uppercase tracking-[0.5em] font-bold">The Drawn House &copy; 2026</p>
           <div className="flex gap-8 text-[9px] uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-[#1E1A15] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#1E1A15] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#1E1A15] transition-colors">Terms</a>
           </div>
        </footer>
      </div>

      {/* Aesthetic Side Ribbon */}
      <div className="hidden xl:block fixed right-0 top-1/2 -translate-y-1/2 bg-[#1E1A15] text-[#FAF5EB] p-4 rotate-180" style={{ writingMode: 'vertical-rl' }}>
        <span className="text-[9px] uppercase tracking-[0.5em] font-bold">A Loading Screen Labs Production</span>
      </div>
    </div>
  );
}
