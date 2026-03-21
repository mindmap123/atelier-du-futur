import { BookOpen, Target, Network, Award, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: BookOpen,
    number: '01',
    title: 'Une pédagogie ancrée dans le réel',
    description: "Nos formateurs sont des professionnels en activité. Chaque cours est construit autour de cas pratiques, de mises en situation et de projets concrets issus du monde de l'entreprise.",
    points: ['Formateurs praticiens', 'Cas réels d\'entreprise', 'Projets professionnels', 'Visites et interventions terrain'],
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: Target,
    number: '02',
    title: 'Un suivi personnalisé tout au long',
    description: "Chaque étudiant bénéficie d'un suivi individuel : référent pédagogique, coach en recherche d'alternance et accompagnement jusqu'à la certification.",
    points: ['Référent dédié', 'Coach emploi inclus', 'Préparation aux entretiens', 'Suivi en entreprise'],
    color: 'from-indigo-600 to-purple-700',
  },
  {
    icon: Network,
    number: '03',
    title: 'Un réseau de 150+ entreprises',
    description: "Grâce à nos partenariats avec les plus grandes entreprises françaises et internationales, nous facilitons la mise en relation et maximisons vos chances de trouver l'entreprise idéale.",
    points: ['Accès au job board EMMA', 'Forums entreprises', 'Speed dating RH', '1 200+ alternants placés'],
    color: 'from-sky-600 to-blue-700',
  },
  {
    icon: Award,
    number: '04',
    title: 'Des diplômes reconnus par l\'État',
    description: "Tous nos diplômes sont enregistrés au RNCP (Répertoire National des Certifications Professionnelles). Une garantie de valeur sur le marché du travail.",
    points: ['Diplômes RNCP', 'Certification Qualiopi', 'Reconnus par Parcoursup', 'Éligibles CPF'],
    color: 'from-blue-700 to-slate-800',
  },
];

export default function Pedagogie() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-[#EFF6FF] px-4 py-2 rounded-full">
              Notre approche
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0A0F1E] mt-4 mb-6">
              Pourquoi choisir EMMA ?
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              EMMA n'est pas une école ordinaire. Depuis 8 ans, nous avons développé une approche unique qui combine formation de qualité, insertion professionnelle garantie et réseau d'entreprises de premier plan.
            </p>
            <a href="#formations" className="btn-primary inline-flex items-center gap-2">
              Découvrir nos formations
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right: quick stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '8', unit: 'ans', label: "d'expérience" },
              { val: '24', unit: '', label: 'formations disponibles' },
              { val: '1 200', unit: '+', label: 'alternants placés' },
              { val: '98', unit: '%', label: 'taux de satisfaction' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="text-4xl font-black text-[#1D4ED8]">
                  {s.val}<span className="text-2xl">{s.unit}</span>
                </div>
                <div className="text-sm text-[#64748B] mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row">
              {/* Color side */}
              <div className={`bg-gradient-to-b ${p.color} p-6 md:w-20 flex md:flex-col items-center justify-start gap-3 md:gap-0`}>
                <span className="text-white/30 font-black text-4xl md:text-5xl md:mb-4">{p.number}</span>
                <p.icon className="w-7 h-7 text-white" />
              </div>
              {/* Content */}
              <div className="p-6 flex-1">
                <h3 className="font-black text-[#1E293B] text-lg mb-2">{p.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {p.points.map((pt, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-[#1E293B] font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] flex-shrink-0" />
                      {pt}
                    </div>
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
