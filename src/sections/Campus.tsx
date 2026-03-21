import { MapPin, Phone, Mail, Train, ArrowRight } from 'lucide-react';

const campuses = [
  {
    city: 'Paris',
    district: 'La Défense',
    address: '2 Place de la Défense, 92800 Puteaux',
    phone: '+33 1 89 71 61 44',
    email: 'contact@emma-formation.fr',
    transport: 'RER A, Métro 1 – La Défense Grande Arche',
    description: 'Situé au cœur du 1er quartier d\'affaires européen, notre campus parisien vous plonge directement dans l\'univers professionnel. Accès direct aux plus grandes entreprises et groupes internationaux.',
    highlights: ['500+ étudiants', '1er quartier d\'affaires d\'Europe', 'Accès direct aux recruteurs', 'Espaces modernes et connectés'],
    image: '/hero_construction.jpg',
    gradient: 'from-blue-600 to-blue-900',
    available: true,
  },
  {
    city: 'Nice',
    district: 'Centre-ville',
    address: '15 Avenue Jean Médecin, 06000 Nice',
    phone: '+33 4 22 53 76 97',
    email: 'contact.paca@emma-formation.fr',
    transport: 'Tramway T1 – Jean Médecin, Gare de Nice-Ville',
    description: 'Notre campus niçois offre un cadre de vie exceptionnel sur la Côte d\'Azur, avec un tissu économique riche : tourisme, hôtellerie, commerce international et startups.',
    highlights: ['200+ étudiants', 'Côte d\'Azur', 'Réseau hôtellerie & tourisme', 'Cadre de vie exceptionnel'],
    image: '/community_workshop.jpg',
    gradient: 'from-sky-500 to-blue-700',
    available: true,
  },
];

export default function Campus() {
  return (
    <section id="campus" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-[#EFF6FF] px-4 py-2 rounded-full">
            Nos campus
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0A0F1E] mt-4 mb-4">
            2 campus, 1 ambition
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Paris La Défense et Nice : deux villes stratégiques pour construire votre réseau professionnel.
          </p>
        </div>

        {/* Campus cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {campuses.map((campus, i) => (
            <div key={i} className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Image with gradient overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={campus.image}
                  alt={`Campus ${campus.city}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${campus.gradient} opacity-70`} />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30">
                    ● Ouvert aux candidatures
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-black text-3xl">{campus.city}</h3>
                  <p className="text-white/80 font-medium">{campus.district}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <p className="text-[#64748B] text-sm leading-relaxed mb-6">{campus.description}</p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {campus.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-2 bg-[#F8FAFC] rounded-lg px-3 py-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] flex-shrink-0" />
                      <span className="text-xs font-semibold text-[#1E293B]">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Contact info */}
                <div className="space-y-3 mb-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
                    <span className="text-[#64748B]">{campus.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Train className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
                    <span className="text-[#64748B]">{campus.transport}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
                    <a href={`tel:${campus.phone.replace(/\s/g, '')}`} className="text-[#1D4ED8] font-semibold hover:underline">{campus.phone}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
                    <a href={`mailto:${campus.email}`} className="text-[#1D4ED8] font-semibold hover:underline">{campus.email}</a>
                  </div>
                </div>

                <a href="#candidature" className="w-full flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all duration-200">
                  Candidater sur ce campus
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder / visual */}
        <div className="bg-gradient-to-r from-[#0A0F1E] to-[#1E3A8A] rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-black mb-2">Bientôt près de chez vous</h3>
              <p className="text-white/60 max-w-lg">
                EMMA développe son réseau de campus en France. Inscrivez-vous pour être alerté(e) de l'ouverture d'un campus dans votre région.
              </p>
            </div>
            <div className="flex gap-6 flex-shrink-0">
              <div className="text-center">
                <div className="text-4xl font-black text-[#F59E0B]">2</div>
                <div className="text-sm text-white/60">Campus actifs</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-4xl font-black text-[#F59E0B]">+2</div>
                <div className="text-sm text-white/60">En projet</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
