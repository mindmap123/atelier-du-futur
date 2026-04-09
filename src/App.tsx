import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './sections/Hero';
import VideoSection from './sections/VideoSection';
import Problem from './sections/Problem';
import Offer from './sections/Offer';
import Modules from './sections/Modules';
import Skool from './sections/Skool';
import Guarantee from './sections/Guarantee';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.12 });
    let raf: number;
    const animate = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative max-w-[100vw]" style={{ overflowX: 'clip' }}>
      <main className="max-w-[100vw]" style={{ overflowX: 'clip' }}>
        <Hero />
        <VideoSection />
        <Problem />
        <Offer />
        <Modules />
        <Skool />
        <Guarantee />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}

export default App;
