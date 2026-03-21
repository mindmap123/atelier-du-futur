import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 1200, suffix: '+', label: 'Alternants recrutés depuis notre création', color: 'text-[#1D4ED8]' },
  { value: 500, suffix: '+', label: 'Étudiants actuellement en formation', color: 'text-[#F59E0B]' },
  { value: 150, suffix: '+', label: 'Entreprises partenaires actives', color: 'text-[#1D4ED8]' },
  { value: 8, suffix: ' ans', label: "D'expérience dans l'alternance", color: 'text-[#F59E0B]' },
  { value: 24, suffix: '', label: 'Formations disponibles tous niveaux', color: 'text-[#1D4ED8]' },
  { value: 98, suffix: '%', label: 'Taux de satisfaction étudiant', color: 'text-[#F59E0B]' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString('fr-FR')}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(29,78,216,0.08) 1px, transparent 0)', backgroundSize: '48px 48px'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1D4ED8]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-4 py-2 rounded-full">
            EMMA en chiffres
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white mt-4">
            Des résultats qui parlent
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center group"
            >
              <div className={`text-[clamp(2.5rem,5vw,4rem)] font-black ${s.color} mb-3 leading-none`}>
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/50 text-sm font-medium leading-tight max-w-[180px] mx-auto">{s.label}</div>
              <div className={`w-12 h-0.5 ${s.color === 'text-[#1D4ED8]' ? 'bg-[#1D4ED8]' : 'bg-[#F59E0B]'} mx-auto mt-4 group-hover:w-20 transition-all duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-bold text-white/80 italic leading-relaxed">
            "Notre mission : éveiller les talents du futur et les connecter aux opportunités du présent."
          </blockquote>
          <p className="text-white/40 mt-4 font-medium">— L'équipe EMMA</p>
        </div>

      </div>
    </section>
  );
}
