import { useState } from 'react';
import { Clock, TrendingUp, ArrowRight, Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

const categories = ['Tous', 'Commerce', 'Management', 'Hôtellerie', 'Comptabilité'];

const formations = [
  {
    id: 1,
    name: 'BTS Commerce International',
    category: 'Commerce',
    duration: '2 ans',
    entryLevel: 'Bac',
    exitLevel: 'Bac+2',
    rhythm: '3 jours en entreprise / 2 jours en école',
    description: "Maîtrisez les techniques du commerce à l'international : négociation, logistique, import/export et stratégie commerciale globale.",
    metiers: ['Chargé(e) d\'affaires export', 'Commercial(e) international(e)', 'Assistant(e) trade marketing', 'Responsable zone export'],
    color: 'from-blue-600 to-blue-800',
    badge: 'Bac+2',
    campus: ['Paris', 'Nice'],
    salary: '1 700 – 2 500 €/mois',
  },
  {
    id: 2,
    name: 'BTS Management Commercial Opérationnel',
    category: 'Commerce',
    duration: '2 ans',
    entryLevel: 'Bac',
    exitLevel: 'Bac+2',
    rhythm: '3 jours en entreprise / 2 jours en école',
    description: 'Développez vos compétences en gestion d\'équipe, animation commerciale et pilotage d\'unité marchande.',
    metiers: ['Manager de rayon', 'Responsable d\'équipe', 'Chef de secteur', 'Directeur adjoint de magasin'],
    color: 'from-blue-700 to-indigo-800',
    badge: 'Bac+2',
    campus: ['Paris', 'Nice'],
    salary: '1 700 – 2 800 €/mois',
  },
  {
    id: 3,
    name: 'BTS Négociation et Digitalisation de la Relation Client',
    category: 'Commerce',
    duration: '2 ans',
    entryLevel: 'Bac',
    exitLevel: 'Bac+2',
    rhythm: '3 jours en entreprise / 2 jours en école',
    description: 'Devenez expert en relation client et techniques de vente digitales : CRM, réseaux sociaux, prospection omnicanale.',
    metiers: ['Conseiller(ère) commercial(e)', 'Chargé(e) de clientèle', 'Account Manager', 'Business Developer'],
    color: 'from-sky-600 to-blue-700',
    badge: 'Bac+2',
    campus: ['Paris', 'Nice'],
    salary: '1 700 – 2 600 €/mois',
  },
  {
    id: 4,
    name: 'BTS Comptabilité et Gestion',
    category: 'Comptabilité',
    duration: '2 ans',
    entryLevel: 'Bac',
    exitLevel: 'Bac+2',
    rhythm: '3 jours en entreprise / 2 jours en école',
    description: 'Acquérez les fondamentaux de la comptabilité, fiscalité et contrôle de gestion pour travailler en cabinet ou en entreprise.',
    metiers: ['Assistant(e) comptable', 'Collaborateur(trice) de cabinet', 'Gestionnaire administratif(ve)', 'Contrôleur(euse) de gestion junior'],
    color: 'from-blue-800 to-slate-800',
    badge: 'Bac+2',
    campus: ['Paris', 'Nice'],
    salary: '1 700 – 2 400 €/mois',
  },
  {
    id: 5,
    name: 'Bachelor Responsable Développement Commercial',
    category: 'Management',
    duration: '1 an',
    entryLevel: 'Bac+2',
    exitLevel: 'Bac+3',
    rhythm: '4 jours en entreprise / 1 jour en école',
    description: "Pilotez une stratégie commerciale complète : prospection, fidélisation, management d'équipe et analyse de performance.",
    metiers: ['Responsable commercial(e)', 'Chef des ventes', 'Business Developer Senior', 'Directeur(trice) commercial(e)'],
    color: 'from-indigo-600 to-purple-700',
    badge: 'Bac+3',
    campus: ['Paris', 'Nice'],
    salary: '2 200 – 3 500 €/mois',
    highlight: true,
  },
  {
    id: 6,
    name: 'Négociateur Technico-Commercial',
    category: 'Commerce',
    duration: '1 an',
    entryLevel: 'Bac',
    exitLevel: 'Bac+2',
    rhythm: '4 jours en entreprise / 1 jour en école',
    description: 'Combinez expertise technique et compétences commerciales pour vendre des produits complexes et gérer un portefeuille clients.',
    metiers: ['Technico-commercial(e)', 'Ingénieur(e) commercial(e)', 'VRP', 'Chargé(e) d\'affaires'],
    color: 'from-blue-500 to-cyan-600',
    badge: 'Bac+2',
    campus: ['Paris', 'Nice'],
    salary: '1 900 – 2 800 €/mois',
  },
  {
    id: 7,
    name: 'Réceptionniste en Hôtellerie',
    category: 'Hôtellerie',
    duration: '1 an',
    entryLevel: 'Bac',
    exitLevel: 'Bac',
    rhythm: '4 jours en entreprise / 1 jour en école',
    description: 'Maîtrisez l\'accueil, la gestion des réservations et les standards de l\'hôtellerie internationale pour intégrer les plus grands établissements.',
    metiers: ['Réceptionniste', 'Agent de réservation', 'Night Auditor', 'Chef de réception'],
    color: 'from-sky-500 to-blue-600',
    badge: 'Bac',
    campus: ['Paris', 'Nice'],
    salary: '1 600 – 2 200 €/mois',
  },
  {
    id: 8,
    name: "Manager d'Unité Marchande",
    category: 'Management',
    duration: '2 ans',
    entryLevel: 'Bac',
    exitLevel: 'Bac+2',
    rhythm: '3 jours en entreprise / 2 jours en école',
    description: "Gérez et animez une unité commerciale (boutique, rayon, agence) : gestion d'équipe, merchandising, performance et satisfaction client.",
    metiers: ['Responsable de boutique', 'Chef de rayon', 'Directeur(trice) adjoint(e)', 'Responsable de secteur'],
    color: 'from-blue-600 to-blue-900',
    badge: 'Bac+2',
    campus: ['Paris', 'Nice'],
    salary: '1 800 – 2 800 €/mois',
  },
];

function FormationCard({ f }: { f: typeof formations[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover shadow-sm ${f.highlight ? 'ring-2 ring-[#1D4ED8]' : ''}`}>
      {/* Top color bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${f.color}`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            {f.highlight && (
              <span className="text-xs bg-[#F59E0B] text-[#0A0F1E] px-2 py-0.5 rounded-full font-bold mb-2 inline-block">⭐ Populaire</span>
            )}
            <h3 className="font-black text-[#1E293B] text-lg leading-tight">{f.name}</h3>
          </div>
          <span className={`ml-3 flex-shrink-0 text-xs font-black text-white px-3 py-1.5 rounded-xl bg-gradient-to-r ${f.color}`}>
            {f.badge}
          </span>
        </div>

        {/* Quick info */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-[#F8FAFC] rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span className="text-xs text-[#64748B] font-medium uppercase tracking-wide">Durée</span>
            </div>
            <span className="font-black text-[#1E293B] text-base">{f.duration}</span>
          </div>
          <div className="bg-[#F8FAFC] rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span className="text-xs text-[#64748B] font-medium uppercase tracking-wide">Niveau</span>
            </div>
            <span className="font-black text-[#1E293B] text-base">{f.entryLevel} → {f.exitLevel}</span>
          </div>
        </div>

        {/* Rythme */}
        <p className="text-xs text-[#64748B] bg-blue-50 rounded-lg px-3 py-2 mb-4 font-medium">
          🗓 {f.rhythm}
        </p>

        {/* Description */}
        <p className="text-sm text-[#64748B] leading-relaxed mb-4">{f.description}</p>

        {/* Toggle métiers */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between text-sm font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors"
        >
          <span className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Débouchés métiers
          </span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {expanded && (
          <div className="mt-3 space-y-2">
            {f.metiers.map((m, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[#1E293B]">
                <TrendingUp className="w-3.5 h-3.5 text-[#1D4ED8] flex-shrink-0" />
                {m}
              </div>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-[#64748B]">Salaire moyen après diplôme</p>
              <p className="font-black text-[#1D4ED8] text-base">{f.salary}</p>
            </div>
          </div>
        )}

        {/* Campus badges */}
        <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
          {f.campus.map((c, i) => (
            <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">📍 {c}</span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#candidature"
          className="mt-4 w-full flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-sm py-3 px-4 rounded-xl transition-all duration-200 hover:gap-3"
        >
          Candidater à cette formation
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default function Formations() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered = activeCategory === 'Tous'
    ? formations
    : formations.filter(f => f.category === activeCategory);

  return (
    <section id="formations" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-[#EFF6FF] px-4 py-2 rounded-full">
            Catalogue de formations
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0A0F1E] mt-4 mb-4">
            Trouvez votre formation
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            24 formations en alternance accessibles depuis le Bac. Comprenez en un clin d'œil la durée, le niveau et vos débouchés.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1D4ED8] text-white shadow-lg shadow-blue-200'
                  : 'bg-white text-[#64748B] border border-gray-200 hover:border-[#1D4ED8] hover:text-[#1D4ED8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(f => (
            <FormationCard key={f.id} f={f} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] rounded-3xl p-10 text-white">
          <h3 className="text-2xl font-black mb-3">Vous ne savez pas quelle formation choisir ?</h3>
          <p className="text-white/70 mb-6">Nos conseillers vous guident gratuitement vers la formation qui correspond à votre projet.</p>
          <a href="#contact" className="btn-gold inline-flex items-center gap-2">
            Parler à un conseiller
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
