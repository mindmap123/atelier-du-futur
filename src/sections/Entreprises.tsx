import { ArrowRight, CheckCircle, Users, Handshake, Clock, Star } from 'lucide-react';

const partners = [
  { name: 'Nexity', sector: 'Immobilier' },
  { name: 'Hyatt', sector: 'Hôtellerie' },
  { name: 'Orange', sector: 'Télécom' },
  { name: 'Kiabi', sector: 'Retail' },
  { name: 'Amazon', sector: 'E-commerce' },
  { name: 'LeBonCoin', sector: 'Digital' },
  { name: 'Microsoft', sector: 'Tech' },
  { name: 'SumUp', sector: 'Fintech' },
  { name: 'L\'Oréal', sector: 'Cosmétique' },
  { name: 'LVMH', sector: 'Luxe' },
  { name: 'Accor Hotels', sector: 'Hôtellerie' },
  { name: 'BNP Paribas', sector: 'Finance' },
];

const benefits = [
  {
    icon: Users,
    title: 'Profils présélectionnés',
    desc: "Nous sélectionnons et préparons nos alternants avant de vous les présenter. Vous ne rencontrez que des candidats motivés et formés.",
  },
  {
    icon: Clock,
    title: 'Zéro démarche administrative',
    desc: "EMMA gère l'intégralité du dossier OPCO, des contrats et des formalités. Vous vous concentrez sur l'intégration de votre alternant.",
  },
  {
    icon: Handshake,
    title: 'Accompagnement tuteur',
    desc: "Nos équipes accompagnent vos tuteurs tout au long de l'alternance pour garantir une expérience optimale des deux côtés.",
  },
  {
    icon: Star,
    title: 'Financement 100% pris en charge',
    desc: "L'alternance est financée par les OPCO. Le coût de formation est nul ou très faible pour votre entreprise, selon votre accord de branche.",
  },
];

export default function Entreprises() {
  return (
    <section id="entreprises" className="py-24 bg-[#0A0F1E] text-white overflow-hidden relative">

      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4ED8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1D4ED8]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/30 px-4 py-2 rounded-full">
            Recruteurs & entreprises
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black mt-4 mb-4">
            Recrutez vos futurs talents
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Rejoignez les 150+ entreprises partenaires qui font confiance à EMMA pour recruter leurs alternants.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-[#1D4ED8]/20 rounded-xl flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-[#3B82F6]" />
              </div>
              <h3 className="font-black text-lg mb-2">{b.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] rounded-3xl p-8 md:p-12 mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-3">Vous recrutez en alternance ?</h3>
              <div className="space-y-2">
                {['Rencontrez nos étudiants en 48h', 'Profils validés par nos équipes pédagogiques', 'Accompagnement tuteur inclus'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white/80 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a href="#contact" className="btn-gold flex items-center gap-2 justify-center whitespace-nowrap">
                Déposer une offre
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+33189716144" className="text-center text-sm text-white/70 hover:text-white transition-colors">
                📞 01 89 71 61 44
              </a>
            </div>
          </div>
        </div>

        {/* Partners logos */}
        <div className="text-center">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8">Ils nous font confiance</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl py-4 px-3 text-center hover:bg-white/10 transition-colors">
                <div className="font-black text-white text-sm">{p.name}</div>
                <div className="text-white/30 text-xs mt-1">{p.sector}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
