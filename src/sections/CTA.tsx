import { ArrowRight, Check, Zap } from 'lucide-react';

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
    <section className="py-20 bg-[#252422] px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#eb5e28]/20 border border-[#eb5e28] px-4 py-2 rounded-full mb-8">
          <Zap className="w-4 h-4 text-[#eb5e28]" />
          <span className="text-[#eb5e28] text-sm font-bold uppercase">Offre de lancement - 30 premiers</span>
        </div>

        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#fffcf2] uppercase mb-4">
          Prêt à <span className="text-[#eb5e28]">transformer</span> ton business ?
        </h2>

        <p className="text-[#ccc5b9] mb-8 max-w-xl mx-auto">
          Rejoins l'Atelier du Futur et accède à tout ce dont tu as besoin pour réussir
        </p>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl md:text-7xl font-black text-[#fffcf2]">1500</span>
            <span className="text-3xl md:text-4xl font-bold text-[#eb5e28]">€</span>
          </div>
          <p className="text-[#ccc5b9] mt-2">ou 3x 500€ sans frais</p>
        </div>

        {/* Included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
          <div className="text-left">
            <p className="text-[#fffcf2] font-bold text-sm uppercase mb-3">La formation :</p>
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-[#eb5e28]" />
                <span className="text-[#ccc5b9] text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-left bg-[#eb5e28]/10 p-4 rounded-lg">
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
          className="btn-primary flex items-center gap-2 mx-auto w-fit text-lg px-12 py-5"
        >
          Rejoindre sur Skool
          <ArrowRight className="w-5 h-5" />
        </a>

        <p className="text-[#403d39] text-sm mt-6">14 jours satisfait ou remboursé</p>
      </div>
    </section>
  );
}
