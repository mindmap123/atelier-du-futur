import { Target, Search, FileCheck, HardHat, UserPlus, TrendingUp } from 'lucide-react';

const modules = [
  {
    icon: Target,
    number: '01',
    title: 'Positionnement',
    desc: 'Trouve ta niche et définis ton offre irrésistible',
  },
  {
    icon: Search,
    number: '02',
    title: 'Prospection',
    desc: 'Attire des clients sans payer de publicité',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Vente & Devis',
    desc: 'Convertis 3x plus de prospects en clients',
  },
  {
    icon: HardHat,
    number: '04',
    title: 'Gestion de chantier',
    desc: 'Organise tes projets comme un pro',
  },
  {
    icon: UserPlus,
    number: '05',
    title: 'Recrutement',
    desc: 'Construis ton équipe sans stress',
  },
  {
    icon: TrendingUp,
    number: '06',
    title: 'Croissance',
    desc: 'Scale ton business sereinement',
  },
];

export default function Modules() {
  return (
    <section className="py-20 bg-[#fffcf2] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#252422] uppercase mb-4">
            Les <span className="text-[#eb5e28]">6 Modules</span>
          </h2>
          <p className="text-[#403d39] max-w-xl mx-auto">
            Un programme complet pour maîtriser chaque aspect de ton business
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-[#252422] p-6 rounded-lg group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#eb5e28] rounded-lg flex items-center justify-center">
                  <module.icon className="w-6 h-6 text-[#fffcf2]" />
                </div>
                <span className="text-[#403d39] text-4xl font-black">{module.number}</span>
              </div>
              <h3 className="text-[#fffcf2] font-bold text-lg uppercase mb-2">{module.title}</h3>
              <p className="text-[#ccc5b9] text-sm">{module.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
