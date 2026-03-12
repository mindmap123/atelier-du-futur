import { Brain, Briefcase, Wrench, FileText, Globe, Megaphone, Users } from 'lucide-react';

const modules = [
  {
    icon: Brain,
    number: '01',
    title: 'Mentalité & posture d\'entrepreneur',
    subtitle: 'La fondation de tout le reste',
    desc: 'Comprendre pourquoi certains artisans réussissent et d\'autres stagnent : et adopter les bons réflexes dès le départ. Le mindset fait 80% du travail.',
    tags: ['Vidéo parcours', 'Mindset & compétences clés']
  },
  {
    icon: Briefcase,
    number: '02',
    title: 'Comment sortir du salariat sans risque',
    subtitle: 'Chômage · Sécurité financière · Timing',
    desc: 'Tout ce qu\'on ne t\'a jamais expliqué pour te lancer sans mettre ta famille en danger. Utilise les aides disponibles plutôt que de les ignorer.',
    tags: ['Prêt bancaire', 'Chômage', 'ACRE', 'Quelle structure choisir']
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Premiers investissements utiles',
    subtitle: 'Outils · Assurances · Éviter les pièges',
    desc: 'Ce qui est vraiment utile versus ce qui ruine les débutants. Téléphone, tablette, assurances : dépense ton argent là où ça rapporte.',
    tags: ['Équipement mobile', 'Assurances pro', 'Éviter les arnaques']
  },
  {
    icon: FileText,
    number: '04',
    title: 'Système de prix, devis et facturation',
    subtitle: 'Arrête de brader ton travail',
    desc: 'Grille tarifaire, devis qui convertissent, factures qui protègent. Tu fixes tes prix avec méthode : plus jamais au feeling.',
    tags: ['Grille tarifaire', 'Création de devis', 'Création de facture']
  },
  {
    icon: Globe,
    number: '05',
    title: 'Site internet & réseaux sociaux',
    subtitle: 'Être visible localement sans perdre de temps',
    desc: 'Ton site, ton Google My Business, tes réseaux : on le fait avec toi. Tu n\'as pas à devenir expert en marketing, juste à suivre le système.',
    tags: ['Google My Business', 'Site internet', 'Réseaux sociaux', 'Stratégie avis clients']
  },
  {
    icon: Megaphone,
    number: '06',
    title: 'Publicité & démarchage',
    subtitle: 'Trouver des clients régulièrement',
    desc: 'Un système de prospection que tu peux répéter chaque semaine. Cibler les bons prospects, démarcher les fournisseurs, adopter le bon vocabulaire.',
    tags: ['Création de supports', 'Cibler les prospects', 'Démarchage commercial']
  },
  {
    icon: Users,
    number: '07',
    title: 'Gestion client & chantiers',
    subtitle: 'Organisation · Conflits · Retards · Paiement',
    desc: 'Comment protéger tes marges et ta réputation. Organisation, retards, conflits, paiements fractionnés : tout ce qui fait un patron solide.',
    tags: ['Diviser les paiements', 'Organisation & protection', 'Suivi chantier']
  },
];

export default function Modules() {
  return (
    <section className="py-20 bg-[#fffcf2] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#eb5e28] text-xs font-bold uppercase tracking-widest block mb-3">Le programme</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#252422] uppercase mb-4">
            Les <span className="text-[#eb5e28]">7 Modules</span>
          </h2>
          <p className="text-[#403d39] text-lg max-w-2xl mx-auto">
            Chaque module est conçu pour être appliqué immédiatement : pas pour être "regardé" et oublié.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 gap-5">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="border border-[#e5e7eb] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 p-5 bg-[#fffcf2] border-b border-[#e5e7eb]">
                <div className="w-9 h-9 bg-[#eb5e28] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#252422] font-black text-sm">{module.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#252422] font-extrabold text-lg leading-tight">{module.title}</h3>
                  <p className="text-[#6b7280] text-sm mt-0.5">{module.subtitle}</p>
                </div>
              </div>
              <div className="p-5 bg-white">
                <p className="text-[#374151] text-base leading-relaxed mb-4">{module.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {module.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="bg-[#eb5e28]/10 text-[#c95520] text-xs font-semibold px-3 py-1 rounded-full border border-[#eb5e28]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
