import { GraduationCap, Globe, MapPin, Palette, Users, ArrowRight } from 'lucide-react';

const packageItems = [
  {
    icon: GraduationCap,
    name: 'Formation complète : 7 modules',
    outcome: 'Tu maîtrises le business, la compta, le marketing et la gestion client — avec du contenu concret et actionnable.',
  },
  {
    icon: Globe,
    name: 'Site internet professionnel créé pour toi',
    outcome: 'Tes clients te trouvent sur Google avant tes concurrents. On le crée pour toi, clé en main.',
  },
  {
    icon: MapPin,
    name: 'Google My Business configuré & optimisé',
    outcome: 'Tu apparais en premier dans les recherches locales dès le lancement.',
  },
  {
    icon: Palette,
    name: 'Logo professionnel',
    outcome: 'Une identité visuelle qui rassure tes clients dès le premier contact.',
  },
  {
    icon: Users,
    name: 'Accès communauté Skool',
    outcome: 'Des artisans qui avancent comme toi, disponibles 7j/7 pour se serrer les coudes.',
  },
];

export default function Offer() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[#eb5e28] text-xs font-bold uppercase tracking-widest block mb-3">L'offre</span>

        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-[#252422] leading-tight mb-4">
          Ce programme n'est pas juste une formation.<br/>
          <span className="text-[#eb5e28]">C'est ton pack de lancement.</span>
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
              className="flex items-start gap-4 p-5 border-b border-[#f3f4f6] last:border-b-0 text-left"
            >
              <item.icon className="w-5 h-5 text-[#eb5e28] flex-shrink-0 mt-1" />
              <div>
                <p className="text-[#252422] font-bold text-base">{item.name}</p>
                <p className="text-[#6b7280] text-sm mt-1">{item.outcome}</p>
              </div>
            </div>
          ))}

          <div className="bg-[#eb5e28]/5 border-t-2 border-[#eb5e28] p-6 text-center">
            <p className="text-[#252422] font-black text-xl">Tu repars opérationnel — pas juste formé.</p>
            <p className="text-[#6b7280] text-sm mt-2">Tout est en place avant même ta première mission.</p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => { const c = (window as any).Cal; if (c?.ns?.['l-atelier']) { c.ns['l-atelier']('modal', { calLink: 'l-atelier', config: { layout: 'month_view' } }); } else { window.open('https://cal.com/l-atelier', '_blank'); } }}
          className="btn-primary flex items-center gap-2 mx-auto w-fit text-xl px-14 py-6 shadow-2xl shadow-[#eb5e28]/40 mt-10"
        >
          Réserver un appel
          <ArrowRight className="w-6 h-6" />
        </button>

      </div>
    </section>
  );
}
