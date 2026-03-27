import { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const formations = [
  { name: 'BTS Commerce International', level: 'Bac+2', duration: '2 ans' },
  { name: 'BTS Management Commercial', level: 'Bac+2', duration: '2 ans' },
  { name: 'BTS NDRC', level: 'Bac+2', duration: '2 ans' },
  { name: 'BTS Comptabilité et Gestion', level: 'Bac+2', duration: '2 ans' },
  { name: 'Bachelor Développement Commercial', level: 'Bac+3', duration: '1 an' },
  { name: 'Négociateur Technico-Commercial', level: 'Bac+2', duration: '1 an' },
  { name: 'Réceptionniste en Hôtellerie', level: 'Bac', duration: '1 an' },
  { name: 'Manager d\'Unité Marchande', level: 'Bac+2', duration: '2 ans' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formationsOpen, setFormationsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="flex items-center flex-shrink-0">
            <img src="/logo/logo-latelier.png" alt="L'Atelier" className="h-10 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">

            {/* Formations dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-[#1E293B] font-semibold text-sm hover:text-[#1D4ED8] transition-colors"
                onMouseEnter={() => setFormationsOpen(true)}
                onMouseLeave={() => setFormationsOpen(false)}
              >
                Formations <ChevronDown className="w-4 h-4" />
              </button>
              {/* Mega dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transition-all duration-200 ${formationsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setFormationsOpen(true)}
                onMouseLeave={() => setFormationsOpen(false)}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-4">Toutes nos formations en alternance</p>
                <div className="grid grid-cols-2 gap-2">
                  {formations.map((f, i) => (
                    <a
                      key={i}
                      href="#formations"
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-[#EFF6FF] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-[#1E293B] group-hover:text-[#1D4ED8]">{f.name}</span>
                      <div className="flex gap-1 ml-2 flex-shrink-0">
                        <span className="text-xs bg-[#1D4ED8]/10 text-[#1D4ED8] px-2 py-0.5 rounded-full font-bold">{f.level}</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{f.duration}</span>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a href="#formations" className="text-sm text-[#1D4ED8] font-bold hover:underline">Voir toutes les formations →</a>
                </div>
              </div>
            </div>

            <a href="#campus" className="text-[#1E293B] font-semibold text-sm hover:text-[#1D4ED8] transition-colors">Campus</a>
            <a href="#entreprises" className="text-[#1E293B] font-semibold text-sm hover:text-[#1D4ED8] transition-colors">Recruteurs</a>
            <a href="#temoignages" className="text-[#1E293B] font-semibold text-sm hover:text-[#1D4ED8] transition-colors">Témoignages</a>
            <a href="#contact" className="text-[#1E293B] font-semibold text-sm hover:text-[#1D4ED8] transition-colors">Contact</a>
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+33189716144" className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#1D4ED8] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">01 89 71 61 44</span>
            </a>
            <a href="#candidature" className="btn-primary !py-3 !px-6 !text-xs">
              Candidater
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#1E293B]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-3">Formations</p>
            <div className="space-y-2">
              {formations.map((f, i) => (
                <a
                  key={i}
                  href="#formations"
                  className="flex items-center justify-between py-2 border-b border-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-sm font-semibold text-[#1E293B]">{f.name}</span>
                  <span className="text-xs bg-[#1D4ED8]/10 text-[#1D4ED8] px-2 py-0.5 rounded-full font-bold ml-2">{f.level}</span>
                </a>
              ))}
            </div>
          </div>
          <a href="#campus" className="block py-2 text-[#1E293B] font-semibold" onClick={() => setMenuOpen(false)}>Campus</a>
          <a href="#entreprises" className="block py-2 text-[#1E293B] font-semibold" onClick={() => setMenuOpen(false)}>Recruteurs</a>
          <a href="#contact" className="block py-2 text-[#1E293B] font-semibold" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#candidature" className="btn-primary w-full text-center block">Candidater</a>
        </div>
      )}
    </nav>
  );
}
