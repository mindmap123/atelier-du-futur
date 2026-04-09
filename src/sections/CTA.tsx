import { ArrowRight, Check, AlertCircle, Phone, Target, TrendingUp } from 'lucide-react';

const gains = [
  { icon: Target, text: 'On analyse ta situation réelle — chantiers, charges, marges.' },
  { icon: TrendingUp, text: 'On t\'explique exactement ce que le programme va changer pour toi.' },
  { icon: Phone, text: 'Si ça ne matche pas, on te le dit.' },
];

const included = [
  'Formation complète',
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

        <p className="text-[#d8d0c4] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Un appel de 30 minutes suffit pour savoir si le programme est fait pour toi.
          Sans pression. Sans baratin.
        </p>

        {/* What happens on the call */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {gains.map((g, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <g.icon className="w-6 h-6 text-[#eb5e28] mb-3" />
              <p className="text-[#d8d0c4] text-sm leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>

        {/* Included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
          <div className="text-left bg-white/5 border border-white/20 p-4 rounded-lg">
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
        <button
          onClick={() => { const c = (window as any).Cal; if (c?.ns?.['l-atelier']) { c.ns['l-atelier']('modal', { calLink: 'l-atelier', config: { layout: 'month_view' } }); } else { window.open('https://cal.com/l-atelier', '_blank'); } }}
          className="btn-primary flex items-center gap-2 mx-auto w-fit text-xl px-14 py-6 shadow-2xl shadow-[#eb5e28]/40"
        >
          Réserver un appel
          <ArrowRight className="w-6 h-6" />
        </button>

        <p className="text-[#cfc5b5] text-sm mt-6">
          Échange de 30 min pour voir si la formation te correspond.
        </p>
      </div>
    </section>
  );
}
