import { ArrowRight, Check, AlertCircle } from 'lucide-react';

const included = [
  'Formation complète 40h+',
  'Coaching hebdomadaire',
  'Communauté privée',
  'Templates & contrats',
];

const bonus = [
  'Site internet professionnel',
  'Google My Business optimisé',
  'Logo sur mesure',
];

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Scarcity Badge */}
        <div className="inline-flex items-center gap-2 bg-[#ef4444]/20 border border-[#ef4444] px-4 py-2 rounded-full mb-8 animate-pulse">
          <AlertCircle className="w-4 h-4 text-[#ef4444]" />
          <span className="text-[#ef4444] text-sm font-bold uppercase">30 premières places uniquement</span>
        </div>

        <h2 className="text-[clamp(2rem,5vw,3rem)] font-black text-[#fffcf2] uppercase mb-4 leading-tight">
          Prêt à passer au niveau supérieur ?<br/>
          <span className="text-[#eb5e28]">Le chantier commence maintenant.</span>
        </h2>

        <p className="text-[#d8d0c4] text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Site créé. Google My Business actif. Logo pro. Système client en place. 
          Il ne manque plus que toi.
        </p>

        {/* Price Comparison */}
        <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <p className="text-[#6b7280] text-xs uppercase tracking-wider mb-2">Après le lancement</p>
            <p className="text-[#6b7280] text-4xl font-black line-through">2 000 €</p>
            <p className="text-[#6b7280] text-sm mt-2">Prix standard</p>
          </div>
          
          <div className="text-[#eb5e28] text-3xl">→</div>
          
          <div className="bg-[#eb5e28]/10 border-2 border-[#eb5e28] rounded-xl p-6 text-center">
            <p className="text-[#eb5e28] text-xs uppercase tracking-wider mb-2 font-bold">🔥 Prix lancement</p>
            <p className="text-[#fffcf2] text-5xl font-black">1 500 €</p>
            <p className="text-[#cbd5e1] text-sm mt-2">Tu économises 500 €</p>
          </div>
        </div>

        {/* Included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
          <div className="text-left">
            <p className="text-[#fffcf2] font-bold text-sm uppercase mb-3">La formation :</p>
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-[#eb5e28]" />
                <span className="text-[#ccc5b9] text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-left bg-[#eb5e28]/10 p-4 rounded-lg border border-[#eb5e28]/30">
            <p className="text-[#eb5e28] font-bold text-sm uppercase mb-3">Bonus (30 premiers) :</p>
            {bonus.map((item, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-[#eb5e28]" />
                <span className="text-[#fffcf2] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="https://www.skool.com/your-community" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2 mx-auto w-fit text-xl px-14 py-6 shadow-2xl shadow-[#eb5e28]/40"
        >
          Rejoindre sur Skool
          <ArrowRight className="w-6 h-6" />
        </a>

        <p className="text-[#cfc5b5] text-sm mt-6">
          Communauté Skool incluse. Accompagnement à chaque étape.
        </p>
      </div>
    </section>
  );
}
