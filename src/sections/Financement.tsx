import { ArrowRight, Euro, Shield, BookOpen, Briefcase } from 'lucide-react';

const options = [
  {
    icon: Briefcase,
    title: "Contrat d'apprentissage",
    badge: 'Le plus courant',
    badgeColor: 'bg-[#1D4ED8] text-white',
    description: "Vous êtes salarié de l'entreprise. La formation est financée par l'OPCO de l'entreprise. Vous percevez un salaire chaque mois.",
    details: ['0€ à payer', 'Salaire mensuel garanti', 'Financement OPCO', 'Pour les moins de 30 ans'],
    highlight: true,
  },
  {
    icon: BookOpen,
    title: 'CPF (Compte Personnel de Formation)',
    badge: 'Reconversion',
    badgeColor: 'bg-[#F59E0B] text-[#0A0F1E]',
    description: "Utilisez vos droits CPF pour financer tout ou partie de votre formation. Idéal pour une reconversion professionnelle.",
    details: ['Droits accumulés', 'Démarche autonome', 'Via moncompteformation.gouv.fr', 'Complément possible'],
    highlight: false,
  },
  {
    icon: Shield,
    title: 'France Travail (Pôle Emploi)',
    badge: 'Demandeur d\'emploi',
    badgeColor: 'bg-slate-600 text-white',
    description: "Si vous êtes demandeur d'emploi, France Travail peut financer votre formation et maintenir vos allocations le temps du cursus.",
    details: ['Maintien des allocations', 'Sur accord France Travail', 'Dossier à monter', 'Accompagnement possible'],
    highlight: false,
  },
  {
    icon: Euro,
    title: 'Prise en charge entreprise',
    badge: 'Contrat pro',
    badgeColor: 'bg-sky-600 text-white',
    description: "Votre employeur actuel peut financer votre formation dans le cadre d'un plan de développement des compétences ou d'un contrat de professionnalisation.",
    details: ['Via plan de formation', 'Accord employeur requis', 'Maintien du salaire', 'Pour salariés en poste'],
    highlight: false,
  },
];

export default function Financement() {
  return (
    <section id="financement" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-[#EFF6FF] px-4 py-2 rounded-full">
            Financement
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0A0F1E] mt-4 mb-4">
            Votre formation sans frais
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            L'alternance est 100% financée. Plusieurs dispositifs existent selon votre situation. Notre équipe vous guide vers le meilleur choix.
          </p>
        </div>

        {/* Options grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {options.map((opt, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 flex flex-col transition-all duration-300 hover:shadow-lg ${
                opt.highlight
                  ? 'border-[#1D4ED8] bg-[#EFF6FF] shadow-md'
                  : 'border-gray-100 bg-[#F8FAFC]'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${opt.highlight ? 'bg-[#1D4ED8]' : 'bg-white border border-gray-200'}`}>
                  <opt.icon className={`w-6 h-6 ${opt.highlight ? 'text-white' : 'text-[#1D4ED8]'}`} />
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${opt.badgeColor}`}>{opt.badge}</span>
              </div>

              <h3 className="font-black text-[#1E293B] text-base mb-2">{opt.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed mb-4 flex-1">{opt.description}</p>

              <div className="space-y-2 pt-4 border-t border-gray-200/50">
                {opt.details.map((d, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${opt.highlight ? 'bg-[#1D4ED8]' : 'bg-gray-400'}`} />
                    <span className="text-[#64748B] font-medium">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-gradient-to-r from-[#0A0F1E] to-[#1E3A8A] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black mb-2">Pas sûr(e) de votre financement ?</h3>
            <p className="text-white/60 max-w-lg">
              Nos conseillers font le point avec vous gratuitement sur le meilleur dispositif selon votre situation et vous aident à constituer votre dossier.
            </p>
          </div>
          <a href="#contact" className="btn-gold flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            Simuler mon financement
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
