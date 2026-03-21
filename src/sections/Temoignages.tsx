import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const temoignages = [
  {
    name: 'Théo M.',
    formation: 'BTS Commerce International',
    entreprise: 'Orange',
    promo: 'Promotion 2023',
    avatar: '/formateur1.jpg',
    stars: 5,
    quote: "EMMA a été un vrai tournant dans ma carrière. Les formateurs sont des pros du terrain qui savent transmettre. J'ai signé un CDI chez Orange à la fin de mon alternance. Je recommande à 100%.",
    result: 'CDI obtenu en fin d\'alternance',
  },
  {
    name: 'Chloé R.',
    formation: 'BTS Négociation et Digitalisation',
    entreprise: 'LeBonCoin',
    promo: 'Promotion 2022',
    avatar: '/formateur2.jpg',
    stars: 5,
    quote: "Avant EMMA, je ne savais pas vraiment dans quelle direction aller. Le suivi personnalisé m'a aidée à trouver ma voie. J'ai découvert ma passion pour le digital et aujourd'hui je travaille chez LeBonCoin.",
    result: 'Business Developer chez LeBonCoin',
  },
  {
    name: 'Myriam K.',
    formation: 'Réceptionniste en Hôtellerie',
    entreprise: 'Hyatt Regency Paris',
    promo: 'Promotion 2023',
    avatar: '/formateur3.jpg',
    stars: 5,
    quote: "L'équipe EMMA m'a donné confiance en moi. La préparation aux entretiens était excellente. J'ai décroché une alternance au Hyatt Regency Paris dès la première semaine de recherche.",
    result: 'Réceptionniste au Hyatt Regency Paris',
  },
  {
    name: 'Lucas B.',
    formation: 'Bachelor Développement Commercial',
    entreprise: 'Microsoft France',
    promo: 'Promotion 2022',
    avatar: '/formateur1.jpg',
    stars: 5,
    quote: "Après mon BTS, j'ai continué avec le Bachelor chez EMMA. La progression est logique, les cours sont concrets et le réseau d'entreprises est impressionnant. Microsoft m'a recruté avant même la fin de ma formation.",
    result: 'Account Manager chez Microsoft France',
  },
  {
    name: 'Sofia A.',
    formation: 'BTS Management Commercial',
    entreprise: 'Kiabi',
    promo: 'Promotion 2023',
    avatar: '/formateur2.jpg',
    stars: 5,
    quote: "Ce que j'ai adoré chez EMMA, c'est le rythme alternance. 3 jours en entreprise, 2 en cours, c'est parfait pour apprendre vraiment. Kiabi m'a proposé un CDI à la fin, je suis maintenant chef de rayon.",
    result: 'Chef de rayon chez Kiabi',
  },
];

export default function Temoignages() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? temoignages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === temoignages.length - 1 ? 0 : c + 1));

  const t = temoignages[current];

  return (
    <section id="temoignages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-[#EFF6FF] px-4 py-2 rounded-full">
            Témoignages
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#0A0F1E] mt-4 mb-4">
            Ils ont choisi EMMA
          </h2>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto">
            Découvrez les parcours de nos anciens alternants et leurs réussites.
          </p>
        </div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 w-10 h-10 text-[#1D4ED8]/10" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar + info */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto md:mx-0 mb-3 border-4 border-[#1D4ED8]/20">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="font-black text-[#1E293B] text-lg">{t.name}</div>
                <div className="text-[#1D4ED8] text-sm font-semibold">{t.formation}</div>
                <div className="text-[#64748B] text-xs mt-1">{t.promo}</div>
                <div className="flex justify-center md:justify-start gap-0.5 mt-2">
                  {Array.from({length: t.stars}).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <blockquote className="text-[#1E293B] text-lg md:text-xl leading-relaxed font-medium mb-6 relative z-10">
                  "{t.quote}"
                </blockquote>

                {/* Result badge */}
                <div className="inline-flex items-center gap-2 bg-[#1D4ED8]/10 text-[#1D4ED8] px-4 py-2 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  <span className="text-sm font-bold">{t.result}</span>
                </div>

                {/* Entreprise */}
                <div className="mt-3">
                  <span className="text-xs text-[#64748B]">En alternance chez </span>
                  <span className="text-xs font-bold text-[#1E293B]">{t.entreprise}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prev}
                className="p-3 rounded-xl border border-gray-200 hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {temoignages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? 'w-6 h-2.5 bg-[#1D4ED8]'
                        : 'w-2.5 h-2.5 bg-gray-300 hover:bg-[#1D4ED8]/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-xl border border-gray-200 hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom mini testimonials */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {temoignages.slice(0, 3).map((t, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                current === i
                  ? 'border-[#1D4ED8] bg-[#EFF6FF]'
                  : 'border-gray-100 bg-[#F8FAFC] hover:border-[#1D4ED8]/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-[#1E293B] text-sm">{t.name}</div>
                  <div className="text-xs text-[#64748B]">{t.entreprise}</div>
                </div>
              </div>
              <p className="text-xs text-[#64748B] line-clamp-2">"{t.quote}"</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
