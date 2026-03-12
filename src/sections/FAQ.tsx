import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Je suis encore salarié : est-ce que c\'est trop tôt pour rejoindre ?',
    a: 'Non, c\'est même le meilleur moment. Le module 2 est entièrement dédié à la sortie du salariat : comment utiliser ton chômage, l\'ACRE, un prêt bancaire. Tu prépares ton départ sereinement avant de sauter le pas.'
  },
  {
    q: 'Je ne suis pas à l\'aise avec le numérique : est-ce que je vais m\'en sortir ?',
    a: 'C\'est fait pour ça. Ton site internet et ton Google My Business sont créés par notre équipe, pas par toi. Tu n\'as pas besoin de savoir coder ou de maîtriser le marketing digital. Tu suis le système, on gère le technique.'
  },
  {
    q: 'Ça couvre quel type de corps de métier ?',
    a: 'La méthode fonctionne pour tous les métiers du bâtiment : maçonnerie, peinture, plomberie, électricité, carrelage, menuiserie, nettoyage, jardinage… Si tu travailles chez des particuliers ou des professionnels, les modules s\'adaptent à ta situation.'
  },
  {
    q: 'Pourquoi le prix augmente après les 30 premières places ?',
    a: 'Parce que le site internet, le Google My Business et le logo sont créés manuellement pour chaque membre. Ce travail a un coût. Les 30 premières places bénéficient du prix de lancement. Ensuite, le prix passe à 2 000 €.'
  },
  {
    q: 'Est-ce que je peux payer en plusieurs fois ?',
    a: 'Contacte-nous directement pour en parler. On est là pour que l\'argent ne soit pas un obstacle si tu es vraiment motivé.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#fffcf2] px-4">
      <div className="max-w-3xl mx-auto">
        <span className="text-[#eb5e28] text-xs font-bold uppercase tracking-widest block mb-3 text-center">Questions fréquentes</span>
        
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-black text-[#252422] text-center mb-12">
          Tu as des questions ? Normal.
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#fffcf2] transition-colors"
              >
                <span className="text-[#252422] font-bold text-base">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#eb5e28] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 pt-2 border-t border-[#f3f4f6]">
                  <p className="text-[#374151] text-base leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
