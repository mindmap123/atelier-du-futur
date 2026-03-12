import { X } from 'lucide-react';

const painPoints = [
  "Tu n'oses pas quitter ton employeur par peur de ne pas trouver de clients régulièrement",
  "Tu fixes tes prix au feeling et tu travailles parfois pour un résultat qui ne vaut pas le temps passé",
  "Tu n'as pas de site internet, pas de présence en ligne : tu perds des chantiers face à des concurrents moins compétents",
  "Tu passes des heures sur les devis, les factures, les relances au lieu de bosser sur le terrain",
  "Tu ne sais pas comment utiliser ton chômage, l'ACRE, ou un prêt bancaire pour te lancer sans risque",
  "Tu ne sais pas quelle structure choisir (auto-entrepreneur, SASU, EURL…) et tu as peur de te planter dès le départ"
];

export default function Problem() {
  return (
    <section className="py-20 bg-[#fffcf2] px-4">
      <div className="max-w-4xl mx-auto">
        <span className="text-[#eb5e28] text-xs font-bold uppercase tracking-widest block mb-3">Le problème</span>
        
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-[#252422] leading-tight mb-4">
          Tu connais ton métier sur le bout des doigts.<br/>
          Mais personne ne t'a appris à être <span className="text-[#eb5e28]">patron.</span>
        </h2>
        
        <p className="text-[#403d39] text-lg mb-10">
          Et c'est pas de ta faute. On t'a formé à faire le chantier : pas à gérer la boîte.
        </p>

        {/* Pain Points */}
        <div className="space-y-3">
          {painPoints.map((pain, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-white border border-[#e5e7eb] border-l-4 border-l-[#ef4444] p-4 rounded-lg"
            >
              <X className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-0.5" />
              <p className="text-[#252422] text-base">{pain}</p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="bg-[#252422] text-[#fffcf2] p-8 rounded-xl mt-12 text-center">
          <p className="text-lg font-bold leading-relaxed">
            Le problème, c'est pas ton niveau<br/>
            <span className="text-[#eb5e28]">c'est que personne ne t'a donné le système.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
