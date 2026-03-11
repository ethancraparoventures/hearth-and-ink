import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D2926] font-serif">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-semibold tracking-tight">Hearth & Ink</div>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-sans opacity-70">
          <a href="#" className="hover:opacity-100 transition-opacity">Portfolio</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Process</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Pricing</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Order</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl leading-[1.1] font-medium">
            Your home, <br /> 
            <span className="italic">immortalized</span> <br />
            in ink.
          </h1>
          <p className="text-xl text-[#5E5851] max-w-lg leading-relaxed">
            We turn your photographs into beautiful, hand-drawn architectural sketches. 
            The perfect gift for new homeowners, and a signature closing gift for realtors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#2D2926] text-[#FDFCFB] px-8 py-4 rounded-sm text-lg font-medium hover:bg-[#45403C] transition-colors">
              Create My Sketch — $49
            </button>
            <button className="border border-[#2D2926] px-8 py-4 rounded-sm text-lg font-medium hover:bg-[#2D2926] hover:text-[#FDFCFB] transition-all">
              View Portfolio
            </button>
          </div>
          <div className="pt-8 flex items-center space-x-4 text-sm font-sans opacity-60">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#FDFCFB] bg-zinc-300" />
              ))}
            </div>
            <p>Trusted by 500+ top-producing realtors</p>
          </div>
        </div>

        <div className="relative aspect-[4/5] bg-white p-8 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="absolute inset-0 border-[1px] border-[#2D2926]/5 m-4" />
          <div className="h-full w-full bg-[#FAFAFA] border border-zinc-100 flex items-center justify-center relative overflow-hidden">
             {/* Placeholder for the architectural sketch */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
             <div className="relative z-10 p-8">
                {/* We'll replace this with an actual sample soon */}
                <div className="w-full aspect-square border-2 border-[#2D2926]/10 rounded-full flex items-center justify-center italic text-zinc-400">
                  Architectural Sketch Preview
                </div>
             </div>
          </div>
          <div className="mt-8 text-center space-y-1">
            <p className="text-xl italic font-medium">"The Miller Residence"</p>
            <p className="text-sm uppercase tracking-widest opacity-40 font-sans">Craftsman Bungalow • 2026</p>
          </div>
        </div>
      </main>

      {/* Trust Section */}
      <section className="bg-[#F8F5F2] py-20 border-y border-[#2D2926]/5">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
             <div className="text-3xl">🖋️</div>
             <h3 className="text-xl font-semibold">Hand-Drawn Quality</h3>
             <p className="text-[#5E5851] leading-relaxed">
               No filters. Our engine uses advanced architectural logic to redraw your home with authentic, wobbly penmanship.
             </p>
          </div>
          <div className="space-y-4">
             <div className="text-3xl">⏱️</div>
             <h3 className="text-xl font-semibold">24-Hour Turnaround</h3>
             <p className="text-[#5E5851] leading-relaxed">
               Your digital masterpiece is delivered to your inbox within 24 hours, ready to be printed and framed.
             </p>
          </div>
          <div className="space-y-4">
             <div className="text-3xl">🏠</div>
             <h3 className="text-xl font-semibold">The Perfect Gift</h3>
             <p className="text-[#5E5851] leading-relaxed">
               High perceived value, zero physical overhead. The ultimate "closing gift" for realtors who care about style.
             </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm opacity-40 font-sans tracking-widest">
        &copy; 2026 HEARTH & INK • A LOADING SCREEN LABS PRODUCTION
      </footer>
    </div>
  );
}
