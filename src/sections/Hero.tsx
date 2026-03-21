import { ArrowRight } from 'lucide-react';

const formateurs = [
  { img: '/Enzo.jpg', name: 'Enzo' },
  { img: '/Antho.jpg', name: 'Antho' },
  { img: '/Waxx.jpg', name: 'Waxx' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#252422] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eb5e28]/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black text-[#fffcf2] uppercase tracking-tight leading-none mb-4">
          <span className="text-[#eb5e28]">L'ATELIER</span>
        </h1>
        
        <p className="text-[#ccc5b9] text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          La formation qui transforme les artisans du bâtiment en entrepreneurs de génie
        </p>

        {/* Formateurs - Style Avengers */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          {formateurs.map((formateur, index) => (
            <div key={index} className="relative group">
              <div className="w-48 h-64 md:w-56 md:h-80 overflow-hidden rounded-lg border-2 border-[#eb5e28]/50 group-hover:border-[#eb5e28] transition-all duration-300">
                <img 
                  src={formateur.img} 
                  alt={formateur.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#252422] to-transparent p-4">
                <p className="text-[#eb5e28] font-bold text-base uppercase tracking-wider">{formateur.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a 
          href="https://www.skool.com/latelier-4560" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2 mx-auto w-fit mt-20"
        >
          Rejoindre la formation
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
