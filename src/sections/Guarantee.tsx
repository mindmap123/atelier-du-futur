import { Handshake } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <div className="border-2 border-[#eb5e28] rounded-2xl p-10 text-center bg-[#eb5e28]/5">
          <Handshake className="w-14 h-14 text-[#eb5e28] mx-auto mb-5" />
          
          <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-black text-[#252422] mb-5">
            On est là. Vraiment.
          </h2>
          
          <div className="text-[#374151] text-base leading-relaxed space-y-4">
            <p>
              Dès ton inscription sur Skool, tu es dans la communauté. Pas dans une liste email 
              que personne ne lit. Dans un vrai groupe actif où Enzo, Antho et Waxx interviennent 
              régulièrement.
            </p>
            
            <p>
              Tu bloques sur ton devis ? Tu poses dans le fil. Tu ne sais pas comment répondre 
              à un client qui négocie ? Tu poses dans le fil. Tu veux un avis sur ton site 
              avant de le lancer ? Tu poses dans le fil.
            </p>
            
            <p className="font-bold text-[#252422]">
              Tu ne paies pas pour regarder des vidéos dans ton coin. Tu rejoins une équipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
