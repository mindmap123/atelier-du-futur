export default function VideoSection() {
  return (
    <section className="py-20 bg-[#ffffff] px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#252422] uppercase mb-4">
          Découvre <span className="text-[#eb5e28]">l'Atelier</span>
        </h2>
        <p className="text-[#6b7280] mb-10 max-w-xl mx-auto">
          3 minutes pour comprendre comment on va transformer ton business
        </p>

        {/* Video Container - 16:9 */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-[#403d39]" style={{ aspectRatio: '16/9' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/LgFIuOh9DUk?si=UYqAvbKNILt45OGv"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
