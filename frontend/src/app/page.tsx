import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF5EB] text-[#1E1A15] selection:bg-[#A0614A] selection:text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-10 max-w-7xl mx-auto border-b border-[#1E1A15]/5">
        <div className="text-2xl font-serif italic tracking-tight">The Drawn House</div>
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.2em] font-sans font-medium opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Portfolio</a>
          <a href="#" className="hover:opacity-100 transition-opacity">The Process</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Realtor Gifting</a>
          <a href="#" className="hover:opacity-100 transition-opacity px-6 py-3 border border-[#1E1A15] -mt-3">Order Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-24 lg:py-40 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-4">
             <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#A0614A]">Hand-Crafted Aesthetic</span>
             <h1 className="text-6xl md:text-8xl leading-[1] font-serif font-light tracking-tight">
               Your Home, <br /> 
               <span className="italic font-normal">Drawn.</span>
             </h1>
          </div>
          
          <p className="text-2xl text-[#3B3128] max-w-xl leading-[1.6] font-serif font-light">
             Parchment, ink, and a human touch. We turn your photographs into <span className="italic">immortal</span> architectural sketches. 
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <button className="bg-[#1E1A15] text-[#FAF5EB] px-12 py-5 text-sm uppercase tracking-widest font-sans font-bold hover:bg-[#3B3128] transition-all transform hover:-translate-y-1 shadow-lg">
              Start Your Sketch — $49
            </button>
            <button className="border border-[#1E1A15] px-12 py-5 text-sm uppercase tracking-widest font-sans font-bold hover:bg-[#1E1A15] hover:text-[#FAF5EB] transition-all transform hover:-translate-y-1">
              The Gallery
            </button>
          </div>
          
          <div className="pt-12 flex items-center space-x-6">
             <div className="h-[1px] w-20 bg-[#1E1A15]/20" />
             <p className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold opacity-40 italic text-[#3B3128]">
               Crafted by hand. Kept forever.
             </p>
          </div>
        </div>

        {/* Art Preview Section */}
        <div className="lg:col-span-5 relative group">
          {/* Decorative Back Layers */}
          <div className="absolute -inset-4 bg-[#ECE3D0] -rotate-3 transition-transform group-hover:-rotate-1 duration-700" />
          <div className="absolute -inset-4 bg-[#F3E9D6] rotate-2 transition-transform group-hover:rotate-1 duration-700 shadow-xl" />
          
          {/* Main Paper */}
          <div className="relative aspect-[4/5] bg-[#FAF5EB] p-12 shadow-2xl overflow-hidden flex flex-col">
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
             
             {/* Sketch Frame */}
             <div className="flex-1 flex items-center justify-center relative border-[0.5px] border-[#1E1A15]/10">
                <div className="text-center space-y-4 px-12 py-20 bg-white/40 backdrop-blur-sm border border-white/20">
                   <div className="w-12 h-[1px] bg-[#1E1A15]/40 mx-auto" />
                   <p className="font-serif italic text-xl text-[#3B3128]/60">Architectural Sketch <br/> Placeholder</p>
                   <div className="w-12 h-[1px] bg-[#1E1A15]/40 mx-auto" />
                </div>
             </div>

             <div className="mt-12 text-center space-y-2 border-t border-[#1E1A15]/5 pt-8">
               <p className="text-2xl italic font-serif text-[#1E1A15]">The Miller Residence</p>
               <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-sans font-bold">Bungalow • Maryland</p>
             </div>
          </div>
        </div>
      </main>

      {/* Aesthetic Accents */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#1E1A15] via-[#A0614A] to-[#5A7382]" />
    </div>
  );
}
