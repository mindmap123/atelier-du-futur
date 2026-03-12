import { GraduationCap, Globe, MapPin, Palette, Users } from 'lucide-react';

const packageItems = [
  { icon: GraduationCap, name: 'Formation complète : 7 modules', value: '997 €' },
  { icon: Globe, name: 'Site internet professionnel créé pour toi', value: '800 €' },
  { icon: MapPin, name: 'Google My Business configuré & optimisé', value: '300 €' },
  { icon: Palette, name: 'Logo professionnel', value: '200 €' },
  { icon: Users, name: 'Accès communauté Skool (entraide entre artisans)', value: '197 €' },
];

export default function Offer() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[#eb5e28] text-xs font-bold uppercase tracking-widest block mb-3">L'offre</span>
        
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-[#252422] leading-tight mb-4">
          Ce programme n'est pas juste une formation.<br/>
          <span className="text-[#eb5e28]">C'est ton lancement.</span>
        </h2>
        
        <p className="text-[#6b7280] text-lg mb-12 max-w-2xl mx-auto">
          Contrairement aux autres formations qui te donnent de la théorie, tu repars avec tout en place : prêt à prendre des clients dès le lendemain.
        </p>

        {/* Package Box */}
        <div className="bg-white border-2 border-[#eb5e28] rounded-2xl overflow-hidden max-w-2xl mx-auto shadow-lg">
          <div className="bg-[#eb5e28] text-white py-5 px-6">
            <h3 className="text-lg font-black uppercase tracking-wide">Ce que tu reçois</h3>
          </div>
          
          {packageItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between gap-4 p-5 border-b border-[#f3f4f6] last:border-b-0"
            >
              <div className="flex items-center gap-3 text-left">
                <item.icon className="w-5 h-5 text-[#eb5e28] flex-shrink-0" />
                <span className="text-[#252422] text-base">{item.name}</span>
              </div>
              <span className="text-[#6b7280] text-sm line-through whitespace-nowrap">{item.value}</span>
            </div>
          ))}
          
          <div className="bg-[#eb5e28]/5 border-t-2 border-[#eb5e28] p-6 flex items-center justify-between flex-wrap gap-4">
            <span className="text-[#6b7280] text-sm">Valeur totale du programme</span>
            <div className="text-right">
              <span className="text-[#6b7280] text-lg line-through mr-3">2 494 €</span>
              <span className="text-[#eb5e28] text-3xl font-black">1 500 €</span>
            </div>
          </div>
        </div>

        {/* Clé en main */}
        <div className="bg-[#10b981]/5 border border-[#10b981] rounded-xl p-6 mt-10 text-left max-w-2xl mx-auto">
          <p className="text-[#374151] text-base leading-relaxed">
            💡 <strong className="text-[#10b981]">Pourquoi seulement 30 places ?</strong><br/>
            Parce que ton site internet, ton Google My Business et ton logo sont créés{' '}
            <strong className="text-[#10b981]">manuellement pour toi</strong>. Ce n'est pas du contenu en masse : 
            c'est un accompagnement individuel. On ne peut pas le faire pour 200 personnes à la fois.
          </p>
        </div>
      </div>
    </section>
  );
}
