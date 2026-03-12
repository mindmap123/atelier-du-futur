import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#252422] uppercase mb-4">
          Découvre <span className="text-[#eb5e28]">l'Atelier</span>
        </h2>
        <p className="text-[#6b7280] mb-8 max-w-xl mx-auto">
          3 minutes pour comprendre comment on va transformer ton business
        </p>

        {/* Video Container */}
        <div className="relative aspect-video bg-[#2B2A27] rounded-lg overflow-hidden border border-[#403d39]">
          {/* Placeholder pour la vidéo - remplacer par l'URL de ta vidéo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-[#eb5e28] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
              <Play className="w-8 h-8 text-[#fffcf2] ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#252422] to-transparent">
            <p className="text-[#ccc5b9] text-sm">Clique pour regarder la vidéo de présentation</p>
          </div>
          
          {/* Uncomment pour intégrer une vraie vidéo YouTube/Vimeo
          <iframe 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="Vidéo de présentation"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          */}
        </div>
      </div>
    </section>
  );
}
