import { Smartphone, MessageCircle, HelpCircle, Radio, Infinity, Trophy } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Accessible partout, tout le temps',
    desc: 'App mobile + desktop. Tu regardes une vidéo entre deux chantiers, tu poses une question depuis le van. Tout est là, en permanence.'
  },
  {
    icon: MessageCircle,
    title: 'Communauté d\'artisans actifs',
    desc: 'Tu n\'es pas seul dans une salle de classe virtuelle vide. Tu rejoins un groupe d\'artisans qui avancent comme toi, qui partagent leurs chantiers, leurs galères et leurs victoires.'
  },
  {
    icon: HelpCircle,
    title: 'Pose tes questions, obtiens des réponses',
    desc: 'Un devis qui coince, un client difficile, un doute sur ta structure juridique. Tu poses dans le fil, Enzo, Antho ou Waxx répond directement.'
  },
  {
    icon: Radio,
    title: 'Lives & sessions collectives',
    desc: 'Des sessions en direct régulières pour aller plus loin, répondre aux questions en temps réel et travailler ensemble sur les cas concrets des membres.'
  },
  {
    icon: Infinity,
    title: 'Accès à vie, sans abonnement',
    desc: 'Tu paies une fois. Tu accèdes pour toujours. Pas d\'abonnement mensuel, pas de contenu qui disparaît. Les mises à jour futures sont incluses.'
  },
  {
    icon: Trophy,
    title: 'Progression et motivation',
    desc: 'Skool intègre un système de niveaux et de points. Tu vois ta progression, tu te compares aux autres membres, tu restes motivé sur la durée.'
  }
];

export default function Skool() {
  return (
    <section className="py-20 bg-[#fffcf2] px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Skool Badge */}
        <div className="inline-flex items-center gap-3 bg-[#eb5e28]/10 border border-[#eb5e28]/30 rounded-full px-5 py-2 mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-[#eb5e28]"></div>
          <span className="text-[#c95520] text-sm font-bold uppercase tracking-wider">Hébergé sur Skool</span>
        </div>

        <span className="text-[#eb5e28] text-xs font-bold uppercase tracking-widest block mb-3">La plateforme</span>
        
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#252422] leading-tight mb-4">
          Pas juste des vidéos.<br/>
          <span className="text-[#eb5e28]">Une vraie communauté d'artisans.</span>
        </h2>
        
        <p className="text-[#6b7280] text-lg mb-12 max-w-2xl mx-auto">
          La formation tourne sur Skool, la meilleure plateforme du moment pour apprendre ET être entouré. 
          Voilà ce que ça change concrètement.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-[#e5e7eb] rounded-xl p-7 text-left hover:border-[#eb5e28] hover:shadow-lg transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-[#eb5e28] mb-4" />
              <h3 className="text-[#252422] font-extrabold text-base mb-3">{feature.title}</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="bg-[#252422] rounded-xl p-7 flex items-center justify-between gap-6 flex-wrap max-w-3xl mx-auto mt-12">
          <p className="text-white text-lg font-bold leading-relaxed flex-1 min-w-[220px]">
            La formation + la communauté + les lives.<br/>
            <span className="text-[#eb5e28]">Tout au même endroit. Un seul accès.</span>
          </p>
          <div className="bg-[#eb5e28] text-white text-sm font-extrabold px-6 py-3 rounded-lg uppercase tracking-wide whitespace-nowrap">
            Inclus dans les 1 500 €
          </div>
        </div>
      </div>
    </section>
  );
}
