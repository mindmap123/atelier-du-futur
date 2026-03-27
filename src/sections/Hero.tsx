import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const formateurs = [
  { img: '/Enzo.jpg', name: 'Enzo' },
  { img: '/Antho.jpg', name: 'Antho' },
  { img: '/Waxx.jpg', name: 'Waxx' },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);

  const scrollToIndex = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const item = slider.children[index] as HTMLElement;
    if (item) {
      slider.scrollTo({
        left: item.offsetLeft - (slider.offsetWidth - item.offsetWidth) / 2,
        behavior: 'smooth',
      });
    }
    setActiveIndex(index);
  };

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveIndex(prev => {
          const next = (prev + 1) % formateurs.length;
          scrollToIndex(next);
          return next;
        });
      }
    }, 2800);
    return () => { if (autoScrollRef.current) clearInterval(autoScrollRef.current); };
  }, []);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const center = slider.scrollLeft + slider.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(slider.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveIndex(closest);
  };

  return (
    <section className="relative min-h-screen bg-[#252422] flex flex-col items-center justify-center overflow-x-hidden px-4 pt-16 pb-12 md:pt-0 md:pb-0 md:h-[85vh]">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eb5e28]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1816] to-transparent pointer-events-none" />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto overflow-x-hidden">

        {/* Logo */}
        <img
          src="/logo/logo-latelier.png"
          alt="L'Atelier"
          className="h-28 md:h-52 w-auto mx-auto mb-2 md:mb-3"
        />

        {/* Titre */}
        <h1 className="text-center text-[clamp(2rem,6.5vw,4.5rem)] font-black text-[#fffcf2] leading-tight mb-2 tracking-tight">
          Passer d'artisan<br />
          <span className="text-[#eb5e28]">à patron rentable.</span>
        </h1>



        {/* ── MOBILE : slider ── */}
        <div className="md:hidden mb-8 overflow-visible overflow-x-hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            onTouchStart={() => { isPausedRef.current = true; }}
            onTouchEnd={() => { setTimeout(() => { isPausedRef.current = false; }, 2000); }}
            className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 px-[30%]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {formateurs.map((formateur, index) => (
              <div
                key={index}
                onClick={() => scrollToIndex(index)}
                className="snap-center flex-shrink-0 w-[70vw] max-w-[260px] transition-all duration-500"
                style={{
                  transform: activeIndex === index ? 'scale(1.1)' : 'scale(0.9)',
                  opacity: activeIndex === index ? 1 : 0.45,
                  filter: activeIndex === index ? 'none' : 'blur(1.5px)',
                }}
              >
                <div className={`w-full rounded-xl transition-all duration-500 ${
                  activeIndex === index
                    ? 'border-2 border-[#eb5e28] shadow-2xl shadow-black/60'
                    : 'border border-white/10'
                }`}>
                  <img src={formateur.img} alt={formateur.name} className="w-full h-auto object-contain block" />
                </div>
              </div>
            ))}
          </div>

          {/* Prénom sous la photo active */}
          <p 
            className="text-center mt-3 text-xl font-black"
            style={{
              color: '#eb5e28',
              textShadow: '0 0 8px #eb5e28, 0 0 20px #eb5e28aa, 0 0 40px #eb5e2855',
            }}
          >
            {formateurs[activeIndex].name}
          </p>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {formateurs.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-6 h-3 bg-[#eb5e28]' : 'w-3 h-3 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP : 3 portraits côte à côte ── */}
        <div className="hidden md:flex items-end justify-center gap-8 mb-12">
          {formateurs.map((formateur, index) => (
            <div key={index} className="group flex-1 max-w-[260px]">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl border border-[#eb5e28]/30 shadow-2xl shadow-black/50 group-hover:border-[#eb5e28] group-hover:shadow-[#eb5e28]/20 transition-all duration-400">
                <img
                  src={formateur.img}
                  alt={formateur.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p 
                className="text-center mt-3 text-sm font-bold transition-colors duration-300"
                style={{
                  color: '#eb5e28',
                  textShadow: '0 0 8px #eb5e28, 0 0 20px #eb5e28aa, 0 0 40px #eb5e2855',
                }}
              >
                {formateur.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://www.skool.com/latelier-4560"
          className="btn-primary inline-flex items-center gap-2 mx-auto text-sm md:text-base px-8 py-4 font-bold tracking-wide uppercase relative z-50"
        >
          Voir la formation
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </a>

        {/* Preuve */}
        <p className="text-[#6b7280] text-xs mt-4 tracking-wide">
          30 places disponibles
        </p>

      </div>
    </section>
  );
}
