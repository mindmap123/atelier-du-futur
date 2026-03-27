import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';

const formations = [
  'BTS Commerce International',
  'BTS Management Commercial',
  'BTS NDRC',
  'BTS Comptabilité et Gestion',
  'Bachelor Développement Commercial',
  'Négociateur Technico-Commercial',
  "Réceptionniste en Hôtellerie",
  "Manager d'Unité Marchande",
];

const certifications = [
  { name: 'Qualiopi', desc: 'Certifié formation' },
  { name: 'CFA', desc: 'Centre de Formation' },
  { name: 'Parcoursup', desc: 'Référencé' },
  { name: 'RNCP', desc: 'Diplômes reconnus' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0F1E] text-white">

      {/* Candidature / Contact CTA */}
      <div id="candidature" className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">Candidature</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">
                Prêt(e) à construire votre avenir ?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Rejoignez EMMA et démarrez votre alternance dans l'entreprise de vos rêves. Réponse sous 48h.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <Phone className="w-5 h-5 text-[#1D4ED8] mb-2" />
                  <div className="text-xs text-white/40 mb-1">Campus Paris</div>
                  <a href="tel:+33189716144" className="font-bold hover:text-[#1D4ED8] transition-colors">01 89 71 61 44</a>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <Phone className="w-5 h-5 text-[#1D4ED8] mb-2" />
                  <div className="text-xs text-white/40 mb-1">Campus Nice</div>
                  <a href="tel:+33422537697" className="font-bold hover:text-[#1D4ED8] transition-colors">04 22 53 76 97</a>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <Mail className="w-5 h-5 text-[#1D4ED8] mb-2" />
                  <div className="text-xs text-white/40 mb-1">Email Paris</div>
                  <a href="mailto:contact@emma-formation.fr" className="font-bold hover:text-[#1D4ED8] transition-colors text-sm">contact@emma-formation.fr</a>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <Mail className="w-5 h-5 text-[#1D4ED8] mb-2" />
                  <div className="text-xs text-white/40 mb-1">Email Nice</div>
                  <a href="mailto:contact.paca@emma-formation.fr" className="font-bold hover:text-[#1D4ED8] transition-colors text-sm">contact.paca@emma-formation.fr</a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">
              <h3 className="font-black text-xl mb-6">Envoyer ma candidature</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/50 mb-1 block">Prénom</label>
                    <input
                      type="text"
                      placeholder="Prénom"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#1D4ED8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/50 mb-1 block">Nom</label>
                    <input
                      type="text"
                      placeholder="Nom"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#1D4ED8] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/50 mb-1 block">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.fr"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#1D4ED8] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/50 mb-1 block">Formation souhaitée</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1D4ED8] transition-colors appearance-none">
                    <option value="" className="bg-[#0A0F1E]">Choisir une formation</option>
                    {formations.map((f, i) => (
                      <option key={i} value={f} className="bg-[#0A0F1E]">{f}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-white/50 mb-1 block">Campus</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Paris', 'Nice'].map((c) => (
                      <label key={c} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 cursor-pointer hover:border-[#1D4ED8] transition-colors">
                        <input type="radio" name="campus" value={c} className="accent-[#1D4ED8]" />
                        <span className="text-sm font-medium">📍 {c}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full btn-gold flex items-center justify-center gap-2 !py-4"
                >
                  Envoyer ma candidature
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-white/30">Réponse garantie sous 48h · 100% gratuit</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">

          {/* Logo & mission */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src="/logo/logo-latelier.png" alt="L'Atelier" className="h-10 w-auto" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              La formation qui transforme les artisans du bâtiment en entrepreneurs de génie.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#1D4ED8] hover:border-[#1D4ED8] transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-4 text-white/70">Formations</h4>
            <ul className="space-y-2">
              {formations.slice(0, 5).map((f, i) => (
                <li key={i}>
                  <a href="#formations" className="text-sm text-white/40 hover:text-white transition-colors">{f}</a>
                </li>
              ))}
              <li>
                <a href="#formations" className="text-sm text-[#1D4ED8] hover:text-[#3B82F6] font-semibold transition-colors">Voir toutes →</a>
              </li>
            </ul>
          </div>

          {/* Campus */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-4 text-white/70">Campus</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/40">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#1D4ED8] mt-0.5 flex-shrink-0" />
                  <span>Paris La Défense<br />2 Place de la Défense</span>
                </div>
              </li>
              <li className="text-sm text-white/40">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#1D4ED8] mt-0.5 flex-shrink-0" />
                  <span>Nice Centre<br />15 Avenue Jean Médecin</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-4 text-white/70">Certifications</h4>
            <div className="grid grid-cols-2 gap-2">
              {certifications.map((c, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                  <div className="font-black text-sm text-white">{c.name}</div>
                  <div className="text-xs text-white/30 mt-0.5">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© 2024 EMMA – École des Metiers et Management en Alternance. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Accessibilité</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
